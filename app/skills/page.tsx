"use client";

import { SkillBar } from "@/components/skillsBar";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiVercel,
  SiRender,
  SiAxios,
  SiJsonwebtokens,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", level: "Intermediate", percentage: 50, icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", level: "Intermediate", percentage: 70, icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: "Intermediate", percentage: 75, icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", level: "Intermediate", percentage: 70, icon: SiTailwindcss, color: "#38BDF8" },
      { name: "HTML5", level: "Advanced", percentage: 90, icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", level: "Advanced", percentage: 85, icon: FaCss3Alt, color: "#1572B6" },
      { name: "Axios", level: "Intermediate", percentage: 80, icon: SiAxios, color: "#5A29E4" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: "Intermediate", percentage: 70, icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", level: "Intermediate", percentage: 60, icon: SiExpress, color: "#ffffff" },
      { name: "WebSockets", level: "Intermediate", percentage: 40, icon: FaNodeJs, color: "#339933" },
      { name: "REST APIs", level: "Advanced", percentage: 90, icon: SiExpress, color: "#ffffff" },
      { name: "JWT & bcrypt", level: "Intermediate", percentage: 80, icon: SiJsonwebtokens, color: "#D63AFF" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: "Advanced", percentage: 80, icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", level: "Intermediate", percentage: 65, icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git & GitHub", level: "Advanced", percentage: 85, icon: FaGithub, color: "#ffffff" },
      { name: "Postman", level: "Advanced", percentage: 80, icon: SiPostman, color: "#FF6C37" },
      { name: "Figma", level: "Intermediate", percentage: 60, icon: FaFigma, color: "#F24E1E" },
      { name: "Vercel", level: "Advanced", percentage: 85, icon: SiVercel, color: "#ffffff" },
      { name: "Render", level: "Advanced", percentage: 80, icon: SiRender, color: "#46E3B7" },
    ],
  },
];

export default function SkillsPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white mb-2 text-center">
        Skills
      </h1>
      <p className="text-white/50 text-center mb-12">
        Technologies and tools I work with.
      </p>

      <div className="space-y-12">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h2 className="text-xl font-semibold text-white/90 mb-6 border-b border-white/10 pb-2">
              {category.title}
            </h2>
            {category.skills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                percentage={skill.percentage}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}