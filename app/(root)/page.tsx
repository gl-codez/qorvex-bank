import { HeaderBox } from "@/components/HeaderBox";
import { RightSidebar } from "@/components/RightSidebar";
import { TotalBalanceBox } from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.action";

export default async function Home() {
  const loggedIn = (await getLoggedInUser()) as User | null;
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome,"
            user={loggedIn?.name}
            subtext="Access and manage your accounts and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.25}
          />
        </header>
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.54 }, { currentBalance: 103.54 }]}
      />
    </section>
  );
}
