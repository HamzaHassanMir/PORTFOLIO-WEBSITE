"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


const testimonials: { quote: string; name: string; role: string }[] = [
  {
    quote: "Working alongside Hamza has been an absolute game-changer.I've consistently been impressed by his deep understanding of clean architecture, scalable backend systems, and type-safe frontend workflows with MERN Stack.",
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

const articles = [
  {
    date: "Published on Medium",
    readTime: "Article",
    category: "Career & AI",
    title: "DSA vs AI in 2026: What Should Developers Learn for the Future?",
    description: "A practical look at balancing problem-solving fundamentals with AI-assisted software development.",
    url: "https://medium.com/@hamzahassanmir62/dsa-vs-ai-in-2026-what-should-developers-learn-for-the-future-11e5cf84a59c?sharedUserId=hamzahassanmir62",
  },
  {
    date: "Published on Medium",
    readTime: "Article",
    category: "Data Structures & Algorithms",
    title: "Mastering the Sliding Window Approach: A Must-Know Technique for LeetCode",
    description: "Learn how the sliding window pattern can simplify common array and string problems.",
    url: "https://medium.com/@hamzahassanmir62/mastering-the-sliding-window-approach-a-must-know-technique-for-leetcode-e017491b1692?sharedUserId=hamzahassanmir62",
  },
  {
    date: "Published on Medium",
    readTime: "Article",
    category: "React.js",
    title: "The Bug That Haunted Every React Developer for Years",
    description: "A developer-focused article exploring a familiar React bug and the ideas behind it.",
    url: "https://medium.com/@hamzahassanmir62/the-bug-that-haunted-every-react-developer-for-years-8219246e72a3?sharedUserId=hamzahassanmir62",
  },
];

const processSteps = [
  { number: "01", title: "Discover", text: "I start by understanding the goal, audience, constraints, and the problem the product needs to solve." },
  { number: "02", title: "Plan & design", text: "I map out the structure, user flow, and technical approach before building the core experience." },
  { number: "03", title: "Build & refine", text: "I develop responsive interfaces and reliable backend features, then test, debug, and improve the details." },
  { number: "04", title: "Launch & learn", text: "I focus on clean delivery, performance, and maintainable code that can evolve with future needs." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [scrolled, setScrolled] = useState(false);
  const visibleProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.add("portfolio-redesign-body");
    return () => document.body.classList.remove("portfolio-redesign-body");
  }, []);

  return (
    <main className="portfolio-redesign">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');
        :root { --paper:#f5f2eb; --paper2:#ebe7dd; --ink:#20221f; --muted:#6f716a; --line:#d5d1c7; --lime:#d9f36a; --red:#ed5b43; }
        html { scroll-behavior:smooth; scroll-padding-top:90px; }
        body.portfolio-redesign-body { margin:0; background:var(--paper); }
        .portfolio-redesign { background:var(--paper); color:var(--ink); min-height:100vh; font-family:'DM Sans',sans-serif; overflow:hidden; }
        .portfolio-redesign * { box-sizing:border-box; }
        .pr-wrap { width:min(1180px, calc(100% - 56px)); margin-inline:auto; }
        .pr-mono { font-family:'DM Mono',monospace; text-transform:uppercase; letter-spacing:.12em; font-size:11px; }
        .pr-display { font-family:'Manrope',sans-serif; letter-spacing:-.075em; font-weight:800; line-height:.94; }
        .pr-nav { position:fixed; z-index:100; top:0; left:0; right:0; border-bottom:1px solid transparent; transition:background .25s,border-color .25s; }
        .pr-nav.is-scrolled { background:rgba(245,242,235,.94); backdrop-filter:blur(14px); border-color:var(--line); }
        .pr-nav-inner { min-height:78px; display:flex; align-items:center; justify-content:space-between; gap:28px; }
        .pr-brand { font-family:'Manrope',sans-serif; font-weight:800; font-size:22px; letter-spacing:-.07em; }
        .pr-brand span { color:var(--red); }
        .pr-links { display:flex; align-items:center; gap:28px; }
        .pr-links a,.pr-mobile-links a { color:var(--ink); text-decoration:none; font-size:13px; font-weight:600; transition:opacity .2s; }
        .pr-links a:hover,.pr-mobile-links a:hover { opacity:.55; }
        .pr-nav-cta { border:1px solid var(--ink); padding:11px 16px; border-radius:999px; text-decoration:none; color:var(--ink); font-size:12px; font-weight:700; }
        .pr-menu-button { display:none; border:1px solid var(--line); border-radius:50%; width:42px; height:42px; background:transparent; font-size:20px; }
        .pr-hero { padding:150px 0 64px; }
        .pr-hero-top { display:flex; justify-content:space-between; align-items:center; gap:20px; margin-bottom:40px; }
        .pr-status { display:inline-flex; align-items:center; gap:9px; color:var(--muted); font-size:12px; }
        .pr-status:before { content:''; width:7px; height:7px; background:#7b9e27; border-radius:50%; display:inline-block; }
        .pr-hero-grid { display:grid; grid-template-columns:1.25fr .75fr; gap:44px; align-items:end; }
        .pr-hero h1 { font-size:clamp(64px,10.5vw,140px); margin:0; max-width:850px; }
        .pr-hero h1 .pr-outline { color:transparent; -webkit-text-stroke:1.5px var(--ink); }
        .pr-hero-copy { padding:0 0 12px; max-width:370px; }
        .pr-hero-copy p { font-size:16px; line-height:1.8; color:#565951; margin:0 0 25px; }
        .pr-actions { display:flex; flex-wrap:wrap; gap:10px; }
        .pr-button { display:inline-flex; align-items:center; justify-content:center; gap:18px; padding:15px 20px; border-radius:999px; border:1px solid var(--ink); color:var(--ink); text-decoration:none; font-size:12px; font-weight:700; transition:transform .2s,background .2s; }
        .pr-button:hover { transform:translateY(-3px); }
        .pr-button.dark { background:var(--ink); color:var(--paper); }
        .pr-button.lime { background:var(--lime); border-color:var(--lime); }
        .pr-marquee { border-top:1px solid var(--line); border-bottom:1px solid var(--line); overflow:hidden; margin-top:70px; }
        .pr-marquee-track { display:flex; width:max-content; gap:28px; padding:17px 0; animation:pr-marquee 32s linear infinite; }
        .pr-marquee span { white-space:nowrap; font-family:'Manrope',sans-serif; font-size:15px; font-weight:700; }
        .pr-marquee b { color:var(--red); font-size:19px; }
        @keyframes pr-marquee { to { transform:translateX(-50%); } }
        .pr-section { padding:110px 0; }
        .pr-section-head { display:grid; grid-template-columns:.45fr 1.55fr; gap:35px; margin-bottom:55px; }
        .pr-kicker { color:var(--red); }
        .pr-section h2 { font-size:clamp(42px,6vw,76px); margin:0; }
        .pr-about-copy { max-width:780px; font-size:clamp(20px,2.6vw,29px); line-height:1.5; letter-spacing:-.035em; margin:0; }
        .pr-about-copy strong { font-weight:700; text-decoration:underline; text-decoration-color:var(--red); text-decoration-thickness:3px; text-underline-offset:5px; }
        .pr-three-col { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; margin-top:58px; }
        .pr-info-card { border-top:1px solid var(--line); padding:22px 4px 0 0; }
        .pr-info-card h3 { font-size:17px; margin:0 0 17px; }
        .pr-info-card ul { padding:0; margin:0; list-style:none; color:var(--muted); font-size:14px; line-height:2.1; }
        .pr-process { background:var(--ink); color:var(--paper); }
        .pr-process .pr-kicker { color:var(--lime); }
        .pr-process .pr-section-head { margin-bottom:50px; }
        .pr-process-grid { border-top:1px solid #484a43; }
        .pr-process-row { display:grid; grid-template-columns:90px .8fr 1.2fr; gap:25px; align-items:start; padding:28px 0; border-bottom:1px solid #484a43; }
        .pr-process-number { color:var(--lime); font-family:'DM Mono',monospace; font-size:12px; padding-top:7px; }
        .pr-process-row h3 { margin:0; font-size:clamp(23px,3vw,34px); letter-spacing:-.05em; }
        .pr-process-row p { margin:3px 0 0; color:#c2c3ba; font-size:14px; line-height:1.9; max-width:510px; }
        .pr-work-head { display:flex; justify-content:space-between; align-items:end; gap:24px; margin-bottom:35px; }
        .pr-work-head h2 { font-size:clamp(45px,7vw,84px); }
        .pr-filters { display:flex; gap:7px; flex-wrap:wrap; margin-bottom:28px; }
        .pr-filter { padding:9px 14px; border:1px solid var(--line); background:transparent; border-radius:99px; font-size:11px; font-weight:700; cursor:pointer; color:var(--ink); }
        .pr-filter.active { background:var(--ink); color:var(--paper); border-color:var(--ink); }
        .pr-project-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:42px 24px; }
        .pr-project-card { min-width:0; }
        .pr-project-image { position:relative; aspect-ratio:1.42; overflow:hidden; background:var(--paper2); border:1px solid var(--line); }
        .pr-project-image img { width:100%; height:100%; object-fit:cover; object-position:top; display:block; transition:transform .6s cubic-bezier(.2,.7,.2,1); }
        .pr-project-card:hover .pr-project-image img { transform:scale(1.035); }
        .pr-image-placeholder { width:100%; height:100%; display:flex; flex-direction:column; justify-content:space-between; padding:25px; background:var(--paper2); }
        .pr-image-placeholder span { font-family:'DM Mono',monospace; font-size:10px; text-transform:uppercase; letter-spacing:.12em; }
        .pr-image-placeholder strong { font-family:'Manrope',sans-serif; font-size:clamp(28px,4vw,54px); letter-spacing:-.07em; line-height:.95; max-width:370px; }
        .pr-project-meta { display:flex; justify-content:space-between; gap:15px; margin-top:19px; color:var(--muted); font-size:11px; }
        .pr-project-card h3 { margin:10px 0 8px; font-family:'Manrope',sans-serif; font-size:clamp(23px,3vw,32px); letter-spacing:-.06em; line-height:1.1; }
        .pr-project-card p { margin:0; max-width:550px; color:var(--muted); font-size:13px; line-height:1.8; }
        .pr-stack { margin-top:13px!important; color:var(--ink)!important; font-size:11px!important; }
        .pr-text-link { display:inline-flex; gap:12px; align-items:center; margin-top:17px; color:var(--ink); text-decoration:none; border-bottom:1px solid var(--red); padding-bottom:4px; font-size:12px; font-weight:700; }
        .pr-stats { background:var(--lime); padding:40px 0; }
        .pr-stat-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .pr-stat strong { display:block; font-family:'Manrope',sans-serif; font-size:clamp(38px,6vw,66px); letter-spacing:-.08em; line-height:1; }
        .pr-stat span { display:block; margin-top:10px; font-size:12px; }
        .pr-background { background:var(--paper2); }
        .pr-timeline { border-top:1px solid var(--line); }
        .pr-timeline-item { display:grid; grid-template-columns:.55fr 1fr 1.3fr; gap:24px; padding:25px 0; border-bottom:1px solid var(--line); }
        .pr-period { font-family:'DM Mono',monospace; font-size:10px; color:var(--muted); text-transform:uppercase; line-height:1.8; }
        .pr-timeline-item h3 { margin:0 0 6px; font-size:18px; letter-spacing:-.03em; }
        .pr-timeline-item .pr-role { font-size:12px; color:var(--muted); }
        .pr-timeline-item p { margin:0; font-size:13px; color:var(--muted); line-height:1.8; }
        .pr-skills-layout { display:grid; grid-template-columns:.7fr 1.3fr; gap:55px; }
        .pr-skills-layout h2 { font-size:clamp(42px,6vw,70px); }
        .pr-skill-list { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:25px; }
        .pr-skill-group { border-top:1px solid var(--line); padding-top:14px; }
        .pr-skill-group h3 { font-size:13px; margin:0 0 12px; }
        .pr-skill-group p { color:var(--muted); font-size:13px; line-height:1.9; margin:0; }
        .pr-testimonials { background:var(--red); color:#fffaf2; }
        .pr-testimonials .pr-kicker { color:#ffdf9c; }
        .pr-quote-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:24px; }
        .pr-quote { padding:26px; border:1px solid rgba(255,255,255,.35); min-height:210px; display:flex; flex-direction:column; justify-content:space-between; }
        .pr-quote blockquote { margin:0; font-family:'Manrope',sans-serif; font-size:clamp(18px,2.5vw,26px); line-height:1.4; letter-spacing:-.04em; }
        .pr-quote footer { margin-top:25px; font-size:12px; color:#ffe5dc; }
        .pr-blog { background:var(--paper); }
        .pr-blog-head { display:flex; align-items:end; justify-content:space-between; gap:20px; margin-bottom:35px; }
        .pr-blog-head h2 { font-size:clamp(44px,7vw,82px); }
        .pr-article-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
        .pr-article { padding:24px 22px 25px 0; display:flex; flex-direction:column; min-height:280px; }
        .pr-article + .pr-article { border-left:1px solid var(--line); padding-left:22px; }
        .pr-article-meta { color:var(--muted); font-family:'DM Mono',monospace; font-size:10px; text-transform:uppercase; line-height:1.8; }
        .pr-article h3 { margin:25px 0 12px; font-family:'Manrope',sans-serif; font-size:clamp(20px,2.2vw,27px); line-height:1.18; letter-spacing:-.055em; }
        .pr-article p { color:var(--muted); font-size:13px; line-height:1.8; margin:0 0 25px; }
        .pr-article .pr-text-link { margin-top:auto; align-self:flex-start; }
        .pr-contact { background:var(--ink); color:var(--paper); padding:95px 0 30px; }
        .pr-contact-grid { display:grid; grid-template-columns:1.25fr .75fr; gap:40px; align-items:end; padding-bottom:80px; }
        .pr-contact h2 { font-size:clamp(55px,10vw,120px); margin:0; }
        .pr-contact h2 span { color:var(--lime); }
        .pr-contact-copy { max-width:320px; }
        .pr-contact-copy p { color:#bfc0b7; font-size:14px; line-height:1.9; margin:0 0 24px; }
        .pr-contact .pr-button { color:var(--paper); border-color:#6b6c64; }
        .pr-contact .pr-button.lime { color:var(--ink); border-color:var(--lime); }
        .pr-footer { display:flex; justify-content:space-between; gap:20px; align-items:center; border-top:1px solid #4c4e47; padding-top:22px; color:#bfc0b7; font-size:11px; }
        .pr-footer-links { display:flex; flex-wrap:wrap; gap:18px; }
        .pr-footer a { color:inherit; text-decoration:none; }
        .pr-footer a:hover { color:var(--lime); }
        @media(max-width:800px) {
          .pr-wrap { width:min(100% - 36px, 620px); }
          .pr-links,.pr-nav-cta { display:none; }
          .pr-menu-button { display:block; }
          .pr-mobile-links { display:flex; flex-direction:column; gap:18px; padding:0 0 22px; }
          .pr-hero { padding-top:125px; }
          .pr-hero-grid,.pr-section-head,.pr-skills-layout,.pr-contact-grid { grid-template-columns:1fr; }
          .pr-hero-grid { gap:28px; }
          .pr-hero-copy { max-width:520px; }
          .pr-section { padding:78px 0; }
          .pr-section-head { gap:18px; margin-bottom:35px; }
          .pr-three-col { grid-template-columns:1fr; gap:28px; margin-top:40px; }
          .pr-process-row { grid-template-columns:45px 1fr; gap:13px; }
          .pr-process-row p { grid-column:2; margin-top:-4px; }
          .pr-project-grid { gap:32px 16px; }
          .pr-timeline-item { grid-template-columns:.5fr 1fr; gap:12px; }
          .pr-timeline-item p { grid-column:2; }
          .pr-article-grid { grid-template-columns:1fr; }
          .pr-article,.pr-article + .pr-article { border-left:0; border-bottom:1px solid var(--line); padding:23px 0; min-height:0; }
          .pr-article:last-child { border-bottom:0; }
          .pr-article h3 { margin-top:15px; }
          .pr-contact-grid { gap:30px; padding-bottom:55px; }
          .pr-footer { align-items:flex-start; flex-direction:column; }
        }
        @media(max-width:520px) {
          .pr-hero-top { align-items:flex-start; flex-direction:column; }
          .pr-hero h1 { font-size:clamp(58px,16vw,82px); }
          .pr-work-head,.pr-blog-head { align-items:flex-start; flex-direction:column; }
          .pr-project-grid,.pr-quote-grid,.pr-stat-grid,.pr-skill-list { grid-template-columns:1fr; }
          .pr-project-image { aspect-ratio:1.25; }
          .pr-stat-grid { gap:28px; }
          .pr-timeline-item { grid-template-columns:1fr; gap:8px; }
          .pr-timeline-item p { grid-column:auto; }
          .pr-quote { min-height:180px; }
        }
        @media(prefers-reduced-motion:reduce) { html { scroll-behavior:auto; } *,*::before,*::after { animation-duration:.01ms!important; animation-iteration-count:1!important; transition-duration:.01ms!important; } }
      `}</style>

      <header className={`pr-nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="pr-wrap pr-nav-inner">
          <a href="#home" className="pr-brand" aria-label="Hamza home">HAMZA<span>.</span></a>
          <nav className="pr-links" aria-label="Main navigation">
            <a href="#about">About</a><a href="#process">Process</a><a href="#work">Work</a><a href="#blog">Blog</a><a href="#background">Experience</a>
          </nav>
          <a className="pr-nav-cta" href="#contact">Let’s talk ↗</a>
          <button className="pr-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? "×" : "☰"}</button>
        </div>
        {menuOpen && <nav className="pr-wrap pr-mobile-links" aria-label="Mobile navigation" onClick={() => setMenuOpen(false)}><a href="#about">About</a><a href="#process">Process</a><a href="#work">Work</a><a href="#blog">Blog</a><a href="#background">Experience</a><a href="#contact">Contact</a></nav>}
      </header>

      <section id="home" className="pr-hero pr-wrap">
        <div className="pr-hero-top"><span className="pr-mono">Portfolio / 2026</span><span className="pr-status">Building thoughtful web experiences</span></div>
        <div className="pr-hero-grid">
          <h1 className="pr-display">WEB<br/>DEVELOPER<br/><span className="pr-outline">BUILDING</span><br/>THINGS THAT<br/>LAST<span style={{color:"var(--red)"}}>.</span></h1>
          <div className="pr-hero-copy"><p>I’m Hamza, a full-stack web developer who builds responsive interfaces and dependable web applications—from polished frontends to the backends behind them.</p><div className="pr-actions"><a className="pr-button dark" href="#about">More about me <span>↘</span></a><a className="pr-button" href="#work">Explore work <span>↗</span></a></div></div>
        </div>
        <div className="pr-marquee" aria-label="Technologies"><div className="pr-marquee-track">{[0,1].map((n)=><div key={n} style={{display:"flex",gap:28,alignItems:"center"}}>{["JavaScript","TypeScript","React","Next.js","Node.js","Express","MongoDB","PostgreSQL","Tailwind CSS","Git"].map((s)=><span key={`${n}-${s}`}>{s} <b>✳</b></span>)}</div>)}</div></div>
      </section>

      <section id="about" className="pr-section">
        <div className="pr-wrap">
          <div className="pr-section-head"><p className="pr-mono pr-kicker">01 / About me</p><div><h2 className="pr-display">GOOD WORK IS<br/>FELT IN THE DETAILS.</h2></div></div>
          <p className="pr-about-copy">I care about the details users feel but rarely notice: <strong>fast load times, clear layouts, accessible interfaces,</strong> and systems that are easy to maintain. I turn ideas into useful digital products with thoughtful frontend work and reliable backend foundations.</p>
          <div className="pr-three-col">
            <div className="pr-info-card"><h3>Front-end</h3><ul><li>React.js & Next.js</li><li>JavaScript & TypeScript</li><li>Responsive UI</li><li>Tailwind CSS</li></ul></div>
            <div className="pr-info-card"><h3>Back-end</h3><ul><li>Node.js & Express</li><li>REST APIs & authentication</li><li>MongoDB & Mongoose</li><li>MySQL & PostgreSQL</li></ul></div>
            <div className="pr-info-card"><h3>My approach</h3><ul><li>Performance-minded</li><li>Accessible by default</li><li>Clean, reusable code</li><li>Continuous learning</li></ul></div>
          </div>
        </div>
      </section>

      <section id="process" className="pr-section pr-process"><div className="pr-wrap"><div className="pr-section-head"><p className="pr-mono pr-kicker">02 / How I work</p><h2 className="pr-display">FROM FIRST<br/>IDEA TO SHIP.</h2></div><div className="pr-process-grid">{processSteps.map((step)=><div className="pr-process-row" key={step.number}><span className="pr-process-number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}</div></div></section>

      <section id="work" className="pr-section"><div className="pr-wrap"><div className="pr-work-head"><div><p className="pr-mono pr-kicker" style={{marginBottom:16}}>03 / Selected work</p><h2 className="pr-display">RECENT<br/>PROJECTS<span style={{color:"var(--red)"}}>.</span></h2></div><a className="pr-button" href="https://github.com/HamzaHassanMir" target="_blank" rel="noopener noreferrer">Browse GitHub ↗</a></div>
        <div className="pr-filters">{projectFilters.map((item)=><button type="button" key={item} onClick={()=>setFilter(item)} className={`pr-filter ${filter===item?"active":""}`}>{item}</button>)}</div>
        <div className="pr-project-grid">{visibleProjects.map((project,index)=><article className="pr-project-card" key={project.title}><div className="pr-project-image">{project.image ? <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 800px) 100vw, 50vw" style={{objectFit:"cover",objectPosition:"top"}} onError={(e)=>{(e.currentTarget as HTMLImageElement).style.display="none"}} /> : null}<div className="pr-image-placeholder" style={{display:"none"}}><span>Project {String(index+1).padStart(2,"0")}</span><strong>{project.title}</strong></div></div><div className="pr-project-meta"><span>{project.category}</span><span>0{index+1} / 0{visibleProjects.length}</span></div><h3>{project.title}</h3><p>{project.description}</p><p className="pr-stack">{project.stack}</p>{project.github ? <a className="pr-text-link" href={project.github} target="_blank" rel="noopener noreferrer">View project on GitHub <span>↗</span></a> : <span className="pr-text-link" style={{opacity:.65}}>Client project</span>}</article>)}</div>
      </div></section>

      <section className="pr-stats"><div className="pr-wrap pr-stat-grid"><div className="pr-stat"><strong>{projects.length.toString().padStart(2,"0")}</strong><span>Projects featured</span></div><div className="pr-stat"><strong>{experience.length.toString().padStart(2,"0")}</strong><span>Internships & fellowships</span></div><div className="pr-stat"><strong>{articles.length.toString().padStart(2,"0")}</strong><span>Articles published on Medium</span></div></div></section>

      <section id="background" className="pr-section pr-background"><div className="pr-wrap"><div className="pr-section-head"><p className="pr-mono pr-kicker">04 / Experience</p><h2 className="pr-display">LEARNING BY<br/>BUILDING.</h2></div><div className="pr-timeline">{experience.map((item)=><article className="pr-timeline-item" key={`${item.company}-${item.role}`}><div className="pr-period">{item.period}<br/>{item.type}</div><div><h3>{item.role}</h3><div className="pr-role">{item.company}</div></div><p>{item.bullets.slice(0,2).join(" ")}</p></article>)}<article className="pr-timeline-item"><div className="pr-period">Expected 2028</div><div><h3>BS Computer Science</h3><div className="pr-role">Virtual University of Pakistan</div></div><p>Building a strong foundation in algorithms, databases, and software engineering alongside hands-on projects.</p></article></div>
        <div className="pr-skills-layout" style={{marginTop:75}}><div><p className="pr-mono pr-kicker" style={{marginBottom:15}}>Tools of the trade</p><h2 className="pr-display">MY TECH<br/>STACK.</h2><p style={{fontSize:13,lineHeight:1.9,color:"var(--muted)",maxWidth:340}}>The technologies I use to design, build, connect, and improve web applications.</p></div><div className="pr-skill-list">{Object.entries(skills).map(([group,items])=><div className="pr-skill-group" key={group}><h3>{group}</h3><p>{items.join(" · ")}</p></div>)}</div></div>
        <div style={{marginTop:55,borderTop:"1px solid var(--line)",paddingTop:25}}><p className="pr-mono" style={{marginBottom:18}}>Certifications & continued learning</p><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",gap:12}}>{certifications.slice(0,8).map((cert)=><div key={cert} style={{fontSize:12,lineHeight:1.7,color:"var(--muted)"}}>↗ &nbsp;{cert}</div>)}</div></div>
      </div></section>

      {testimonials.length>0 && <section className="pr-section pr-testimonials"><div className="pr-wrap"><div className="pr-section-head"><p className="pr-mono pr-kicker">05 / Kind words</p><h2 className="pr-display">PEOPLE I’VE<br/>WORKED WITH.</h2></div><div className="pr-quote-grid">{testimonials.map((item)=><article className="pr-quote" key={item.name}><blockquote>“{item.quote}”</blockquote><footer><strong>{item.name}</strong><br/>{item.role}</footer></article>)}</div></div></section>}

      <section id="blog" className="pr-section pr-blog"><div className="pr-wrap"><div className="pr-blog-head"><div><p className="pr-mono pr-kicker" style={{marginBottom:15}}>06 / Latest writing</p><h2 className="pr-display">NOTES FROM<br/>THE BUILD.</h2></div><a className="pr-button" href="https://medium.com/@hamzahassanmir62" target="_blank" rel="noopener noreferrer">Read more on Medium ↗</a></div><div className="pr-article-grid">{articles.map((article)=><article className="pr-article" key={article.url}><div className="pr-article-meta">{article.date} &nbsp;·&nbsp; {article.readTime}<br/>{article.category}</div><h3>{article.title}</h3><p>{article.description}</p><a className="pr-text-link" href={article.url} target="_blank" rel="noopener noreferrer">Read on Medium <span>↗</span></a></article>)}</div></div></section>

      <footer id="contact" className="pr-contact"><div className="pr-wrap"><div className="pr-contact-grid"><h2 className="pr-display">INTERESTED IN<br/>WORKING<br/><span>TOGETHER?</span></h2><div className="pr-contact-copy"><p>I’m open to opportunities, collaborations, and building useful things with good people. Have a project in mind? Let’s talk.</p><div className="pr-actions"><a className="pr-button lime" href="mailto:hamzahassanmir62@gmail.com">Drop me an email ↗</a><a className="pr-button" href="/HamzaHassanMir_Resume.pdf" download>Download CV ↓</a></div></div></div><div className="pr-footer"><span>© {new Date().getFullYear()} Hamza Hassan Mir</span><div className="pr-footer-links"><a href="https://github.com/HamzaHassanMir" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/hamza-hassan-mir/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://medium.com/@hamzahassanmir62" target="_blank" rel="noopener noreferrer">Medium ↗</a><a href="#home">Back to top ↑</a></div></div></div></footer>
    </main>
  );
}
