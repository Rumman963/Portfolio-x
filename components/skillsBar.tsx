"use client";

import { useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";

interface SkillBarProps {
  name: string;
  level: string;
  percentage: number;
  icon: IconType;
  color?: string;
}

export function SkillBar({ name, level, percentage, icon: Icon, color }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimatedWidth(percentage);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div className="mb-6" ref={ref}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon style={{ color: color || "#ffffff" }} size={20} />
          <span className="text-white font-medium">{name}</span>
        </div>
        <span className="text-white/50 text-sm">{level}</span>
      </div>
      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-white transition-all duration-1000 ease-out"
          style={{ width: `${animatedWidth}%` }}
        />
      </div>
    </div>
  );
}