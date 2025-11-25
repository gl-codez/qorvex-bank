import { MobileNavbar } from "@/components/MobileNavbar";
import { Sidebar } from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Great", lastName: "Lucky" };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn?.firstName} />
      <div className="size-full flex-col">
        <div className="root-layout shadow-creditCard">
          <Image src="/icons/logo.png" alt="logo" width={30} height={30} />
          <div>
            <MobileNavbar user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
