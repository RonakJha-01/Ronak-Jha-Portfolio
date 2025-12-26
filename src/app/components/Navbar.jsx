"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-90">
      <div className="flex items-center justify-between px-4 py-5 md:px-12">

        {/* Logo */}
        <Link href="/" className="text-2xl md:text-4xl text-white font-semibold">
          Ronak Jha
        </Link>

        {/* Hamburger (ONLY mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            aria-label="Toggle menu"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Desktop menu (HIDDEN on mobile) */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu (ONLY when hamburger is clicked) */}
      {navbarOpen && (
        <MenuOverlay
          Links={navLinks}
          closeMenu={() => setNavbarOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
