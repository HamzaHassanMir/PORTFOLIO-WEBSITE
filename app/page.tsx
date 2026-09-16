"use client";

import { useState } from "react";
import Image from "next/image";

const skills = {
  Languages: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
  Frontend: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Database: ["MongoDB", "Mongoose", "SQL", "PostgreSQL"],
  "Tools & Platforms": [
    "Git",
    "GitHub",
    "Google OAuth",
    "NextAuth",
    "Nodemailer",
    "Postman",
  ],
};

const experience = [
  {
    role: "Front-end Developer Intern",
    company: "FLYRANK.AI",
    period: "Jul 2026 – Aug 2026",
    type: "Remote",
    bullets: [
      "Developed responsive and reusable frontend components using React, JavaScript, HTML, and CSS.",
      "Leveraged AI-assisted development tools to enhance coding workflows, debugging, and development efficiency.",
      "Applied modern frontend practices to build clean, maintainable, and scalable user interfaces.",
      "Used Git and GitHub for version control, collaboration, and project management.",
      "Focused on UI quality, responsiveness, performance, and overall user experience.",
      "Collaborated within a development environment while gaining hands-on experience with modern AI-assisted software engineering workflows.",
    ],
  },
  {
    role: "Full Stack AI Engineering Fellow",
    company: "DevWeekends Fellowship Program",
    period: "May 2026 – Jul 2026",
    type: "Remote",
    bullets: [
      "Engineered full-stack web applications through hands-on projects, implementing responsive frontends, backend services, RESTful APIs, authentication, and database-driven functionality.",
      "Leveraged AI-assisted development workflows for code generation, debugging, refactoring, testing, and technical problem-solving while following structured software-engineering practices.",
      "Applied Git/GitHub, version control, project documentation, iterative development, and code-quality practices to build and refine production-oriented applications.",
    ],
  },
  {
    role: "MERN Stack Intern",
    company: "DevTrain (SMC-Private) Limited",
    period: "Apr 2025 – Jul 2025",
    type: "Onsite",
    bullets: [
      "Engineered full-stack web application features using React.js, Node.js, Express.js, and MongoDB, developing responsive UI components and backend functionality.",
      "Designed and integrated RESTful APIs, authentication workflows, and server-side business logic to deliver secure, dynamic application features.",
      "Analyzed and improved web performance using Google PageSpeed Insights, identifying bottlenecks and applying optimization techniques to enhance page load speed and responsiveness.",
      "Utilized Git/GitHub, reusable components, and modular architecture for clean, scalable codebases.",
    ],
  },
];

const projects = [
  {
    title: "Elegant Essentials",
    stack: "React · Node.js · MongoDB · Redux Toolkit",
    description:
      "Production-ready fashion e-commerce platform with full storefront, admin dashboard, Google OAuth, and real email delivery via Nodemailer.",
    github: "https://github.com/HamzaHassanMir/Elegant-Essentials.git",
    image: "/elegant essentials.png",
  },
  {
    title: "eCommerce Store",
    stack: "React · Node.js · MongoDB",
    description:
      "Production-ready e-commerce store with full storefront, admin dashboard, persistent cart state, and responsive UI across all devices.",
    github:
      "https://github.com/HamzaHassanMir/eCommerce-Website-Mern-Stack.git",
    image: "/mir eCommerce.png",
  },
  {
    title: "Waqar Hassan Mir Law Associates Website",
    stack: "React · Node.js · MongoDB · Redux Toolkit",
    description:
      "Developed a full-stack website for Waqar Hassan Mir Law Associates using React.js and Tailwind CSS for a modern UI and Nodemailer for real email delivery.",
    github: "",
    image: "/WHMLA (1).png",
  },
  {
    title: "College Admission System — SQL Database Project",
    stack: "MySQL · SQL (DDL + DML)",
    description:
      "A relational database project built in MySQL that models a college admission workflow — from student applications to admin approvals. Includes schema design, sample data, and 25+ queries demonstrating JOINs, subqueries, aggregate functions, and wildcard operators.",
    github: "https://github.com/HamzaHassanMir/College-Admission-DataBase.git",
    image: "",
  }
];

