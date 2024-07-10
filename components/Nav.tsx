"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-12 text-lg">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
