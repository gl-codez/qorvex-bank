import Image from "next/image";
import Link from "next/link";
import { BankCard } from "./BankCard";

const RightSidebar = ({ user, banks, transactions }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar no-scrollbar !important">
      <section className="flex flex-col pb-8">
        <Image
          src="/icons/gradient-mesh.svg"
          alt="profile-banner"
          width={500}
          height={500}
          loading="eager"
        />
        <div className="profile">
          <div className="profile-img justify-center shadow-profile">
            <span className="flex justify-center text-5xl text-green-600 font-bold">
              {user.name[0]}
            </span>
          </div>
          <div className="profile-details">
            <h1 className="profile-name">{user.name}</h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>
      </section>
      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Banks</h2>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/icons/plus.svg"
              width={20}
              height={20}
              alt="plus"
              className="w-5 h-auto"
            />
            <h2 className="text-[14px] text-gray-600 font-semibold">
              Add Bank
            </h2>
          </Link>
        </div>
        {banks.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className="relative z-10">
              <BankCard
                key={banks[0].$id}
                account={banks[0]}
                userName={`${user.name}`}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <BankCard
                  key={banks[1].$id}
                  account={banks[1]}
                  userName={`${user.name}`}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
};

export { RightSidebar };
