import { HeaderBox } from "@/components/HeaderBox";
import { RecentTransactions } from "@/components/RecentTransactions";
import { RightSidebar } from "@/components/RightSidebar";
import { TotalBalanceBox } from "@/components/TotalBalanceBox";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.action";

export default async function Home({ searchParams }: SearchParamProps) {
  const loggedIn = (await getLoggedInUser()) as User | null;
  const accounts = await getAccounts({ userId: loggedIn.$id });
  const { id, page } = await searchParams;
  const currentPage = Number(page as string) || 1;

  if (!accounts) return;
  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome,"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your accounts and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
        <RecentTransactions
          accounts={accountsData}
          page={currentPage}
          transactions={account?.transactions ?? []}
          appwriteItemId={appwriteItemId}
        />
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={account?.transactions ?? []}
        banks={accountsData.slice(0, 2)}
      />
    </section>
  );
}
