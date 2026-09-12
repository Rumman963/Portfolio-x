import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  User,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
} from "lucide-react";

const experience = [
  {
    role: "MERN Intern",
    company: "Lunar Labs",
    location: "Lucknow, Uttar Pradesh",
    duration: "May 2025 – July 2025",
    points: [
      "Developed a full-stack web application using MongoDB, Express.js, React, and Node.js.",
      "Implemented JWT-based authentication and protected routes for secure user access.",
      "Designed and integrated REST APIs for CRUD operations between frontend and backend.",
      "Built responsive UI components using React and Tailwind CSS for improved user experience.",
    ],
  },
];

const education = [
  {
    school: "Galgotias College of Engineering and Technology",
    degree: "Bachelor of Technology — CGPA: 7.23",
    duration: "2022 – June 2026",
    location: "Greater Noida, India",
  },
  {
    school: "Rani Laxmi Bai Memorial School",
    degree: "10th — 93.8% | 12th — 92.4%",
    duration: "2009 – 2021",
    location: "Lucknow, India",
  },
];

const certifications = [
  {
    title: "JavaScript Fundamentals — GreatStack",
    description:
      "Gained foundational skills in JavaScript, including variables, functions, loops, conditionals, and DOM manipulation for building interactive web applications.",
  },
];

const extracurricular = [
  "Maintained an 800+ chess rating, demonstrating strategic thinking, pattern recognition, and analytical decision-making.",
  "Solved 50+ coding problems focusing on arrays, strings, primitive data types, and fundamental algorithms.",
  "Crypto Education Contributor at CoinDCX Community — created educational Twitter threads on crypto and Web3 concepts.",
];

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white mb-2 text-center">
        About Me
      </h1>
      <p className="text-white/50 text-center mb-12">
        A bit more about who I am and what I&apos;ve done.
      </p>

      {/* Bio */}
      <Card className="bg-white/5 border-white/10 mb-8 hover:border-white/30 transition-colors">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <User size={20} className="text-white/70" />
            Bio
          </CardTitle>
        </CardHeader>
        <CardContent>
       <p className="text-white/70 leading-relaxed">
         I&apos;m Mohd Rumman Khan, a Full Stack Developer based in Lucknow,
         India. I enjoy building clean, functional web applications
         from real-time systems using WebSockets to full-stack platforms
         with secure authentication and thoughtful UI. I recently completed
         my B.Tech and I&apos;m now focused on building projects that solve
         real problems and sharpen my engineering skills.
       </p>
      </CardContent>
      </Card>

      {/* Experience */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <Briefcase size={22} className="text-white/70" />
          Experience
        </h2>
        {experience.map((job) => (
          <Card
            key={job.company}
            className="bg-white/5 border-white/10 mb-4 hover:border-white/30 transition-colors"
          >
            <CardHeader>
              <CardTitle className="text-white flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span>
                  {job.role} · {job.company}
                </span>
                <span className="text-sm text-white/50 font-normal">
                  {job.duration}
                </span>
              </CardTitle>
              <p className="text-white/40 text-sm">{job.location}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-white/60 text-sm">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <GraduationCap size={22} className="text-white/70" />
          Education
        </h2>
        {education.map((edu) => (
          <Card
            key={edu.school}
            className="bg-white/5 border-white/10 mb-4 hover:border-white/30 transition-colors"
          >
            <CardHeader>
              <CardTitle className="text-white flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span>{edu.school}</span>
                <span className="text-sm text-white/50 font-normal">
                  {edu.duration}
                </span>
              </CardTitle>
              <p className="text-white/40 text-sm">{edu.location}</p>
            </CardHeader>
            <CardContent>
              <p className="text-white/60 text-sm">{edu.degree}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Certifications */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <Award size={22} className="text-white/70" />
          Certifications
        </h2>
        {certifications.map((cert) => (
          <Card
            key={cert.title}
            className="bg-white/5 border-white/10 mb-4 hover:border-white/30 transition-colors"
          >
            <CardHeader>
              <CardTitle className="text-white text-base">
                {cert.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/60 text-sm">{cert.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Extracurricular */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
          <Sparkles size={22} className="text-white/70" />
          Beyond Code
        </h2>
        <Card className="bg-white/5 border-white/10 hover:border-white/30 transition-colors">
          <CardContent className="pt-6">
            <ul className="list-disc list-inside space-y-2 text-white/60 text-sm">
              {extracurricular.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}