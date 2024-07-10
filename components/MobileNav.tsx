"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "首頁",
    path: "/",
  },
  {
    name: "履歷",
    path: "/resume",
  },
  {
    name: "研究成果",
    path: "/research-results",
  },
  {
    name: "成就與獎項",
    path: "/rewards",
  },
  {
    name: "作品集",
    path: "/work",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Kyle Liu <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-start gap-8 pl-[6rem] font-semibold">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`text-xl capitalize hover:text-accent 
              transition-all ${
                link.path === pathname && "text-accent border-b-2 border-accent"
              }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
