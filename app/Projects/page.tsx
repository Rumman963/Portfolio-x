import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "Youtube Watch",
    description:
      "A real-time synchronized YouTube watch party app. Users can sign up, create or join rooms by code, and watch videos together with playback, roles, and permissions kept in sync live across everyone in the room.",
    image: "/P1.jpg",
    liveUrl: "https://youtube-watch-fe.vercel.app/",
  },
  {
    title: "Second Brain",
    description:
      "A personal knowledge-organizing app where users save and manage links to videos, images, articles, and audio files. Includes a dashboard with content filtering, and the ability to share your saved collection publicly via a generated link.",
    image: "/P2.jpg",
    liveUrl: "https://second-brain-frontend-eight.vercel.app/",
  }

];

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white mb-2 text-center">
        Projects
      </h1>
      <p className="text-white/50 text-center mb-12">
        A few things I&apos;ve built recently.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="bg-white/5 border-white/10 overflow-hidden hover:border-white/30 hover:scale-[1.02] transition-all cursor-pointer h-full">
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-white/60 text-sm">{project.description}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}