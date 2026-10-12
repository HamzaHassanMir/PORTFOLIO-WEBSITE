"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  TESTIMONIALS — add your own here.                                  */
/*  The Testimonial section and its nav link stay hidden while this    */
/*  array is empty, and appear automatically once it has an entry.     */
/*  Each entry needs: quote, name, role. (No author photos needed.)   */
/* ------------------------------------------------------------------ */
const testimonials: { quote: string; name: string; role: string }[] = [
  {
    quote: "Working alongside Hamza has been an absolute game-changer.I've consistently been impressed by their deep understanding of clean architecture, scalable backend systems, and type-safe frontend workflows with TypeScript.",
    name: "Abdul Wahid",
    role: "Web Developer",
  },
  {
    quote: "Working with Hamza completely transformed our online presence and doubled our inbound leads within just three months. I couldn't be happier with the results!",
    name: "Advocate Hanzla",
    role: "Client",
  },
];

const navItems: [string, string][] = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["portfolio", "Portfolio"],
  ["services", "Services"],
  ["resume", "Resume"],
  ...(testimonials.length > 0
    ? ([["testimonial", "Testimonial"]] as [string, string][])
    : []),
  ["contact", "Contact"],
];

const accentColors = [
  "#4169e1",
  "#66bb6a",
  "#ffa000",
  "#ff6392",
  "#ff5a0f",
  "#9b00ee",
  "#00d9c0",
  "#5f9ea0",
  "#e84545",
  "#66703f",
  "#ff0000",
];

const typedWords = [
  "Developer",
  "MERN Stack Dev",
  "Next.js Builder",
  "Problem Solver",
];

// NOTE: these percentages are placeholders — change them to what you feel is accurate.
const skillBars = [
  { label: "Frontend (React, Next.js, Tailwind)", value: 90 },
  { label: "Backend (Node.js, Express, REST APIs)", value: 85 },
  { label: "Databases (MongoDB, SQL, PostgreSQL)", value: 80 },
];

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

const services = [
  {
    title: "Full Stack Web Apps",
    text: "End-to-end MERN and Next.js applications — responsive UI, secure APIs, authentication and database-driven features.",
    icon: "stack",
  },
  {
    title: "Frontend Development",
    text: "Clean, reusable React components with a focus on responsiveness, performance and polished user experience.",
    icon: "window",
  },
  {
    title: "REST API & Backend",
    text: "Node.js and Express services with authentication workflows, server-side logic and email delivery.",
    icon: "server",
  },
  {
    title: "Database Design",
    text: "Relational and document schemas in MongoDB, MySQL and PostgreSQL with well-structured queries.",
    icon: "db",
  },
];

const education = [
  {
    title: "BS Computer Science",
    place: "Virtual University of Pakistan",
    period: "Expected 2028",
    text: "Building a strong foundation in algorithms, databases and software engineering alongside hands-on projects.",
  },
];

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
    category: "Full Stack",
    stack: "React · Node.js · MongoDB · Redux Toolkit",
    description:
      "Production-ready fashion e-commerce platform with full storefront, admin dashboard, Google OAuth, and real email delivery via Nodemailer. Tested and optimized website performance using Google PageSpeed Insights, achieving a 98/100 performance score",
    github: "https://github.com/HamzaHassanMir/Elegant-Essentials.git",
    image: "/elegant essentials.png",
  },
  {
    title: "eCommerce Store",
    category: "Full Stack",
    stack: "React · Node.js · MongoDB",
    description:
      "Production-ready e-commerce store with full storefront, admin dashboard, persistent cart state, and responsive UI across all devices.",
    github:
      "https://github.com/HamzaHassanMir/eCommerce-Website-Mern-Stack.git",
    image: "/mir eCommerce.png",
  },
  {
    title: "Waqar Hassan Mir Law Associates Website",
    category: "Website",
    stack: "React · Node.js · MongoDB · Redux Toolkit",
    description:
      "Developed a full-stack website for Waqar Hassan Mir Law Associates using React.js and Tailwind CSS for a modern UI and Nodemailer for real email delivery.",
    github: "",
    image: "/WHMLA (1).png",
  },
  {
    title: "College Admission System — SQL Database Project",
    category: "Database",
    stack: "MySQL · SQL (DDL + DML)",
    description:
      "A relational database project built in MySQL that models a college admission workflow — from student applications to admin approvals. Includes schema design, sample data, and 25+ queries demonstrating JOINs, subqueries, aggregate functions, and wildcard operators.",
    github: "https://github.com/HamzaHassanMir/College-Admission-DataBase.git",
    image: "/college-admission-system.png",
  },
];

const projectFilters = ["All", "Full Stack", "Website", "Database"];

const certifications = [
  "The Complete Full-Stack Web Development Bootcamp — Dr. Angela Yu · Udemy",
  "The Complete Python Pro Bootcamp — Dr. Angela Yu · Udemy",
  "Interactivity with JavaScript — University of Michigan · Coursera",
  "Python Data Structures — University of Michigan · Coursera",
  "Introduction to Python Programming — University of Pennsylvania · Coursera",
  "HTML and CSS in Depth — Meta · Coursera",
  "Introduction to SQL — University of Michigan · Coursera",
  "Write Professional Emails in English — Georgia Institute of Technology · Coursera",
  "Claude 101 — ANTHROPIC ",
  "Python (Basic) — HackerRank ",
  "SQL (Basic) — HackerRank ",
  "Excel 2019 Associate — Microsoft Office Specialist · Microsoft",
  "Word 2019 Associate — Microsoft Office Specialist · Microsoft",
];

const whyMe = [
  {
    title: "Engineering mindset",
    text: "I think beyond the interface — APIs, data, performance, maintainability, and the user experience all matter.",
  },
  {
    title: "AI-assisted workflow",
    text: "I use modern AI development tools as an accelerator for research, implementation, debugging, refactoring, and iteration.",
  },
  {
    title: "Always learning",
    text: "From MERN to Next.js and modern tooling, I keep expanding my stack by building real projects rather than only following tutorials.",
  },
];

