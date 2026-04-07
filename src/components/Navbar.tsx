"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-6xl rounded-2xl border border-cream bg-bg/80 backdrop-blur-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-heading text-xl font-bold tracking-tight text-text transition-colors duration-200 hover:text-purple"
        >
          DM<span className="text-rose">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm font-medium text-text-muted transition-colors duration-200 hover:text-rose"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/dominik_modrzejewska_cv.pdf"
              download
              className="inline-flex items-center rounded-full bg-purple px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-purple-dark"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="cursor-pointer rounded-lg p-2 text-text-muted transition-colors duration-200 hover:text-rose md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-cream px-6 pb-4 pt-2 md:hidden"
        >
          <ul className="flex flex-col gap-3" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 text-sm font-medium text-text-muted transition-colors duration-200 hover:text-rose"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/dominik_modrzejewska_cv.pdf"
                download
                className="mt-2 inline-flex items-center rounded-full bg-purple px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-purple-dark"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
