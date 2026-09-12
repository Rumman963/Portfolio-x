"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-2 py-2 shadow-lg">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "px-4 py-1.5 text-sm rounded-full transition-colors",
                isActive
                  ? "bg-white text-black"
                  : "text-white/70 hover:text-white"
              )}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}