/* ------------------------------------------------------------------ */
/*  STYLES (theme, animations, colour variable)                        */
/* ------------------------------------------------------------------ */

const css = `
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&family=Open+Sans:ital,wght@0,400;0,600;1,400&display=swap');

:root{
  --accent:#4169e1;
  --bg1:#2f2f2f;
  --bg2:#383838;
  --card:#303030;
  --field:#444444;
  --line:rgba(255,255,255,.08);
  --muted:rgba(255,255,255,.64);
  --ease:cubic-bezier(.22,.7,.2,1);
}
html{scroll-behavior:smooth}
body{background:var(--bg2)}
::selection{background:var(--accent);color:#fff}
.aali{font-family:'Open Sans',Arial,sans-serif;background:var(--bg2);color:#fff;overflow-x:clip;font-size:16px;-webkit-font-smoothing:antialiased}
.fh{font-family:'Josefin Sans',Arial,sans-serif}
.ac{color:var(--accent)}
.ac-bg{background:var(--accent)}
.ac-bd{border-color:var(--accent)}
.muted{color:var(--muted)}
.wrap{max-width:1200px;margin:0 auto;padding-left:28px;padding-right:28px}

/* nav */
.nav{position:fixed;top:0;left:0;right:0;z-index:60;transition:background .35s,box-shadow .35s,height .35s,border-color .35s;height:88px;border-bottom:1px solid transparent}
.nav.solid{background:rgba(56,56,56,.88);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom-color:var(--line);height:70px}
.nav a.link{position:relative;font-family:'Josefin Sans',sans-serif;font-weight:600;font-size:16px;letter-spacing:.04em;transition:color .25s;padding:6px 0}
.nav a.link:hover,.nav a.link.on{color:var(--accent)}
.nav a.link::after{content:"";position:absolute;left:0;bottom:-2px;height:2px;width:0;border-radius:2px;background:var(--accent);transition:width .35s var(--ease)}
.nav a.link:hover::after,.nav a.link.on::after{width:100%}

/* buttons */
.btn{display:inline-flex;align-items:center;gap:10px;background:var(--accent);color:#fff;font-family:'Josefin Sans',sans-serif;font-weight:700;font-size:16px;letter-spacing:.03em;padding:16px 38px;border-radius:8px;border:2px solid var(--accent);transition:transform .3s var(--ease),box-shadow .3s var(--ease),background .25s,color .25s;cursor:pointer}
.btn:hover{transform:translateY(-3px);box-shadow:0 14px 28px -12px var(--accent)}
.btn.ghost{background:transparent;color:#fff}
.btn.ghost:hover{background:var(--accent)}
.link-u{font-family:'Josefin Sans',sans-serif;font-weight:700;font-size:16px;letter-spacing:.03em;position:relative}
.link-u::after{content:"";position:absolute;left:0;bottom:-5px;height:2px;width:0;background:var(--accent);transition:width .35s var(--ease)}
.link-u:hover::after{width:100%}

/* hero */
.hero{background:var(--bg1);min-height:100vh;position:relative;overflow:hidden}
.hero-glow{position:absolute;inset:0;pointer-events:none;background:radial-gradient(60% 55% at 78% 45%,color-mix(in srgb,var(--accent) 22%,transparent),transparent 70%),radial-gradient(rgba(255,255,255,.07) 1px,transparent 1.2px) 0 0/28px 28px;-webkit-mask-image:linear-gradient(to bottom,#000 55%,transparent);mask-image:linear-gradient(to bottom,#000 55%,transparent)}
.hello{font-family:'Josefin Sans',sans-serif;font-weight:600;font-size:22px;letter-spacing:.04em;opacity:.9}
.big-name{font-family:'Josefin Sans',sans-serif;font-weight:700;color:var(--accent);font-size:clamp(4rem,8.5vw,7.4rem);line-height:1;letter-spacing:-.025em}
.typed-line{font-family:'Josefin Sans',sans-serif;font-weight:700;font-size:clamp(1.6rem,3vw,2.5rem)}
.caret{display:inline-block;width:3px;height:.9em;background:var(--accent);margin-left:6px;vertical-align:-.08em;animation:blink .8s steps(1) infinite}
@keyframes blink{50%{opacity:0}}

.shape{position:absolute}
.float-a{animation:floatA 7s ease-in-out infinite}
.float-b{animation:floatB 8s ease-in-out infinite}
.float-c{animation:floatA 9s ease-in-out infinite reverse}
@keyframes floatA{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
@keyframes floatB{0%,100%{transform:translate(0,0)}50%{transform:translate(10px,10px)}}
.ghost-letters{position:absolute;font-family:'Josefin Sans',sans-serif;font-weight:700;color:transparent;-webkit-text-stroke:1.5px rgba(255,255,255,.12);line-height:1;pointer-events:none;animation:floatA 10s ease-in-out infinite}

.mouse{width:28px;height:44px;border:2px solid rgba(255,255,255,.85);border-radius:16px;position:relative;display:block}
.mouse::after{content:"";position:absolute;left:50%;top:8px;width:3px;height:8px;background:#fff;border-radius:3px;transform:translateX(-50%);animation:wheel 1.6s ease-in-out infinite}
@keyframes wheel{0%{opacity:1;transform:translate(-50%,0)}80%{opacity:0;transform:translate(-50%,14px)}100%{opacity:0}}

.social-rail a{display:flex;height:42px;width:42px;align-items:center;justify-content:center;opacity:.8;transition:color .25s,transform .25s,opacity .25s}
.social-rail a:hover{color:var(--accent);transform:scale(1.18);opacity:1}

/* reveal animations */
.reveal{opacity:0;transform:translateY(34px);transition:opacity .9s var(--ease),transform .9s var(--ease)}
.reveal.left{transform:translateX(-44px)}
.reveal.right{transform:translateX(44px)}
.reveal.zoom{transform:scale(.94)}
.reveal.in{opacity:1;transform:none}

/* headings */
.eyebrow{font-family:'Josefin Sans',sans-serif;font-weight:700;font-size:15px;letter-spacing:.18em;text-transform:uppercase;color:var(--accent);display:inline-flex;align-items:center;gap:12px}
.eyebrow::before{content:"";width:28px;height:2px;background:currentColor;border-radius:2px}
.h2{font-family:'Josefin Sans',sans-serif;font-weight:700;font-size:clamp(2.1rem,3.8vw,3.3rem);line-height:1.12;letter-spacing:-.01em}

/* about */
.photo-frame{position:relative;max-width:440px}
.photo-frame .blk{position:absolute;left:-44px;bottom:-44px;width:260px;height:260px;background:var(--accent);z-index:0;border-radius:6px}
.photo-frame .out{position:absolute;left:-70px;top:60px;width:200px;height:240px;border:3px solid rgba(255,255,255,.9);z-index:2;pointer-events:none;border-radius:6px}
.photo-frame .img{position:relative;z-index:1;border-radius:18px;overflow:hidden;aspect-ratio:1/1.1;box-shadow:0 30px 60px -25px rgba(0,0,0,.7)}

/* skills band */
.band{background:linear-gradient(135deg,var(--accent),color-mix(in srgb,var(--accent) 82%,#000));transition:background .4s}
.bar-track{height:8px;border-radius:8px;background:rgba(255,255,255,.28);overflow:hidden}
.bar-fill{height:100%;border-radius:8px;background:#fff;width:0;transition:width 1.6s var(--ease)}
.tag{display:inline-block;padding:8px 16px;border-radius:40px;border:1px solid var(--line);background:rgba(255,255,255,.03);font-size:14px;transition:all .3s var(--ease)}
.tag:hover{background:var(--accent);border-color:var(--accent);transform:translateY(-3px)}

/* portfolio */
.filter{font-family:'Josefin Sans',sans-serif;font-weight:700;font-size:16px;letter-spacing:.04em;padding:6px 4px;position:relative;color:#fff;opacity:.75;cursor:pointer;transition:opacity .25s}
.filter.on,.filter:hover{opacity:1}
.filter::after{content:"";position:absolute;left:0;bottom:-2px;height:2px;width:0;background:#fff;transition:width .3s var(--ease)}
.filter.on::after,.filter:hover::after{width:100%}
.pcard{position:relative;border-radius:16px;overflow:hidden;aspect-ratio:1/1.02;background:#111;border:1px solid var(--line);box-shadow:0 24px 40px -26px rgba(0,0,0,.8);animation:pop .6s both;transition:transform .4s var(--ease),box-shadow .4s var(--ease)}
.pcard:hover{transform:translateY(-6px);box-shadow:0 34px 50px -26px rgba(0,0,0,.9)}
@keyframes pop{from{opacity:0;transform:scale(.94)}to{opacity:1;transform:none}}
.pcard .ov{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;padding:24px;background:linear-gradient(to top,rgba(0,0,0,.88),rgba(0,0,0,0) 55%);transition:background .4s}
.pcard:hover .ov{background:linear-gradient(to top,rgba(0,0,0,.96),rgba(0,0,0,.6))}
.pcard .more{max-height:0;opacity:0;overflow:hidden;transition:max-height .55s var(--ease),opacity .4s}
.pcard:hover .more,.pcard:focus-within .more{max-height:260px;opacity:1}
@media (hover:none){.pcard .more{max-height:260px;opacity:1}}
.pcard img{transition:transform .9s var(--ease)}
.pcard:hover img{transform:scale(1.06)}

/* service cards */
.scard{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:32px;display:flex;gap:24px;transition:transform .4s var(--ease),box-shadow .4s var(--ease),border-color .3s}
.scard:hover{transform:translateY(-6px);box-shadow:0 26px 40px -24px rgba(0,0,0,.7);border-color:color-mix(in srgb,var(--accent) 50%,transparent)}
.sicon{position:relative;flex:none;width:80px;height:80px}
.sicon .p1,.sicon .p2{position:absolute;background:#4a4a4a;border-radius:12px;transform:rotate(-40deg)}
.sicon .p1{width:18px;height:60px;right:6px;top:0}
.sicon .p2{width:18px;height:60px;left:26px;bottom:-4px}
.sicon .dot{position:absolute;left:0;top:30px;width:16px;height:16px;border-radius:50%;background:#4a4a4a}
.sicon svg{position:relative;z-index:2;margin:14px 0 0 12px;width:52px;height:52px}
.scard:hover .sicon svg{animation:wiggle .6s}
@keyframes wiggle{25%{transform:rotate(-8deg)}75%{transform:rotate(8deg)}}

/* resume */
.tl-item{position:relative}
.tl-item:not(:last-child)::after{content:"";position:absolute;left:25px;top:62px;bottom:-34px;width:1px;background:var(--line)}
.tl-icon{flex:none;width:52px;height:52px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 6px color-mix(in srgb,var(--accent) 18%,transparent);transition:transform .3s var(--ease)}
.tl-icon svg{width:22px;height:22px}
.tl-item:hover .tl-icon{transform:scale(1.1) rotate(6deg)}
.dash{display:inline-block;width:34px;height:4px;background:var(--accent);border-radius:2px;margin-right:14px;vertical-align:middle}

/* quote slider */
.quote-box{border:3px solid rgba(255,255,255,.9);width:150px;height:170px;display:flex;align-items:center;justify-content:center;border-radius:6px}
.fade-swap{animation:swap .7s var(--ease) both}
@keyframes swap{from{opacity:0;transform:translateX(24px)}to{opacity:1;transform:none}}

/* contact */
.field{width:100%;background:var(--field);border:1.5px solid transparent;border-radius:10px;padding:18px 24px;font-size:16px;color:#fff;outline:none;transition:border-color .25s,background .25s,box-shadow .25s;font-family:'Open Sans',sans-serif}
.field::placeholder{color:rgba(255,255,255,.5);font-family:'Josefin Sans',sans-serif;letter-spacing:.04em}
.field:focus{border-color:var(--accent);background:#4a4a4a;box-shadow:0 0 0 4px color-mix(in srgb,var(--accent) 22%,transparent)}

/* footer */
.foot-box{border:3px solid rgba(255,255,255,.9);width:380px;max-width:100%;height:320px;display:flex;align-items:flex-end;padding:30px 44px;position:relative;margin-bottom:-60px;background:var(--bg1);z-index:2;border-radius:6px}
.circle-ic{width:56px;height:56px;border-radius:50%;background:#fff;color:var(--accent);display:flex;align-items:center;justify-content:center;transition:transform .3s var(--ease),background .3s,color .3s}
.circle-ic:hover{background:var(--accent);color:#fff;transform:translateY(-5px)}
.totop{width:76px;height:140px;background:var(--accent);display:flex;align-items:center;justify-content:center;border-radius:6px 6px 0 0;transition:transform .3s var(--ease)}
.totop:hover{transform:translateY(-8px)}

/* settings panel */
.settings{position:fixed;right:0;top:200px;z-index:90;width:353px;display:flex;align-items:flex-start;transform:translateX(280px);transition:transform .5s var(--ease);filter:drop-shadow(0 20px 40px rgba(0,0,0,.35))}
.settings.open{transform:none}
.settings .gear{width:73px;height:73px;background:#fff;color:#111;display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none;border-radius:8px 0 0 8px}
.settings .gear svg{width:32px;height:32px;transition:transform .7s var(--ease)}
.settings.open .gear svg{transform:rotate(180deg)}
.settings .panel{width:280px;background:#fff;color:#111;padding:44px 36px 40px;border-radius:0 0 0 8px}
.settings .panel h4{font-family:'Josefin Sans',sans-serif;font-weight:700;font-size:18px;display:inline-block;border-bottom:1px solid #bbb;padding-bottom:4px;margin-bottom:26px}
.swatch{width:42px;height:42px;border-radius:50%;cursor:pointer;border:0;box-shadow:0 0 0 0 transparent;transition:transform .25s var(--ease),box-shadow .25s}
.swatch:hover{transform:scale(1.14)}
.swatch.on{box-shadow:0 0 0 3px #fff,0 0 0 5px #111}
.cur-opt{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:.4;transition:opacity .2s,transform .2s}
.cur-opt.on{opacity:1}
.cur-opt:hover{transform:scale(1.1)}
@media (max-width:640px){.settings{top:140px}}

/* magic cursor */
.magic-on, .magic-on *{cursor:none !important}
.mc-ring{position:fixed;left:0;top:0;z-index:9999;width:40px;height:40px;border:1.5px solid var(--accent);border-radius:50%;pointer-events:none;opacity:0;transition:width .3s var(--ease),height .3s var(--ease),background .3s,opacity .3s}
.mc-ring.hover{width:68px;height:68px;background:color-mix(in srgb,var(--accent) 22%,transparent)}
.mc-dot{position:fixed;left:0;top:0;z-index:9999;width:6px;height:6px;background:var(--accent);border-radius:50%;pointer-events:none;opacity:0;transition:opacity .3s}
.mc-ring.show,.mc-dot.show{opacity:1}
@media (hover:none){.mc-ring,.mc-dot{display:none}.magic-on, .magic-on *{cursor:auto !important}}

@media (prefers-reduced-motion:reduce){
  .reveal{opacity:1;transform:none;transition:none}
  .float-a,.float-b,.float-c,.ghost-letters,.mouse::after,.caret{animation:none}
  html{scroll-behavior:auto}
}
`;

