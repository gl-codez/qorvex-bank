import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
  usePlaidLink,
} from "react-plaid-link";
import {
  createLinkToken,
  exchangePublicToken,
} from "@/lib/actions/user.action";
import Image from "next/image";

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    const getLinktoken = async () => {
      const data = await createLinkToken(user);
      setToken(data?.linkToken ?? "");
    };
    getLinktoken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      await exchangePublicToken({
        publicToken: public_token,
        user,
      });
      router.push("/");
    },
    [user, router]
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <>
      {variant === "primary" ? (
        <Button
          onClick={() => open()}
          disabled={!ready}
          className="plaidlink-primary bg-bank-gradient shadow-form"
        >
          Connect bank
        </Button>
      ) : variant === "ghost" ? (
        <Button
          onClick={() => open()}
          variant="ghost"
          className="plaidlink-ghost"
        >
          <Image
            src="/icons/connect-bank.svg"
            height={24}
            width={24}
            alt="connect bank"
          />
          <p className="hidden xl:block text-[16px] font-semibold text-black">
            Connect bank
          </p>
        </Button>
      ) : (
        <Button
          onClick={() => open()}
          className="sidebar-link relative plaidlink-default"
        >
          <div className="xl:justify-start flex justify-center items-center max-xl:w-full">
            <Image
              src="/icons/connect-bank.svg"
              height={24}
              width={24}
              alt="connect bank"
            />
          </div>
          <p className="max-xl:hidden text-[16px] font-semibold text-black">
            Connect bank
          </p>
        </Button>
      )}
    </>
  );
};

export { PlaidLink };
