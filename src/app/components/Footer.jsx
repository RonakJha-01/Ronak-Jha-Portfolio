import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  EnvelopeIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-[#070B14]
        text-white
      "
    >

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          py-16
          sm:px-6
          lg:px-10
        "
      >

        {/* Top Grid */}
        <div
          className="
            grid
            gap-14
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {/* LEFT SECTION */}
          <div>

            {/* Logo */}
            <h2
              className="
                bg-linear-to-r
                from-white
                via-cyan-300
                to-blue-500
                bg-clip-text
                text-3xl
                font-black
                text-transparent
              "
            >
              Ronak Jha
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-md
                text-sm
                leading-relaxed
                text-gray-400
                sm:text-base
              "
            >
              Full Stack Developer focused on building modern,
              scalable, and visually premium digital experiences
              using MERN Stack, Next.js, and AI-powered solutions.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/ronak-jha-562315338"
                target="_blank"
                className="
                  group
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/30
                  hover:bg-cyan-500/10
                "
              >
                <Image
                  src="/images/linkedin_icon.png"
                  alt="LinkedIn"
                  width={28}
                  height={28}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </Link>

              {/* GitHub */}
              <Link
                href="https://github.com/RonakJha-01"
                target="_blank"
                className="
                  group
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/30
                  hover:bg-cyan-500/10
                "
              >
                <Image
                  src="/images/github_icon.jpeg"
                  alt="GitHub"
                  width={28}
                  height={28}
                  className="
                    rounded-full
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </Link>
            </div>
          </div>

          {/* CENTER SECTION */}
          <div>

            <h3 className="text-xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">

              {[
                {
                  label: "About",
                  href: "#about",
                },
                {
                  label: "Projects",
                  href: "#projects",
                },
                {
                  label: "Contact",
                  href: "#contact",
                },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="
                      group
                      inline-flex
                      items-center
                      text-gray-400
                      transition-all
                      duration-300
                      hover:text-white
                    "
                  >
                    <span
                      className="
                        mr-2
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-cyan-400
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:opacity-100
                      "
                    />

                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT SECTION */}
          <div>

            <h3 className="text-xl font-bold text-white">
              Contact Me
            </h3>

            <p className="mt-5 text-gray-400">
              Interested in working together or discussing a
              project?
            </p>

            {/* Email Card */}
            <a
              href="mailto:ronakjha8460@gmail.com?subject=Project%20Inquiry"
              className="
                group
                mt-6
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-400/30
                hover:bg-white/10
              "
            >

              {/* Icon */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-linear-to-r
                  from-cyan-500
                  to-blue-600
                "
              >
                <EnvelopeIcon className="h-6 w-6 text-white" />
              </div>

              {/* Text */}
              <div>
                <p className="text-sm text-gray-400">
                  Email Me
                </p>

                <p
                  className="
                    text-sm
                    font-medium
                    text-white
                    sm:text-base
                  "
                >
                  ronakjha8460@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="
            mt-14
            border-t
            border-white/10
            pt-6
          "
        >

          {/* Bottom */}
          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-5
              text-center
              sm:flex-row
            "
          >

            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © 2026 Ronak Jha. All rights reserved.
            </p>

            {/* Back To Top */}
            <Link
              href="#"
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/5
                px-5
                py-3
                text-sm
                text-gray-300
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-400/30
                hover:text-white
              "
            >
              Back to Top

              <ArrowUpIcon
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                "
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;