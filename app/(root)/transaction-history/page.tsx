import { HeaderBox } from "@/components/HeaderBox";
import { TransactionsTable } from "@/components/TransactionsTable";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.action";
import { formatAmount } from "@/lib/utils";

const TransactionHistory = async ({ searchParams }: SearchParamProps) => {
  const loggedIn = (await getLoggedInUser()) as User | null;
  const accounts = await getAccounts({ userId: loggedIn.$id });
  const { id, page } = await searchParams;
  // const currentPage = Number(page as string) || 1;

  if (!accounts) return;
  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });
  return (
    <section className="transactions">
      <div className="transactions-header">
        <HeaderBox
          title="Transaction History"
          subtext="See your bank details and transactions."
        />
        <div className="space-y-6">
          <div className="transactions-account">
            <div className="flex flex-col gap-2">
              <h2 className="text-[18px] font-bold text-white">
                {account?.data.name}
              </h2>
              <p className="text-sm text-[#F6FEF9]">
                {account?.data.officialName}
              </p>
              <p className="text-sm font-semibold tracking-[1.1px] text-white">
                ●●●● ●●●●{" "}
                <span className="text-[16px]">{account?.data.mask}</span>
              </p>
            </div>
            <div className="transactions-account-balance">
              <p className="text-sm">Current balance</p>
              <p className="text-2xl font-bold">
                {formatAmount(account?.data.currentBalance ?? 0)}
              </p>
            </div>
          </div>
          <section>
            <TransactionsTable transactions={account?.transactions ?? []} />
          </section>
        </div>
      </div>
    </section>
  );
};

export default TransactionHistory;
