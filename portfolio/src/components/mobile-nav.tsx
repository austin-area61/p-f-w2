"use client";

import { useState } from "react";
import { Menu, X, Github, Linkedin, Mail, XIcon } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "ABOUT", href: "#about" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "PROJECTS", href: "#projects" },
  { name: "EDUCATION", href: "#education" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-[#112240] rounded-md text-gray-100"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-[#0a192f] z-40 flex flex-col items-center justify-center p-6">
          <h1 className="text-4xl font-bold text-gray-100 mb-2">
            AUST<span className="inline-block -skew-x-12">I</span>N
          </h1>
          <h2 className="text-xl text-gray-400 mb-8">Software Engineer</h2>
          <p className="text-gray-400 mb-8 text-center">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
          <nav className="space-y-6 mb-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center text-gray-400 hover:text-teal-300 transition-colors group"
                onClick={() => setIsOpen(false)}
              >
                <span className="w-12 h-[1px] bg-gray-400 group-hover:w-24 group-hover:bg-teal-300 transition-all duration-300"></span>
                <span className="ml-4">{item.name}</span>
              </Link>
            ))}
          </nav>
          <div className="flex space-x-6 text-gray-400">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300 transition-colors"
            >
              <XIcon size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="hover:text-teal-300 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
