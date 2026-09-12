"use client";

import { IconType } from "react-icons";

interface SkillBarProps {
  name: string;
  level: string;
  percentage: number;
  icon: IconType;
  color?: string;
}

export function SkillBar({ name, level, percentage, icon: Icon, color }: SkillBarProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon style={{ color: color || "#ffffff" }} size={20} />
          <span className="text-white font-medium">{name}</span>
        </div>
        <span className="text-white/50 text-sm">{level}</span>
      </div>
      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-white transition-all duration-700"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}