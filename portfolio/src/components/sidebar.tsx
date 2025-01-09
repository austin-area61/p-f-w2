"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "ABOUT", href: "#about" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "PROJECTS", href: "#projects" },
  { name: "EDUCATION", href: "#education" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="fixed left-0 top-0 h-screen w-96 bg-[#0a192f] p-12 lg:flex hidden flex-col justify-center">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-gray-100 mb-2">
          Austin Onyango
        </h1>
        <h2 className="text-xl text-gray-400 mb-8">Software Engineer</h2>
        <p className="text-gray-400 mb-12">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>

        <nav className="space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center text-gray-400 hover:text-teal-300 transition-colors group"
            >
              <span
                className={cn(
                  "h-[1px] bg-gray-400 group-hover:bg-teal-300 transition-all duration-300",
                  activeSection === item.href.slice(1) ? "w-24" : "w-12",
                  "group-hover:w-24"
                )}
              ></span>
              <span className="ml-4">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex space-x-6 text-gray-400">
        <a
          href="https://github.com/austin-area61"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-300 transition-colors"
          aria-label="GitHub Profile"
        >
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com/in/austin-onyango-area61/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-300 transition-colors"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://x.com/axwellaustin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-300 transition-colors"
          aria-label="Twitter Profile"
        >
          <Twitter size={24} />
        </a>
        <a
          href="mailto:austinonyango.area61@gmail.com"
          className="hover:text-teal-300 transition-colors"
          aria-label="Email Me"
        >
          <Mail size={24} />
        </a>
      </div>
    </aside>
  );
}
