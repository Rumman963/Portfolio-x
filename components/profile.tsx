"use client";

import { useRef } from "react";
import Image from "next/image";


export function ProfileImage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    container.style.setProperty("--x", `${x}px`);
    container.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden group"
    >
      {/* Profile image */}
      <Image
        src="/Profile.jpg"
        alt="Mohd Rumman Khan"
        fill
        sizes="(max-width: 768px) 256px, 320px"
        className="object-cover rounded-full"
        priority
      />

     
      <div
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(200px circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.25), transparent 60%)",
        }}
      />

      <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
    </div>
  );
}