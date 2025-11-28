"use client";

import { sidebarLinks } from "@/app/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4 px-4">
        <Link href="/" className="mb-4 flex cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.png"
            alt="qorvex logo"
            width={44}
            height={44}
            className="size-15 max-xl:size-14"
          />
          <h1 className="sidebar-logo">Qorvex</h1>
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
      </nav>
    </section>
  );
};

export { Sidebar };
