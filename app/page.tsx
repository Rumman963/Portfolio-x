import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProfileImage } from "@/components/profile";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 min-h-[80vh] px-6 md:px-16 max-w-6xl mx-auto pt-32 md:pt-12">
      <ProfileImage />

      <div className="text-center md:text-left">
        <p className="text-sm text-white/50 mb-3 tracking-wide uppercase">
          Hi, I&apos;m
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Mohd Rumman Khan
        </h1>

        <h2 className="text-xl md:text-2xl text-white/70 mb-6">
          Full Stack Developer
        </h2>

        <p className="max-w-xl text-white/50 mb-10">
          I build clean, functional, and thoughtful digital experiences
          from front-end interfaces to back-end systems.
        </p>

        <div className="flex gap-4 justify-center md:justify-start py-5">
          <Link href="/projects">
            <Button size="lg">View Projects</Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}