/* ------------------------------------------------------------------ */
/*  SMALL HELPERS                                                      */
/* ------------------------------------------------------------------ */

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "" | "left" | "right" | "zoom";
}) {
  const [ref, seen] = useInView<HTMLDivElement>(0.12);
  return (
    <div
      ref={ref}
      className={`reveal ${variant} ${seen ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Counter({
  to,
  suffix = "",
  pad = 0,
}: {
  to: number;
  suffix?: string;
  pad?: number;
}) {
  const [ref, seen] = useInView<HTMLSpanElement>(0.4);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to]);
  return (
    <span ref={ref}>
      {String(n).padStart(pad, "0")}
      {suffix}
    </span>
  );
}

function SkillBar({ label, value }: { label: string; value: number }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.4);
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1600);
      setShown(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, value]);
  return (
    <div ref={ref} className="mb-8">
      <div className="fh mb-3 flex justify-between text-[17px] font-semibold">
        <span>{label}</span>
        <span>{shown}%</span>
      </div>
      <div className="bar-track">
        <div className="bar-fill" style={{ width: seen ? `${value}%` : 0 }} />
      </div>
    </div>
  );
}

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[wi];
    let delay = deleting ? 45 : 95;
    if (!deleting && text === word) delay = 1600;
    if (deleting && text === "") delay = 400;
    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWi((wi + 1) % words.length);
      } else {
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
        );
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, wi, words]);
  return text;
}

/* icons */
const GitHubIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);
const MailIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2.5" y="4.5" width="19" height="15" rx="1.5" />
    <path d="M3 6l9 7 9-7" />
  </svg>
);
const DownIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 3v13M6 11l6 6 6-6M4 21h16" />
  </svg>
);
const GearIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
);
const CapIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
    <path d="M12 3L1 9l11 6 9-4.900V17h2V9L12 3zM5 13.200v4L12 21l7-3.800v-4L12 17l-7-3.800z" />
  </svg>
);
const BagIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
    <path d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM10 5h4v2h-4V5zm3 9h-2v-2h2v2z" />
  </svg>
);
const ArrowCursor = ({ color = "#111" }: { color?: string }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M10 32L26 14l-2 6 7 2-9 3-1 7-2-7-9 7z" fill={color} />
    <path d="M30 6v4M34 10h-4M26 8l-2-2M36 4l-2 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
function ServiceIcon({ kind }: { kind: string }) {
  const p = { width: 60, height: 60, viewBox: "0 0 60 60", fill: "none", stroke: "#fff", strokeWidth: 3 } as const;
  const red = "var(--accent)";
  if (kind === "window")
    return (
      <svg {...p}><rect x="6" y="12" width="48" height="36" rx="5" /><path d="M6 24h48" /><circle cx="14" cy="18" r="2" stroke={red} /><circle cx="22" cy="18" r="2" stroke={red} /></svg>
    );
  if (kind === "server")
    return (
      <svg {...p}><rect x="8" y="10" width="44" height="16" rx="4" /><rect x="8" y="34" width="44" height="16" rx="4" /><circle cx="16" cy="18" r="2" stroke={red} /><circle cx="16" cy="42" r="2" stroke={red} /></svg>
    );
  if (kind === "db")
    return (
      <svg {...p}><ellipse cx="30" cy="14" rx="20" ry="7" /><path d="M10 14v30c0 4 9 7 20 7s20-3 20-7V14M10 29c0 4 9 7 20 7s20-3 20-7" /><circle cx="42" cy="44" r="2" stroke={red} /></svg>
    );
  return (
    <svg {...p}><path d="M30 8L8 20l22 12 22-12L30 8z" /><path d="M8 30l22 12 22-12M8 40l22 12 22-12" stroke={red} /></svg>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  const [accent, setAccent] = useState(accentColors[0]);
  const [magic, setMagic] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [filter, setFilter] = useState("All");
  const [slide, setSlide] = useState(0);
  const [tSlide, setTSlide] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const typed = useTyping(typedWords);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  /* restore saved preferences */
  useEffect(() => {
    try {
      const a = localStorage.getItem("portfolio-accent");
      if (a && accentColors.includes(a)) setAccent(a);
      const m = localStorage.getItem("portfolio-magic");
      if (m !== null) setMagic(m === "1");
      else setMagic(window.matchMedia("(hover: hover)").matches);
    } catch {
      /* ignore */
    }
  }, []);

  /* apply accent colour everywhere through a CSS variable */
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent);
    try {
      localStorage.setItem("portfolio-accent", accent);
    } catch {
      /* ignore */
    }
  }, [accent]);

  /* magic cursor */
  useEffect(() => {
    try {
      localStorage.setItem("portfolio-magic", magic ? "1" : "0");
    } catch {
      /* ignore */
    }
    if (!magic) {
      document.documentElement.classList.remove("magic-on");
      return;
    }
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;
    document.documentElement.classList.add("magic-on");
    let x = 0,
      y = 0,
      rx = 0,
      ry = 0,
      raf = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      ring.classList.add("show");
      dot.classList.add("show");
      const t = e.target as HTMLElement | null;
      ring.classList.toggle("hover", !!t?.closest("a, button, input, textarea, label"));
    };
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("magic-on");
    };
  }, [magic]);

  /* sticky nav + scroll spy */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = "home";
      for (const [id] of navItems) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 140 <= window.scrollY) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* auto-advance the "why work with me" slider */
  useEffect(() => {
    const t = setTimeout(() => setSlide((s) => (s + 1) % whyMe.length), 7000);
    return () => clearTimeout(t);
  }, [slide]);

  /* auto-advance testimonials (only when there is more than one) */
  useEffect(() => {
    if (testimonials.length < 2) return;
    const t = setTimeout(() => setTSlide((s) => (s + 1) % testimonials.length), 7000);
    return () => clearTimeout(t);
  }, [tSlide]);

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

  const visibleProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main className="aali">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* magic cursor elements */}
      {magic && (
        <>
          <div ref={ringRef} className="mc-ring" />
          <div ref={dotRef} className="mc-dot" />
        </>
      )}

      {/* SETTINGS PANEL */}
      <div className={`settings ${settingsOpen ? "open" : ""}`}>
        <button
          className="gear"
          onClick={() => setSettingsOpen(!settingsOpen)}
          aria-label="Open theme settings"
        >
          <GearIcon />
        </button>
        <div className="panel">
          <h4>Unlimited Colors</h4>
          <div className="mb-12 grid grid-cols-4 gap-x-2 gap-y-3">
            {accentColors.map((c) => (
              <button
                key={c}
                className={`swatch ${accent === c ? "on" : ""}`}
                style={{ background: c }}
                onClick={() => setAccent(c)}
                aria-label={`Use color ${c}`}
              />
            ))}
          </div>
          <h4>Magic Cursor</h4>
          <div className="flex gap-6">
            <button
              className={`cur-opt ${magic ? "on" : ""}`}
              style={{ border: "2px solid #111" }}
              onClick={() => setMagic(true)}
              aria-label="Enable magic cursor"
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#111" }} />
            </button>
            <button
              className={`cur-opt ${!magic ? "on" : ""}`}
              onClick={() => setMagic(false)}
              aria-label="Use default cursor"
            >
              <ArrowCursor />
            </button>
          </div>
        </div>
      </div>

      {/* NAV */}
      <nav className={`nav ${scrolled ? "solid" : ""}`}>
        <div className="wrap flex h-full items-center justify-between">
          <a href="#home" className="fh text-[26px] font-bold leading-none tracking-tight">
            Hamza
          </a>
          <div className="hidden items-center gap-10 lg:flex">
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`} className={`link ${active === id ? "on" : ""}`}>
                {label}
              </a>
            ))}
          </div>
          <button
            className="flex flex-col gap-[6px] lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block h-[3px] w-8 bg-white" />
            <span className="block h-[3px] w-8 bg-white" />
            <span className="block h-[3px] w-8 bg-white" />
          </button>
        </div>
        {menuOpen && (
          <div className="bg-[#333] px-6 pb-6 lg:hidden">
            {navItems.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`fh block py-3 text-xl font-semibold ${active === id ? "ac" : ""}`}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HOME */}
      <section id="home" className="hero">
        <div className="hero-glow" />
        {/* social rail */}
        <div className="social-rail absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col 2xl:flex">
          <a href="https://github.com/HamzaHassanMir" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href="mailto:hamzahassanmir62@gmail.com" aria-label="Email">
            <MailIcon />
          </a>
          <a href="/HamzaHassanMir_Resume.pdf" download aria-label="Resume">
            <DownIcon />
          </a>
        </div>

        <div className="wrap grid min-h-screen items-center gap-10 pb-24 pt-36 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative z-10">
            <Reveal>
              <p className="hello mb-2">Hello, I&apos;m</p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="big-name">Hamza</h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="typed-line mt-10">
                Creative <span>{typed}</span>
                <span className="caret" />
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-14 flex flex-wrap items-center gap-10">
                <a href="#contact" className="btn">
                  Say Hello <MailIcon size={22} />
                </a>
                <a href="#about" className="link-u">
                  About Me
                </a>
              </div>
            </Reveal>
            <Reveal delay={480}>
              <a href="#about" className="mt-16 inline-block" aria-label="Scroll down">
                <span className="mouse" />
              </a>
            </Reveal>
          </div>

          {/* visual */}
          <div className="relative mx-auto hidden h-[600px] w-full max-w-[560px] lg:block">
            <div className="ghost-letters" style={{ left: -40, top: 60, fontSize: 330 }}>
              H
            </div>
            <div className="ghost-letters" style={{ right: -10, top: 120, fontSize: 280, animationDelay: "1s" }}>
              M
            </div>
            <div className="shape ac-bg float-b" style={{ right: 0, top: 10, width: 380, height: 500 }} />
            <div className="shape ac-bg float-a" style={{ left: 20, top: 90, width: 90, height: 135 }} />
            <div className="shape float-c" style={{ left: 120, top: 70, width: 400, height: 460, border: "6px solid #fff", zIndex: 2, pointerEvents: "none" }} />
            <div className="absolute z-[1] overflow-hidden" style={{ left: 160, top: 40, width: 340, height: 460 }}>
              <Image
                src="/portfolio.jpg"
                alt="Hamza Hassan Mir"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="shape ac-bg float-a" style={{ left: 40, top: 400, width: 250, height: 250, zIndex: 3 }} />
          </div>
        </div>

        <div className="fh absolute bottom-6 left-6 z-10 text-lg font-semibold tracking-wide md:left-10">
          hamzahassanmir62@gmail.com
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-24" style={{ background: "var(--bg2)" }}>
        <div className="wrap grid items-center gap-24 lg:grid-cols-2">
          <Reveal variant="left" className="photo-frame mx-auto lg:ml-14">
            <div className="blk" />
            <div className="out hidden md:block" />
            <div className="img">
              <Image src="/portfolio.jpg" alt="About Hamza" fill className="object-cover" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">About Me</p>
              <h2 className="h2 mt-2">
                I&apos;m <span className="ac">Hamza</span>
                <br />
                Full Stack <span className="ac">Developer</span>
              </h2>
              <p className="fh mt-8 text-[28px] font-bold">Building for the web</p>
            </Reveal>
            <Reveal delay={150}>
              <p className="muted mt-8 text-[17px] leading-8">
                I&apos;m a results-driven MERN Stack Developer with hands-on experience
                building full-stack applications using JavaScript, React.js, Next.js,
                Node.js, Express.js, MongoDB, and Tailwind CSS.
              </p>
              <p className="muted mt-5 text-[17px] leading-8">
                My focus is simple: understand the problem, reduce the complexity, and
                ship clean, scalable solutions. I enjoy learning modern tools and
                applying them to real products.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <a href="/HamzaHassanMir_Resume.pdf" download className="btn mt-10">
                Download CV <DownIcon size={20} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="band py-24">
          <div className="wrap grid gap-16 lg:grid-cols-2">
            <div>
              <Reveal>
                <p className="fh text-[15px] font-bold uppercase tracking-[.18em]">My Skills</p>
                <h2 className="h2 mt-2">
                  You Can Imagine
                  <br />I Can Do
                </h2>
                <p className="mt-10 max-w-[520px] text-[17px] leading-8 text-white/90">
                  I build professional, responsive and multi-functional web
                  applications — from clean interfaces to reliable backend systems and
                  databases.
                </p>
              </Reveal>
            </div>
            <div className="lg:pt-6">
              {skillBars.map((s) => (
                <SkillBar key={s.label} label={s.label} value={s.value} />
              ))}
            </div>
          </div>
        </div>

        <div className="py-24" style={{ background: "var(--bg2)" }}>
          <div className="wrap grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, items], i) => (
              <Reveal key={category} delay={i * 90}>
                <p className="fh mb-5 text-[17px] font-bold ac">{category}</p>
                <div className="flex flex-wrap gap-3">
                  {items.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio">
        <div className="band pb-40 pt-24 text-center">
          <Reveal>
            <p className="fh text-[15px] font-bold uppercase tracking-[.18em]">Selected works</p>
            <h2 className="h2 mt-1">Check my portfolio</h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-3">
              {projectFilters.map((f) => (
                <button
                  key={f}
                  className={`filter ${filter === f ? "on" : ""}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="pb-28" style={{ background: "var(--bg2)" }}>
          <div className="wrap -mt-28 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((p, i) => (
              <div key={p.title + filter} className="pcard" style={{ animationDelay: `${i * 90}ms` }}>
                <Image
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  fill
                  className="object-cover object-top"
                />
                <div className="ov">
                  <p className="fh text-xs font-bold uppercase tracking-[.18em] ac">{p.category}</p>
                  <h3 className="fh mt-1 text-[21px] font-bold leading-tight">{p.title}</h3>
                  <div className="more">
                  <p className="mt-2 text-xs uppercase tracking-wider text-white/60">{p.stack}</p>
                  <p className="mt-3 line-clamp-4 text-sm leading-6 text-white/80">{p.description}</p>
                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-u mt-4 w-fit text-base"
                    >
                      View on GitHub ↗
                    </a>
                  ) : (
                    <span className="mt-4 block text-sm text-white/50">Private client project</span>
                  )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <a
              href="https://github.com/HamzaHassanMir"
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost"
            >
              All projects ↗
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24" style={{ background: "var(--bg2)" }}>
        <div className="wrap grid gap-10 lg:grid-cols-2">
          <div className="lg:row-span-2">
            <Reveal>
              <p className="eyebrow">What I Do</p>
              <h2 className="h2 mt-2">My Services</h2>
              <p className="muted mt-10 max-w-[480px] text-[17px] leading-8">
                I deliver clean, scalable web solutions with a focus on quality,
                performance and long-term maintainability.
              </p>
            </Reveal>
          </div>
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 110} variant="zoom">
              <div className="scard h-full">
                <div className="sicon">
                  <span className="p1" />
                  <span className="p2" />
                  <span className="dot" />
                  <ServiceIcon kind={s.icon} />
                </div>
                <div>
                  <h3 className="fh text-[22px] font-bold">{s.title}</h3>
                  <p className="muted mt-4 text-[17px] leading-8">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={200}>
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <h3 className="fh max-w-[340px] text-[26px] font-bold leading-tight">
                Do You Want Something Different?
              </h3>
              <a href="#contact" className="btn ghost mt-8">
                Knock Me <MailIcon size={20} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="band py-24">
        <div className="wrap grid grid-cols-2 gap-y-12 text-center lg:grid-cols-4 lg:text-left">
          {[
            { to: 3, suffix: "+", label: "Internships", pad: 2 },
            { to: 4, suffix: "", label: "Featured Projects", pad: 2 },
            { to: certifications.length, suffix: "+", label: "Certifications", pad: 0 },
            { to: 98, suffix: "", label: "PageSpeed Score", pad: 0 },
          ].map((s) => (
            <Reveal key={s.label}>
              <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-5">
                <span className="fh text-[52px] font-bold leading-none">
                  <Counter to={s.to} suffix={s.suffix} pad={s.pad} />
                </span>
                <span className="fh text-[17px] font-semibold leading-tight">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="py-24" style={{ background: "var(--bg2)" }}>
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Know More</p>
            <h2 className="h2 mt-2">My Resume</h2>
            <p className="muted mt-8 max-w-[560px] text-[17px] leading-8">
              I enjoy every step of the development process, from discussion and
              collaboration to concept and execution.
            </p>
          </Reveal>

          <div className="mt-20 grid gap-16 lg:grid-cols-2">
            <div>
              <Reveal>
                <h3 className="fh mb-12 text-[26px] font-bold">
                  <span className="dash" />
                  Education
                </h3>
              </Reveal>
              {education.map((e) => (
                <Reveal key={e.title} className="tl-item mb-12 flex gap-6">
                  <div className="tl-icon">
                    <CapIcon />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-6">
                      <h4 className="fh text-[21px] font-bold">{e.title}</h4>
                      <span className="muted text-[17px]">{e.period}</span>
                    </div>
                    <p className="fh mt-1 text-xl font-semibold">{e.place}</p>
                    <p className="muted mt-3 text-[16px] leading-7">{e.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div>
              <Reveal>
                <h3 className="fh mb-12 text-[26px] font-bold">
                  <span className="dash" />
                  Experience
                </h3>
              </Reveal>
              {experience.map((e, i) => (
                <Reveal key={e.company} delay={i * 80} className="tl-item mb-12 flex gap-6">
                  <div className="tl-icon">
                    <BagIcon />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-6">
                      <h4 className="fh text-[21px] font-bold">{e.role}</h4>
                      <span className="muted text-[17px]">{e.period}</span>
                    </div>
                    <p className="fh mt-1 text-xl font-semibold">
                      {e.company} <span className="muted text-base font-normal">· {e.type}</span>
                    </p>
                    <p className="muted mt-3 text-[16px] leading-7">{e.bullets[0]}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* certifications */}
          <Reveal className="mt-10">
            <h3 className="fh mb-10 text-[26px] font-bold">
              <span className="dash" />
              Certifications
              <span className="muted ml-4 text-lg font-normal">({certifications.length})</span>
            </h3>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {certifications.map((c, i) => (
              <Reveal key={c} delay={(i % 2) * 90}>
                <div className="flex items-start gap-5 rounded-xl p-5 transition hover:-translate-y-1" style={{ background: "var(--card)" }}>
                  <span className="fh text-xl font-bold ac">{String(i + 1).padStart(2, "0")}</span>
                  <span className="muted text-[16px] leading-7">{c}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL — hidden until the testimonials array has entries */}
      {testimonials.length > 0 && (
        <section id="testimonial" className="band relative overflow-hidden py-24">
          <div className="wrap grid items-center gap-16 lg:grid-cols-[.8fr_1.2fr]">
            <Reveal variant="left" className="relative mx-auto w-full max-w-[400px]">
              <div className="absolute -left-10 top-10 z-10 h-[75%] w-[75%] rounded-md border-[3px] border-white/90" />
              <div className="relative aspect-[1/1.15] overflow-hidden rounded-xl shadow-[0_30px_60px_-25px_rgba(0,0,0,.6)]">
                <Image src="/portfolio.jpg" alt="Hamza" fill className="object-cover" />
              </div>
            </Reveal>

            <div className="relative">
              <div className="quote-box absolute -top-14 right-0 hidden md:flex">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="#fff">
                  <path d="M4 18v-5c0-4 2-7 6-8v3c-2 .7-3 2-3 4h3v6H4zm10 0v-5c0-4 2-7 6-8v3c-2 .7-3 2-3 4h3v6h-6z" />
                </svg>
              </div>
              <Reveal>
                <p className="fh text-[15px] font-bold uppercase tracking-[.18em]">Testimonial</p>
                <h2 className="h2 mt-2">What People Say</h2>
              </Reveal>
              <div key={tSlide} className="fade-swap mt-12 min-h-[170px] max-w-[640px]">
                <p className="text-[19px] italic leading-9">{testimonials[tSlide].quote}</p>
                <div className="mt-8 flex items-center gap-5">
                  <span className="block h-px w-14 bg-white/70" />
                  <p>
                    <span className="fh text-lg font-bold">{testimonials[tSlide].name}</span>
                    <span className="text-white/80">, {testimonials[tSlide].role}</span>
                  </p>
                </div>
              </div>
              {testimonials.length > 1 && (
                <div className="mt-6 flex gap-8 text-3xl">
                  <button
                    onClick={() => setTSlide((tSlide - 1 + testimonials.length) % testimonials.length)}
                    aria-label="Previous testimonial"
                    className="transition hover:-translate-x-1"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setTSlide((tSlide + 1) % testimonials.length)}
                    aria-label="Next testimonial"
                    className="transition hover:translate-x-1"
                  >
                    →
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* WHY WORK WITH ME (slider) */}
      <section className="relative overflow-hidden py-24" style={{ background: "var(--bg1)" }}>
        <div className="wrap grid items-center gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal variant="left" className="relative mx-auto w-full max-w-[420px]">
            <div className="absolute -left-10 top-10 z-10 h-[75%] w-[75%] border-[6px] border-white" />
            <div className="relative aspect-[1/1.15] overflow-hidden rounded-xl">
              <Image src="/portfolio.jpg" alt="Hamza" fill className="object-cover" />
            </div>
          </Reveal>

          <div className="relative">
            <div className="quote-box absolute -top-16 right-0 hidden md:flex">
              <svg width="90" height="90" viewBox="0 0 24 24" fill="#fff">
                <path d="M4 18v-5c0-4 2-7 6-8v3c-2 .7-3 2-3 4h3v6H4zm10 0v-5c0-4 2-7 6-8v3c-2 .7-3 2-3 4h3v6h-6z" />
              </svg>
            </div>
            <Reveal>
              <p className="fh text-[15px] font-bold uppercase tracking-[.18em] ac">Why work with me?</p>
              <h2 className="h2 mt-2 max-w-[560px]">
                How it looks <span className="opacity-70">&amp;</span> how it works
              </h2>
            </Reveal>
            <div key={slide} className="fade-swap mt-14 min-h-[200px] max-w-[640px]">
              <h3 className="fh text-[22px] font-bold">{whyMe[slide].title}</h3>
              <p className="mt-5 text-[18px] italic leading-9">{whyMe[slide].text}</p>
              <div className="mt-8 flex items-center gap-5">
                <span className="block h-px w-14 bg-white/70" />
                <span className="fh text-xl font-semibold">0{slide + 1} / 0{whyMe.length}</span>
              </div>
            </div>
            <div className="mt-8 flex gap-8 text-4xl">
              <button
                onClick={() => setSlide((slide - 1 + whyMe.length) % whyMe.length)}
                aria-label="Previous"
                className="transition hover:-translate-x-1"
              >
                ←
              </button>
              <button
                onClick={() => setSlide((slide + 1) % whyMe.length)}
                aria-label="Next"
                className="transition hover:translate-x-1"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24" style={{ background: "var(--bg2)" }}>
        <div className="wrap">
          <Reveal className="text-center">
            <p className="eyebrow">Get in Touch</p>
            <h2 className="h2 mx-auto mt-2 max-w-[760px]">Connect with Me with Confidence</h2>
          </Reveal>

          <div className="mt-20 grid gap-16 lg:grid-cols-2">
            <Reveal variant="left">
              <p className="muted max-w-[480px] text-[17px] leading-8">
                Open to full-time roles, freelance projects, and collaborations.
                Fill out the form or reach out directly — I&apos;ll get back to you soon.
              </p>

              <div className="mt-12 flex items-center gap-6">
                <span className="ac"><MailIcon size={44} /></span>
                <div>
                  <p className="fh text-[17px] font-bold">Email</p>
                  <a href="mailto:hamzahassanmir62@gmail.com" className="fh text-[19px] font-bold ac">
                    hamzahassanmir62@gmail.com
                  </a>
                </div>
              </div>
              <div className="mt-10 flex items-center gap-6">
                <span className="ac"><GitHubIcon size={44} /></span>
                <div>
                  <p className="fh text-[17px] font-bold">GitHub</p>
                  <a
                    href="https://github.com/HamzaHassanMir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fh text-[19px] font-bold ac"
                  >
                    github.com/HamzaHassanMir
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal variant="right">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="field"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="field"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="field"
                />
                <textarea
                  rows={5}
                  placeholder="Your message here"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="field resize-none"
                />
                <button type="submit" disabled={formState === "sending"} className="btn disabled:opacity-60">
                  {formState === "sending"
                    ? "Sending..."
                    : formState === "sent"
                      ? "Message sent ✓"
                      : "Send message"}
                </button>
                {formState === "error" && (
                  <p className="text-base ac">
                    Something went wrong. Please email me directly at hamzahassanmir62@gmail.com
                  </p>
                )}
                {formState === "sent" && (
                  <p className="muted text-base">Thanks! I&apos;ll get back to you soon.</p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--bg1)" }} className="relative pb-10 pt-0">
        <div className="relative" style={{ background: "var(--bg2)", height: 120 }} />
        <div className="wrap relative -mt-[120px]">
          <div className="flex flex-wrap items-end justify-between gap-10">
            <div className="foot-box">
              <span className="fh text-[44px] font-bold leading-none">Hamza</span>
            </div>
            <div className="mb-16 flex items-center gap-5">
              <span className="fh mr-3 text-xl font-bold">Connect</span>
              <a href="https://github.com/HamzaHassanMir" target="_blank" rel="noopener noreferrer" className="circle-ic" aria-label="GitHub">
                <GitHubIcon size={28} />
              </a>
              <a href="mailto:hamzahassanmir62@gmail.com" className="circle-ic" aria-label="Email">
                <MailIcon size={28} />
              </a>
              <a href="/HamzaHassanMir_Resume.pdf" download className="circle-ic" aria-label="Resume">
                <DownIcon size={28} />
              </a>
            </div>
          </div>
          <div className="absolute right-6 top-0 hidden md:block">
            <button
              className="totop"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                <path d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div className="wrap mt-24 flex flex-col gap-4 text-[17px] text-white/70 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} · All Rights Reserved by{" "}
            <strong className="text-white">Hamza Hassan Mir</strong>
          </p>
          <div className="flex gap-8">
            <a href="mailto:hamzahassanmir62@gmail.com" className="hover:text-white">Email</a>
            <a href="https://github.com/HamzaHassanMir" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
            <a href="/HamzaHassanMir_Resume.pdf" download className="hover:text-white">Resume</a>
          </div>
        </div>
      </footer>
    </main>
  );
}