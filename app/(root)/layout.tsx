export const dynamic = "force-dynamic";

import { MobileNav } from "@/components/MobileNav";
import { Sidebar } from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.action";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = (await getLoggedInUser()) as User | null;
  if (!loggedIn) redirect("/sign-in");
  return (
    <main className="flex h-screen w-full">
      <Sidebar user={loggedIn} />
      <div className="size-full flex-col">
        <div className="root-layout shadow-creditCard">
          <Image src="/icons/logo.png" alt="logo" width={50} height={50} />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
