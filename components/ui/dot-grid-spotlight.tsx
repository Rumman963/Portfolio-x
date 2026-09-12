"use client";

import { useEffect, useRef } from "react";

export function DotGridSpotlight({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      container.style.setProperty("--x", `${x}px`);
      container.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Spotlight that follows cursor */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(139,92,246,0.15), transparent 40%)",
        }}
      />

      {/* Fade edges so it blends nicely */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, black 90%)",
        }}
      />

      {/* Page content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}