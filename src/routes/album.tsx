import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Image, Play, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/abhishek-cse.jpg";

export const Route = createFileRoute("/album")({
  component: AlbumPage,
  head: () => ({
    meta: [
      { title: "Media Album | Abhishek Kumar Gupta" },
      { name: "description", content: "Photo and video album for Abhishek Kumar Gupta's robotics, IoT, web development, and GenAI work." },
    ],
  }),
});

const mediaItems = [
  { title: "Profile portrait", type: "Photo", image: profilePhoto },
  { title: "Drone build logs", type: "Video slot" },
  { title: "IoT workshop gallery", type: "Photo slot" },
  { title: "GenAI tools demo", type: "Video slot" },
];

function AlbumPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-8 text-foreground md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between gap-4">
          <Button asChild variant="glass"><Link to="/"><ArrowLeft /> Back</Link></Button>
          <p className="font-display text-sm font-bold uppercase text-neon-cyan">AKG//MEDIA_LIBRARY</p>
        </nav>

        <section className="py-14">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-neon-cyan">Album</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-extrabold md:text-7xl">Photos, videos, and build moments.</h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold text-muted-foreground">A futuristic media library prepared for robotics demos, IoT workshops, web projects, and GenAI experiments.</p>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {mediaItems.map((item) => (
            <article key={item.title} className="glass-panel group overflow-hidden rounded-xl transition duration-300 hover:-translate-y-2 hover:shadow-glow">
              {item.image ? (
                <img src={item.image} alt={item.title} className="aspect-[4/5] w-full object-cover object-[center_18%] transition duration-700 group-hover:scale-105" />
              ) : (
                <div className="flex aspect-[4/5] items-center justify-center bg-panel scan-grid">
                  {item.type.includes("Video") ? <Play className="size-14 text-neon-cyan" /> : <Plus className="size-14 text-neon-cyan" />}
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-neon-cyan"><Image className="size-4" />{item.type}</div>
                <h2 className="mt-3 text-2xl font-bold">{item.title}</h2>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}