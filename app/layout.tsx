import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hamza Hassan Mir — MERN Stack Developer",
  description: "Portfolio of Hamza Hassan Mir, a results-driven MERN Stack Developer building production-ready full-stack web applications.",
  keywords: ["MERN Stack", "React", "Node.js", "MongoDB", "Full Stack Developer", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
