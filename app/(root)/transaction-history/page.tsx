export const dynamic = "force-dynamic";

import { HeaderBox } from "@/components/HeaderBox";
import { Pagination } from "@/components/Pagination";
import { TransactionsTable } from "@/components/TransactionsTable";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.action";
import { formatAmount } from "@/lib/utils";
import { redirect } from "next/navigation";

const TransactionHistory = async ({ searchParams }: SearchParamProps) => {
  const loggedIn = (await getLoggedInUser()) as User | null;

  if (!loggedIn) {
    redirect("/sign-in");
  }

  const accounts = await getAccounts({ userId: loggedIn.$id });
  const { id, page } = await searchParams;

  if (!accounts) return;
  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });

  if (!account) return;
  const rowsPerPage = 10;
  const totalPages = Math.ceil(account.transactions.length / rowsPerPage);
  const currentPage = Number(page) || 1;

  const indexOfLastTransaction = currentPage * rowsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;
  const currentTransactions = account.transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

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
                {formatAmount(account.data.currentBalance ?? 0)}
              </p>
            </div>
          </div>
          <section>
            <TransactionsTable transactions={currentTransactions ?? []} />
            {totalPages > 1 && (
              <div className="my-4 w-full">
                <Pagination page={currentPage} totalPages={totalPages} />
              </div>
            )}
          </section>
        </div>
      </div>
    </section>
  );
};

export default TransactionHistory;
