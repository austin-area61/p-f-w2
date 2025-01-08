"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import SocialIcons from "./social-icons";

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
      {/* Fixed header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f] px-6 py-8">
        <div className="flex flex-col space-y-1">
          <h1 className="text-3xl font-bold text-gray-100">Austin Onyango</h1>
          <h2 className="text-lg text-gray-400">Software Engineer</h2>
          <p className="text-gray-400 text-sm mt-2">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-8 right-6 p-2 text-gray-100"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#0a192f] z-40 pt-36">
          <nav className="px-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-lg text-gray-400 hover:text-teal-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="absolute bottom-8 left-6">
            <SocialIcons />
          </div>
        </div>
      )}
    </div>
  );
}
