"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
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
        <div className="fixed inset-0 bg-[#0a192f] z-40 flex items-center justify-center">
          <nav className="space-y-8">
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
        </div>
      )}
    </div>
  );
}
