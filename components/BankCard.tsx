import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card bg-bank-gradient">
        <div className="bank-card_content bg-bank-gradient">
          <div>
            <h1 className="text-[16px] font-semibold text-white">
              {userName || account.name}
            </h1>
            <p className="font-black text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>
          <article className="flex flex-col">
            <div className="flex justify-between">
              <h1 className="text-[12px] font-semibold text-white">
                {userName}
              </h1>
              <h2 className="text-[12px] font-semibold text-white"> ●● / ●●</h2>
            </div>
            <p className="text-[14px] font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●●<span className="text-[16px]">1234</span>
            </p>
          </article>
        </div>
        <div className="bank-card_icon bg-bank-gradient">
          <Image src="/icons/Paypass.svg" width={20} height={24} alt="pay" />
          <Image
            src="/icons/mastercard.svg"
            width={45}
            height={32}
            alt="mastercard"
          />
        </div>
        <Image
          src="/icons/lines.png"
          width={316}
          height={190}
          alt="lines"
          className="absolute top-2 left-48"
        />
      </Link>
    </div>
  );
};

export { BankCard };
