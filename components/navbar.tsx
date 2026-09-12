"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeEl = container.querySelector<HTMLAnchorElement>(
      `[data-href="${pathname}"]`
    );

    if (activeEl) {
      setIndicator({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
      });
    }
  }, [pathname]);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        ref={containerRef}
        className="relative flex items-center gap-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-2 py-2 shadow-lg"
      >
        {/* Sliding indicator */}
        <div
          className="absolute top-2 bottom-2 rounded-full bg-white transition-all duration-300 ease-out"
          style={{ left: indicator.left, width: indicator.width }}
        />

        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              data-href={item.href}
              className={cn(
                "relative z-10 px-4 py-1.5 text-sm rounded-full transition-colors",
                isActive ? "text-black" : "text-white/70 hover:text-white"
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