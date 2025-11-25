"use client";

import { sidebarLinks } from "@/app/constants";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MobileNavbar = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            alt="menu"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left">
          <Link
            href="/"
            className="mb-4 flex cursor-pointer items-center gap-2"
          >
            <Image
              src="/icons/logo.png"
              alt="qorvex logo"
              width={34}
              height={34}
              className="size-6 max-xl:size-14"
            />
            <h1 className="sidebar-logo font-ibm-plex-serif">Qorvex</h1>
          </Link>
          {sidebarLinks.map((item) => {
            const isActive =
              pathname === item.route || pathname?.startsWith(`${item.route}/`);
            return (
              <Link
                className={cn("sidebar-link", { "bg-[#37966F]": isActive })}
                href={item.route}
                key={item.label}
              >
                <div className="relative size-6">
                  <Image
                    src={item.imgURL}
                    alt={item.label}
                    fill
                    className={cn({ "brightness-[3] invert-0": isActive })}
                  />
                </div>
                <p className={cn("sidebar-label", { "text-white!": isActive })}>
                  {item.label}
                </p>
              </Link>
            );
          })}
        </SheetContent>
      </Sheet>
    </section>
  );
};

export { MobileNavbar };
