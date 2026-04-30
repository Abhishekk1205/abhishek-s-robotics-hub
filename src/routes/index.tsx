import { createFileRoute } from "@tanstack/react-router";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  Award,
  Bot,
  Cpu,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  RadioTower,
  Send,
  Sparkles,
} from "lucide-react";
import { type FormEvent, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/abhishek-cse.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const navItems = ["About", "Education", "Experience", "Projects", "Skills", "Contact"];

const education = [
  "B.Tech CSE (2021–2025), Katihar Engineering College | CGPA: 7.24",
  "12th ISC – 82.6% (PCM + CS)",
  "10th ICSE – 86%",
];

const experiences = [
  {
    company: "CoGrad",
    period: "Nov 2025 – Present",
    items: [
      "Conduct robotics & IoT workshops",
      "Train students and teachers",
      "Implement project-based learning",
    ],
  },
  {
    company: "Techvein Pvt. Ltd.",
    period: "May 2023 – Feb 2024",
    items: [
      "ERP system integration using C++ & Java",
      "Data management and automation",
      "Excel-based data analysis",
    ],
  },
  {
    company: "India Advocacy",
    period: "Mar 2023 – Apr 2023",
    items: ["Data mining automation scripts", "GST and marketing data processing"],
  },
];

const projects = [
  {
    title: "Autonomous Drone & Airplane",
    icon: Bot,
    points: [
      "Built using ArduPilot firmware",
      "GPS navigation + waypoint missions",
      "Flight testing & control tuning",
    ],
  },
  {
    title: "Smart Health Monitoring System",
    icon: RadioTower,
    points: [
      "Sensors for heart rate, temperature, oxygen",
      "Flex sensors for gesture communication",
      "IoT-based real-time monitoring",
    ],
  },
  {
    title: "GenAI Engineering Tools",
    icon: Sparkles,
    points: [
      "Working with AI-assisted productivity workflows",
      "Exploring automation for technical documentation",
      "Building practical GenAI utilities for learning and development",
    ],
  },
  {
    title: "Responsive Web Portfolio System",
    icon: Cpu,
    points: [
      "Modern React-based interface with animated sections",
      "Responsive layouts for mobile and desktop",
      "Interactive media album prepared for future photos and videos",
    ],
  },
];

const skills = [
  { label: "C/C++", focus: "Embedded logic" },
  { label: "Python", focus: "Automation & GenAI tools" },
  { label: "Java", focus: "Application fundamentals" },
  { label: "HTML/CSS/Node.js", focus: "Web development" },
  { label: "Arduino & IoT Systems", focus: "Sensor networks" },
  { label: "Leadership & Communication", focus: "Workshops & mentoring" },
];

const achievements = [
  "Drone Challenge — IIT Patna",
  "RC Plane Competition — IIT BHU",
  "IoT Hackathon — smart automation prototype",
  "Robotics & IoT workshop project showcase",
];

function FloatingDrone() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[28rem] animate-float-drone [perspective:900px]">
      <div className="absolute inset-10 rounded-full border border-neon-cyan/30 shadow-glow animate-orbit" />
      <div className="absolute inset-20 rounded-full border border-neon-violet/35 animate-orbit [animation-direction:reverse]" />
      <div className="absolute left-1/2 top-1/2 h-24 w-48 -translate-x-1/2 -translate-y-1/2 rounded-[42%] border border-primary/70 bg-panel shadow-glow backdrop-blur-xl">
        <div className="absolute left-1/2 top-1/2 h-7 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30" />
        <div className="absolute inset-x-10 top-3 h-2 rounded-full bg-neon-cyan/70 animate-pulse-glow" />
      </div>
      {["left-6 top-12", "right-6 top-12", "bottom-12 left-6", "bottom-12 right-6"].map(
        (position) => (
          <div
            key={position}
            className={`absolute ${position} h-24 w-24 rounded-full border border-neon-cyan/55 bg-secondary/50 shadow-glow`}
          >
            <div className="absolute inset-3 rounded-full border-2 border-dashed border-neon-violet/70 animate-orbit" />
            <div className="absolute inset-9 rounded-full bg-neon-cyan/70" />
          </div>
        ),
      )}
      <Cpu className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 text-neon-cyan" />
    </div>
  );
}