const certifications = [
  "The Complete Full-Stack Web Development Bootcamp — Dr. Angela Yu · Udemy",
  "The Complete Python Pro Bootcamp — Dr. Angela Yu · Udemy",
  "Interactivity with JavaScript — University of Michigan · Coursera",
  "Python Data Structures — University of Michigan · Coursera",
  "Introduction to Python Programming — University of Pennsylvania · Coursera",
  "HTML and CSS in Depth — Meta · Coursera",
  "Introduction to SQL — University of Michigan · Coursera",
];

const navItems = ["about", "experience", "skills", "projects", "contact"];

export default function Home() {
  const [activeExp, setActiveExp] = useState(0);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formState, setFormState] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [menuOpen, setMenuOpen] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setFormState("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  const currentProject = projects[carouselIdx];

  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{
        background: "#F7F6F2",
        color: "#111111",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-[#F7F6F2]/95 backdrop-blur-sm">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10">
          <div className="flex h-[74px] items-center justify-between border-b border-black">
            <a
              href="#home"
              className="text-[15px] font-medium tracking-[-0.02em]"
            >
              HAMZA HASSAN MIR
            </a>

            <div className="hidden items-center gap-9 md:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-[13px] uppercase tracking-[0.02em] transition-opacity hover:opacity-50"
                >
                  {item}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="hidden text-[13px] uppercase md:flex md:items-center md:gap-2"
            >
              Available for work <span className="text-lg">↗</span>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              <span className="block h-px w-6 bg-black" />
              <span className="my-1.5 block h-px w-6 bg-black" />
              <span className="block h-px w-6 bg-black" />
            </button>
          </div>

          {menuOpen && (
            <div className="border-b border-black py-5 md:hidden">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm uppercase"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative">
        <div className="mx-auto min-h-[calc(100vh-74px)] max-w-[1500px] px-6 md:px-10">
          <div className="grid min-h-[calc(100vh-74px)] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[1.35fr_.65fr]">
            <div className="relative z-10">
              <div className="mb-7 flex items-center gap-3 text-[12px] uppercase tracking-[0.08em]">
                <span className="h-2 w-2 rounded-full bg-[#168ee9]" />
                <span>Portfolio '26</span>
                <span className="ml-3 text-black/40">Full Stack Developer</span>
              </div>

              <h1
                className="font-display max-w-[1150px] font-medium tracking-[-0.065em]"
                style={{
                  fontSize: "clamp(4rem, 10vw, 10.5rem)",
                  lineHeight: 0.83,
                }}
              >
                Full stack
                <br />
                <span className="text-[#168ee9]">developer</span>
                <br />
                <span>building</span>
                <br />
                <span>for the web.</span>
              </h1>

              <div className="mt-12 grid max-w-[900px] grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
                <p className="max-w-[470px] text-base leading-7 text-black/65 md:text-lg">
                  I build production-ready web applications with the MERN
                  stack and Next.js — combining clean interfaces, reliable
                  backend systems, and practical engineering.
                </p>

                <div className="flex items-center gap-5 md:justify-end">
                  <a
                    href="#projects"
                    className="border border-black bg-black px-6 py-3 text-sm text-white transition hover:bg-[#168ee9] hover:border-[#168ee9]"
                  >
                    View my work ↘
                  </a>
                  <a
                    href="/HamzaHassanMir_Resume.pdf"
                    download
                    className="border-b border-black pb-1 text-sm"
                  >
                    Resume ↓
                  </a>
                </div>
              </div>
            </div>

            {/* Editorial dot field + portrait */}
            <div className="relative hidden min-h-[520px] lg:block">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(34,197,45,.7) 1.5px, transparent 1.7px)",
                  backgroundSize: "25px 25px",
                  maskImage:
                    "radial-gradient(ellipse 75% 62% at 50% 50%, black 0%, transparent 75%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 75% 62% at 50% 50%, black 0%, transparent 75%)",
                }}
              />
              <div className="absolute right-[5%] top-[18%] h-[390px] w-[300px] overflow-hidden border border-black bg-black/5">
                <Image
                  src="/portfolio.jpg"
                  alt="Hamza Hassan Mir"
                  fill
                  priority
                  className="object-cover grayscale"
                />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / INTRO */}
      <section id="about" className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-12 flex items-center gap-3 border-t border-black pt-5 text-[12px] uppercase tracking-[0.06em]">
          <span>01</span>
          <span className="h-px w-8 bg-black" />
          <span>About</span>
        </div>

        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <p className="text-sm uppercase tracking-[0.08em] text-black/50">
            Full stack / frontend / software engineering
          </p>

          <div>
            <h2
              className="font-display max-w-[1050px] font-medium tracking-[-0.055em]"
              style={{
                fontSize: "clamp(2.8rem, 6.5vw, 7rem)",
                lineHeight: 0.94,
              }}
            >
              I turn ideas into{" "}
              <span className="text-[#168ee9]">useful software</span> that is
              clear, fast, and built to last.
            </h2>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <p className="max-w-[520px] text-base leading-7 text-black/65">
                I&apos;m a results-driven MERN Stack Developer with hands-on
                experience building full-stack applications using JavaScript,
                React.js, Next.js, Node.js, Express.js, MongoDB, and Tailwind
                CSS.
              </p>
              <p className="max-w-[520px] text-base leading-7 text-black/65">
                My focus is simple: understand the problem, reduce the
                complexity, and ship clean, scalable solutions. I enjoy
                learning modern tools and applying them to real products.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 border-y border-black md:grid-cols-4">
          {[
            ["03+", "Internships"],
            ["03+", "Production Apps"],
            ["07+", "Certifications"],
            ["∞", "Curiosity"],
          ].map(([number, label], i) => (
            <div
              key={label}
              className={`px-5 py-8 md:px-8 md:py-10 ${
                i !== 3 ? "border-r border-black" : ""
              }`}
            >
              <p
                className="font-display tracking-[-0.05em]"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: 0.9 }}
              >
                {number}
              </p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.12em] text-black/50">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-12 flex items-center gap-3 border-t border-black pt-5 text-[12px] uppercase tracking-[0.06em]">
          <span>02</span>
          <span className="h-px w-8 bg-black" />
          <span>Experience</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <h2
              className="font-display font-medium tracking-[-0.055em]"
              style={{
                fontSize: "clamp(3rem, 7vw, 7rem)",
                lineHeight: 0.88,
              }}
            >
              Work
              <br />
              <span className="text-[#168ee9]">experience.</span>
            </h2>
          </div>

          <div className="border-t border-black">
            {experience.map((exp, i) => (
              <button
                key={exp.company}
                onClick={() => setActiveExp(i)}
                className={`block w-full border-b border-black py-6 text-left transition-all ${
                  activeExp === i ? "pl-4" : ""
                }`}
                style={{
                  borderLeft:
                    activeExp === i ? "3px solid #168ee9" : "3px solid transparent",
                }}
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-lg font-medium tracking-[-0.03em]">
                      {exp.role}
                    </p>
                    <p className="mt-1 text-sm text-black/50">
                      {exp.company} · {exp.type}
                    </p>
                  </div>
                  <p className="text-xs uppercase tracking-[0.08em] text-black/50">
                    {exp.period}
                  </p>
                </div>

                {activeExp === i && (
                  <ul className="mt-7 max-w-[760px] space-y-3 pr-2">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-6 text-black/65"
                      >
                        <span className="mt-0.5 text-[#168ee9]">↳</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-12 flex items-center gap-3 border-t border-black pt-5 text-[12px] uppercase tracking-[0.06em]">
          <span>03</span>
          <span className="h-px w-8 bg-black" />
          <span>Capabilities</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <h2
            className="font-display font-medium tracking-[-0.055em]"
            style={{
              fontSize: "clamp(3rem, 7vw, 7rem)",
              lineHeight: 0.88,
            }}
          >
            Skills &
            <br />
            <span className="text-[#168ee9]">tools.</span>
          </h2>

          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="border-t border-black pt-4">
                <p className="mb-5 text-[11px] uppercase tracking-[0.13em] text-black/50">
                  {category}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="border-b border-black/25 pb-1 text-base tracking-[-0.02em]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <div className="mb-7 flex items-center justify-between border-t border-black pt-5">
            <p className="text-[12px] uppercase tracking-[0.08em]">
              Certifications
            </p>
            <p className="text-[11px] text-black/40">{certifications.length} credentials</p>
          </div>

          <div className="grid border-t border-black md:grid-cols-2 md:gap-x-12">
            {certifications.map((cert, i) => (
              <div
                key={cert}
                className="flex gap-5 border-b border-black/20 py-4 text-sm"
              >
                <span className="text-black/35">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-black/70">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-12 flex items-center justify-between border-t border-black pt-5">
          <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.06em]">
            <span>04</span>
            <span className="h-px w-8 bg-black" />
            <span>Selected work</span>
          </div>
          <a
            href="https://github.com/HamzaHassanMir"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-xs uppercase tracking-[0.05em] underline underline-offset-4 md:block"
          >
            All projects ↗
          </a>
        </div>

        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.12em] text-black/45">
              Featured project · P.{String(carouselIdx + 1).padStart(2, "0")}
            </p>
            <h2
              className="font-display font-medium tracking-[-0.055em]"
              style={{
                fontSize: "clamp(3rem, 6.5vw, 7rem)",
                lineHeight: 0.9,
              }}
            >
              {currentProject.title}
            </h2>
            <p className="mt-8 max-w-[500px] text-base leading-7 text-black/65">
              {currentProject.description}
            </p>
            <p className="mt-7 text-xs uppercase tracking-[0.08em] text-black/50">
              {currentProject.stack}
            </p>

            {currentProject.github && (
              <a
                href={currentProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 border-b border-black pb-1 text-sm"
              >
                View project on GitHub <span>↗</span>
              </a>
            )}
          </div>

          <div>
            <div className="relative aspect-[1.45/1] overflow-hidden bg-[#E9E7E0]">
              <Image
                src={currentProject.image}
                alt={`${currentProject.title} screenshot`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-black pt-4">
              <div className="flex items-center gap-2">
                {projects.map((project, i) => (
                  <button
                    key={project.title}
                    onClick={() => setCarouselIdx(i)}
                    className={`h-2 w-2 rounded-full border border-black transition-all ${
                      carouselIdx === i ? "text-[#168ee9]" : "bg-transparent"
                    }`}
                    aria-label={`Show ${project.title}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCarouselIdx(Math.max(0, carouselIdx - 1))}
                  disabled={carouselIdx === 0}
                  className="flex h-10 w-10 items-center justify-center border border-black text-lg transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-25"
                  aria-label="Previous project"
                >
                  ←
                </button>
                <button
                  onClick={() =>
                    setCarouselIdx(
                      Math.min(projects.length - 1, carouselIdx + 1)
                    )
                  }
                  disabled={carouselIdx === projects.length - 1}
                  className="flex h-10 w-10 items-center justify-center border border-black text-lg transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-25"
                  aria-label="Next project"
                >
                  →
                </button>
                <span className="ml-2 text-xs text-black/45">
                  {String(carouselIdx + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Project index */}
        <div className="mt-24 border-t border-black">
          {projects.map((project, i) => (
            <button
              key={project.title}
              onClick={() => setCarouselIdx(i)}
              className={`grid w-full grid-cols-[55px_1fr_auto] items-center gap-5 border-b border-black/20 py-6 text-left transition ${
                carouselIdx === i ? "text-black" : "text-black/45 hover:text-black"
              }`}
            >
              <span className="text-xs">P.{String(i + 1).padStart(2, "0")}</span>
              <span className="text-xl tracking-[-0.03em] md:text-2xl">
                {project.title}
              </span>
              <span className="hidden text-xs uppercase md:block">
                {project.stack.split(" · ")[0]}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <section className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-12 flex items-center gap-3 border-t border-black pt-5 text-[12px] uppercase tracking-[0.06em]">
          <span>05</span>
          <span className="h-px w-8 bg-black" />
          <span>Why work with me?</span>
        </div>

        <h2
          className="font-display max-w-[1300px] font-medium tracking-[-0.065em]"
          style={{
            fontSize: "clamp(3.3rem, 8vw, 9rem)",
            lineHeight: 0.87,
          }}
        >
          I care about both{" "}
          <span className="text-[#168ee9]">how it looks</span> and{" "}
          <span className="text-[#168ee9]">how it works.</span>
        </h2>

        <div className="mt-16 grid gap-8 border-t border-black pt-7 md:grid-cols-3">
          {[
            [
              "01",
              "Engineering mindset",
              "I think beyond the interface — APIs, data, performance, maintainability, and the user experience all matter.",
            ],
            [
              "02",
              "AI-assisted workflow",
              "I use modern AI development tools as an accelerator for research, implementation, debugging, refactoring, and iteration.",
            ],
            [
              "03",
              "Always learning",
              "From MERN to Next.js and modern tooling, I keep expanding my stack by building real projects rather than only following tutorials.",
            ],
          ].map(([number, title, text]) => (
            <div key={number} className="border-t border-black/20 pt-5">
              <span className="text-xs text-black/40">{number}</span>
              <h3 className="mt-8 text-xl font-medium tracking-[-0.03em]">
                {title}
              </h3>
              <p className="mt-4 max-w-[390px] text-sm leading-6 text-black/60">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-12 flex items-center gap-3 border-t border-black pt-5 text-[12px] uppercase tracking-[0.06em]">
          <span>06</span>
          <span className="h-px w-8 bg-black" />
          <span>Let&apos;s talk</span>
        </div>

        <div className="grid gap-16 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h2
              className="font-display font-medium tracking-[-0.065em]"
              style={{
                fontSize: "clamp(4rem, 9vw, 10rem)",
                lineHeight: 0.82,
              }}
            >
              Let&apos;s
              <br />
              <span className="text-[#168ee9]">build</span>
              <br />
              something.
            </h2>

            <p className="mt-10 max-w-[460px] text-base leading-7 text-black/60">
              Open to full-time roles, freelance projects, and collaborations.
              I&apos;m especially interested in challenging full-stack problems
              and modern AI-assisted development.
            </p>

            <div className="mt-10 space-y-6 text-sm">
              <div>
                <p className="mb-1 text-[10px] uppercase tracking-[0.14em] text-black/40">
                  Email
                </p>
                <a
                  href="mailto:hamzahassanmir62@gmail.com"
                  className="border-b border-black"
                >
                  hamzahassanmir62@gmail.com
                </a>
              </div>
              <div>
                <p className="mb-1 text-[10px] uppercase tracking-[0.14em] text-black/40">
                  GitHub
                </p>
                <a
                  href="https://github.com/HamzaHassanMir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-black"
                >
                  github.com/HamzaHassanMir ↗
                </a>
              </div>
              <div>
                <p className="mb-1 text-[10px] uppercase tracking-[0.14em] text-black/40">
                  Education
                </p>
                <p>BS Computer Science · Virtual University of Pakistan</p>
                <p className="mt-1 text-black/40">Expected 2028</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="border-t border-black pt-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.14em] text-black/45">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full border-b border-black bg-transparent py-3 text-base outline-none placeholder:text-black/30 focus:border-[#ef351f]"
                />
              </div>
              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.14em] text-black/45">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full border-b border-black bg-transparent py-3 text-base outline-none placeholder:text-black/30 focus:border-[#ef351f]"
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="mb-2 block text-[10px] uppercase tracking-[0.14em] text-black/45">
                Subject
              </label>
              <input
                type="text"
                placeholder="What&apos;s this about?"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full border-b border-black bg-transparent py-3 text-base outline-none placeholder:text-black/30 focus:border-[#ef351f]"
              />
            </div>

            <div className="mt-8">
              <label className="mb-2 block text-[10px] uppercase tracking-[0.14em] text-black/45">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full resize-none border-b border-black bg-transparent py-3 text-base outline-none placeholder:text-black/30 focus:border-[#168ee9]"
              />
            </div>

            <button
              type="submit"
              disabled={formState === "sending"}
              className="mt-10 w-full border border-black bg-black px-6 py-4 text-sm text-white transition hover:bg-[#168ee9] hover:border-[#168ee9] disabled:opacity-50"
            >
              {formState === "sending"
                ? "Sending..."
                : formState === "sent"
                  ? "Message sent ✓"
                  : "Send message ↗"}
            </button>

            {formState === "error" && (
              <p className="mt-4 text-sm text-[#168ee9]">
                Something went wrong. Please email me directly at{" "}
                hamzahassanmir62@gmail.com
              </p>
            )}
            {formState === "sent" && (
              <p className="mt-4 text-sm text-black/50">
                Thanks! I&apos;ll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-[1500px] px-6 pb-8 pt-6 md:px-10">
        <div className="border-t border-black pt-6">
          <div className="flex flex-col gap-5 text-xs md:flex-row md:items-center md:justify-between">
            <p className="font-display text-base">HAMZA HASSAN MIR</p>
            <p className="text-black/45">
              © {new Date().getFullYear()} · All Rights Reserved by Hamza Hassan Mir
            </p>
            <div className="flex gap-5">
              <a href="mailto:hamzahassanmir62@gmail.com">Email ↗</a>
              <a
                href="https://github.com/HamzaHassanMir"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
              <a href="/HamzaHassanMir_Resume.pdf" download>
                Resume ↓
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
