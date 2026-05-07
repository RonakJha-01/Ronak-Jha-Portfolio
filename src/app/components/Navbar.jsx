"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            href="/"
            className="group relative text-2xl md:text-3xl font-bold tracking-wide"
          >
            <span className="bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Ronak Jha
            </span>

            {/* Underline Animation */}
            <span className="absolute -bottom-1 left-0 h-1.5 w-0 bg-linear-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-lg px-3 py-2 rounded-full">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="relative px-5 py-2 text-sm font-medium text-gray-300 rounded-full transition-all duration-300 hover:text-white hover:bg-white/10"
                >
                  {link.title}
                </a>
              </li>
            ))}

            {/* CTA Button */}
            
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="md:hidden p-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition"
            aria-label="Toggle menu"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          navbarOpen
            ? "max-h-[400px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-5 mb-5 rounded-2xl border border-white/10 bg-[#111]/95 backdrop-blur-2xl shadow-2xl">
          <ul className="flex flex-col p-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  onClick={() => setNavbarOpen(false)}
                  className="block rounded-xl px-4 py-4 text-gray-300 font-medium transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  {link.title}
                </a>
              </li>
            ))}

            {/* Mobile CTA */}
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;