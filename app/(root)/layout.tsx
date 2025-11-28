import { MobileNav } from "@/components/MobileNav";
import { Sidebar } from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Great", lastName: "Lucky" };

  return (
    <main className="flex h-screen w-full">
      <Sidebar user={loggedIn?.firstName} />
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
