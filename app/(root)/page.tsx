import { HeaderBox } from "@/components/HeaderBox";
import { TotalBalanceBox } from "@/components/TotalBalanceBox";

export default function Home() {
  const loggedIn = { firstName: "Great" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName}
            subtext="Access and manage your accounts and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.25}
          />
        </header>
      </div>
    </section>
  );
}
