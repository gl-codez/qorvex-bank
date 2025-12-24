"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { formUrlQuery, formatAmount } from "@/lib/utils";
import { SelectValue } from "@radix-ui/react-select";

export const BankDropdown = ({
  accounts = [],
  setValue,
  otherStyles,
}: BankDropdownProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selected, setSelected] = useState(accounts[0]);

  const handleBankChange = (id: string) => {
    const account = accounts.find((account) => account.appwriteItemId === id)!;

    setSelected(account);
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "id",
      value: id,
    });
    router.push(newUrl, { scroll: false });

    if (setValue) {
      setValue("senderBank", id);
    }
  };

  return (
    <Select
      defaultValue={selected.id}
      onValueChange={(value) => handleBankChange(value)}
    >
      <SelectTrigger
        className={`flex w-full bg-white gap-3 md:w-[300px] border border-gray-300 focus-visible:border-green-700 focus-visible:ring-0 ${otherStyles}`}
      >
        <SelectValue>
          <div className="flex items-center gap-3">
            <Image
              src="icons/credit-card.svg"
              width={20}
              height={20}
              alt="account"
            />
            <p className="line-clamp-1 w-full text-left">{selected.name}</p>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent
        className={`w-full bg-white md:w-[300px] shadow-lg rounded-lg border-gray-200  mt-5 ${otherStyles}`}
        position="popper"
        side="bottom"
        align="start"
      >
        <SelectGroup>
          <SelectLabel className="font-normal text-gray-500 py-3! px-6!">
            Select a bank to display
          </SelectLabel>
          {accounts.map((account: Account) => (
            <SelectItem
              key={account.id}
              value={account.appwriteItemId}
              className="cursor-pointer border-t border-gray-200"
            >
              <div className="flex flex-col py-3! px-6!">
                <p className="text-16 font-medium">{account.name}</p>
                <p className="text-14 font-medium text-green-600">
                  {formatAmount(account.currentBalance)}
                </p>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
