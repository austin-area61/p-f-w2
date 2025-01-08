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
      {/* Fixed header - hidden when menu is open */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-[#0a192f] px-6 py-4 flex justify-between items-center border-b border-gray-800 transition-opacity duration-300 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-100 mb-4">
          AUST<span className="inline-block -skew-x-12">I</span>N
        </h1>
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 text-gray-100 hover:text-teal-300 transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Fullscreen menu */}
      <div
        className={`fixed inset-0 bg-[#0a192f] z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-6 pt-4">
          {/* Close button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-100 hover:text-teal-300 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Header content */}
          <div className="mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-100 mb-4">
              AUST<span className="inline-block -skew-x-12">I</span>N
            </h1>
            <h2 className="text-xl text-gray-400 mb-4">Software Engineer</h2>
            <p className="text-gray-400">
              I build accessible, pixel-perfect digital experiences for the web.
            </p>
          </div>

          {/* Navigation */}
          <nav className="space-y-6 mb-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center text-gray-400 hover:text-teal-300 transition-colors group"
                onClick={() => setIsOpen(false)}
              >
                <span className="w-12 h-[1px] bg-gray-400 group-hover:w-24 group-hover:bg-teal-300 transition-all duration-300"></span>
                <span className="ml-4 text-lg">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="mt-auto pb-8">
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