function AnimatedProfilePhoto() {
  return (
    <div className="relative mx-auto w-full max-w-[30rem] animate-float-drone">
      <div className="absolute -inset-5 rounded-[2rem] border border-neon-cyan/25 bg-panel/40 shadow-glow backdrop-blur-2xl" />
      <div className="absolute -inset-10 rounded-full border border-neon-violet/25 animate-orbit" />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-panel-border bg-panel shadow-panel">
        <img
          src={profilePhoto}
          alt="Abhishek Kumar Gupta portrait"
          className="aspect-[4/5] w-full object-cover object-[center_18%] transition duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-neon-cyan/10" />
        <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-panel-border bg-background/60 p-4 backdrop-blur-xl">
          <p className="font-display text-lg font-bold text-foreground">Abhishek Kumar Gupta</p>
          <p className="mt-1 font-display text-sm font-bold text-neon-cyan">B.Tech CSE</p>
          <p className="mt-1 text-sm font-semibold text-muted-foreground">
            Robotics, IoT, Web Dev & GenAI Tools
          </p>
        </div>
      </div>
    </div>
  );
}

function ParticleField() {
  const particles = useMemo(() => Array.from({ length: 36 }, (_, i) => i), []);
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden scan-grid"
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <span
          key={particle}
          className="absolute h-1 w-1 rounded-full bg-neon-cyan/70 shadow-glow animate-pulse-glow"
          style={{
            left: `${(particle * 29) % 100}%`,
            top: `${(particle * 47) % 100}%`,
            animationDelay: `${(particle % 9) * 0.25}s`,
          }}
        />
      ))}
    </div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-neon-cyan">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold text-foreground md:text-5xl">{title}</h2>
      </div>
      <div className="hidden h-px flex-1 bg-gradient-to-r from-primary/70 via-neon-violet/40 to-transparent md:block" />
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) return;

    setStatus("sending");

    try {
      await emailjs.send(
        "service_zz646v8",
        "template_l7qcm5e",
        {
          from_name: name,
          from_email: email,
          reply_to: email,
          message,
          to_name: "Abhishek Kumar Gupta",
        },
        { publicKey: "HjMuNiHplvVCDckg2" },
      );
      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submitForm} className="glass-panel rounded-xl p-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          maxLength={80}
          disabled={status === "sending"}
          className="rounded-lg border border-input bg-muted/50 px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-70"
          placeholder="Name"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
        />
        <input
          required
          type="email"
          maxLength={120}
          disabled={status === "sending"}
          className="rounded-lg border border-input bg-muted/50 px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-70"
          placeholder="Email"
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
        />
      </div>
      <textarea
        required
        maxLength={800}
        disabled={status === "sending"}
        className="mt-4 min-h-36 w-full rounded-lg border border-input bg-muted/50 px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-70"
        placeholder="Message"
        value={form.message}
        onChange={(event) => setForm({ ...form, message: event.target.value })}
      />
      {status === "sent" && (
        <p className="mt-3 text-sm font-semibold text-neon-cyan">Message sent successfully.</p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm font-semibold text-destructive">
          Message could not be sent. Please try again.
        </p>
      )}
      <Button
        type="submit"
        variant="neon"
        size="lg"
        disabled={status === "sending"}
        className="mt-4 w-full sm:w-auto"
      >
        <Send /> {status === "sending" ? "Sending..." : "Let’s Collaborate"}
      </Button>
    </form>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <ParticleField />
      <nav className="fixed left-1/2 top-4 z-50 hidden w-[min(92vw,72rem)] -translate-x-1/2 items-center justify-between rounded-xl border border-panel-border bg-background/55 px-5 py-3 shadow-panel backdrop-blur-xl lg:flex">
        <a href="#top" className="font-display text-sm font-bold text-neon-cyan">
          AKG//ROBOTICS
        </a>
        <div className="flex items-center gap-5 text-sm font-semibold text-muted-foreground">
          {navItems.map((item) => (
            <a key={item} className="transition hover:text-primary" href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section
        id="top"
        className="relative grid min-h-screen items-center gap-12 px-5 pb-16 pt-24 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16"
      >
        <div className="absolute left-0 top-24 h-px w-full overflow-hidden bg-border">
          <span className="block h-full w-1/2 bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-marquee-scan" />
        </div>
        <div className="max-w-4xl">
          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl xl:text-8xl">
            Abhishek Kumar Gupta
            <span className="block text-neon-gradient">Robotics & IoT Engineer</span>
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold text-muted-foreground md:text-2xl">
            B.Tech CSE Department | Web Developer | Robotics Engineer | IoT Developer | Drone
            Innovator
          </p>
          <div className="mt-3 h-9 overflow-hidden text-lg font-bold text-primary md:text-2xl">
            <div className="animate-[slide-up_8s_ease-in-out_infinite]">
              <p>Engineer</p>
              <p>Innovator</p>
              <p>Educator</p>
              <p>Engineer</p>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            I am a passionate B.Tech CSE student, Web Developer, and Robotics & IoT Engineer with
            hands-on experience in autonomous drones, smart health systems, GenAI tools, and
            real-world tech workshops.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="neon" size="lg">
              <a href="#contact">
                <ArrowRight /> Hire Me
              </a>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a href="/abhishek-kumar-gupta-resume.pdf" download>
                <Download /> Download Resume
              </a>
            </Button>
            <Button asChild variant="glass" size="lg">
              <a href="/album" target="_blank" rel="noreferrer">
                <Sparkles /> Media Album
              </a>
            </Button>
          </div>
        </div>
        <div className="grid gap-8">
          <AnimatedProfilePhoto />
          <FloatingDrone />
        </div>
      </section>

      <section id="about" className="px-5 py-16 md:px-10 lg:px-16">
        <SectionTitle
          eyebrow="Mission"
          title="Autonomous systems, practical learning, real-world deployment."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {["Autonomous drones", "Smart health IoT", "Hands-on workshops"].map((item, index) => (
            <div
              key={item}
              className="glass-panel group rounded-xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-glow"
            >
              <p className="font-display text-4xl font-bold text-neon-cyan">0{index + 1}</p>
              <h3 className="mt-5 text-2xl font-bold text-foreground">{item}</h3>
              <p className="mt-3 text-muted-foreground">
                Lab-grade execution with education-first clarity and field-tested iteration.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="px-5 py-16 md:px-10 lg:px-16">
        <SectionTitle eyebrow="Telemetry" title="Education stream" />
        <div className="glass-panel rounded-xl p-6">
          {education.map((item) => (
            <div key={item} className="flex gap-4 border-b border-border py-5 last:border-b-0">
              <GraduationCap className="mt-1 size-6 text-primary" />
              <p className="text-lg font-semibold text-panel-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="px-5 py-16 md:px-10 lg:px-16">
        <SectionTitle eyebrow="Operations" title="Experience timeline" />
        <div className="grid gap-5 lg:grid-cols-3">
          {experiences.map((job) => (
            <article
              key={job.company}
              className="glass-panel rounded-xl p-6 transition duration-300 hover:-translate-y-2 hover:shadow-glow"
            >
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-neon-cyan">
                {job.period}
              </p>
              <h3 className="mt-3 text-2xl font-bold">{job.company}</h3>
              <ul className="mt-5 space-y-3 text-muted-foreground">
                {job.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary shadow-glow" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="px-5 py-16 md:px-10 lg:px-16">
        <SectionTitle eyebrow="Builds" title="Active project modules" />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article
                key={project.title}
                className="glass-panel group relative overflow-hidden rounded-xl p-7 transition duration-300 hover:-translate-y-2 hover:shadow-glow"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
                <Icon className="size-12 text-neon-cyan transition group-hover:scale-110" />
                <h3 className="mt-5 text-3xl font-bold">{project.title}</h3>
                <ul className="mt-5 space-y-3 text-muted-foreground">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 lg:px-16">
        <SectionTitle eyebrow="Awards" title="Competition highlights" />
        <div className="grid gap-5 md:grid-cols-2">
          {achievements.map((achievement) => (
            <div key={achievement} className="glass-panel flex items-center gap-4 rounded-xl p-6">
              <Award className="size-9 text-neon-violet" />
              <p className="text-xl font-bold">{achievement}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="px-5 py-16 md:px-10 lg:px-16">
        <SectionTitle eyebrow="Capability matrix" title="Skills calibrated for robotics labs" />
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="glass-panel rounded-xl p-5 transition duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{skill.label}</h3>
                  <p className="mt-1 font-semibold text-muted-foreground">{skill.focus}</p>
                </div>
                <Cpu className="size-6 text-neon-cyan" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-5 py-16 md:px-10 lg:px-16">
        <SectionTitle eyebrow="Contact" title="Open a collaboration channel" />
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="glass-panel rounded-xl p-6">
            <div className="space-y-5 text-lg font-semibold text-muted-foreground">
              <p className="flex items-center gap-3">
                <Mail className="text-primary" /> abhish1205@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <Phone className="text-primary" /> +91 8235774254
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="text-primary" /> A. M. Das Lane, Brahmpura Muzaffarpur, Bihar.
                Pincode: 842003
              </p>
            </div>
            <div className="mt-7 flex gap-3">
              <Button asChild variant="glass" size="icon">
                <a
                  aria-label="GitHub"
                  href="https://github.com/Abhishekk1205"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github />
                </a>
              </Button>
              <Button asChild variant="glass" size="icon">
                <a
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/abhishek-kumar-gupta"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin />
                </a>
              </Button>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
