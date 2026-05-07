"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  ArrowDownTrayIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 pb-12 sm:pb-16 md:pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-full bg-blue-700/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 items-center gap-8 sm:gap-12 md:gap-16 lg:gap-8">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 w-full text-center lg:text-left"
          >
            {/* Small Badge */}
            <div
              className="
                mb-4 sm:mb-5 md:mb-6
                inline-flex
                items-center
                justify-center
                lg:justify-start
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/5
                px-3 sm:px-4
                py-1.5 sm:py-2
                text-xs sm:text-sm
                text-gray-300
                backdrop-blur-xl
                w-auto
                mx-auto lg:mx-0
              "
            >
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-cyan-400 animate-pulse" />
              Let's Build Something Crazy!
            </div>

            {/* Heading */}
            <h1 className="mb-4 sm:mb-5 md:mb-6">
              <span className="block text-gray-300 text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3 md:mb-4">
                Hey, I'm
              </span>

              <span
                className="
                  bg-linear-to-r
                  from-white
                  via-cyan-300
                  to-blue-500
                  bg-clip-text
                  text-transparent
                  text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                  font-black
                  leading-tight
                  block
                "
              >
                Ronak Jha
              </span>

              <div className="mt-3 sm:mt-4 md:mt-5">
                <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                  <TypeAnimation
                    sequence={[
                      "Full Stack Developer",
                      1500,
                      "MERN Stack Developer",
                      1500,
                      "Next.js Developer",
                      1500,
                      "Python Programmer",
                      1500,
                      "AI/ML Enthusiast",
                      1500,
                      "Creative Problem Solver",
                      1500,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </div>
            </h1>

            {/* Description */}
            <p className="mx-auto mb-8 sm:mb-10 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-400 lg:mx-0 px-4 sm:px-0">
              I build modern, scalable, and high-performance web
              applications using MERN Stack, Next.js, and AI-powered
              solutions with exceptional UI/UX experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
              {/* Hire Button */}
              <Link
                href="mailto:ronakjha8460@gmail.com?subject=Project%20Inquiry"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2 sm:gap-3
                  rounded-full
                  bg-linear-to-r
                  from-cyan-500
                  to-blue-600
                  px-6 sm:px-8
                  py-3 sm:py-4
                  text-base sm:text-lg
                  font-semibold
                  text-white
                  shadow-xl
                  shadow-cyan-500/20
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-cyan-500/40
                  w-full sm:w-auto
                  min-w-40
                "
              >
                <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                Hire Me
              </Link>

              {/* Resume Button */}
              <Link
                href="/Ronak_Jha_Resume.pdf"
                download
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2 sm:gap-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  px-6 sm:px-8
                  py-3 sm:py-4
                  text-base sm:text-lg
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white/10
                  hover:scale-105
                  hover:border-cyan-400/30
                  w-full sm:w-auto
                  min-w-40
                "
              >
                <ArrowDownTrayIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                Download Resume
              </Link>
            </div>

           
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 w-full flex justify-center mb-8 lg:mb-0"
          >
            <div className="relative">
              {/* Outer Glow */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-linear-to-r
                  from-cyan-500
                  to-blue-700
                  blur-2xl sm:blur-3xl
                  opacity-30
                  animate-pulse
                "
              />

              {/* Ring */}
              <div
                className="
                  relative
                  flex
                  h-[250px] w-[250px]
                  sm:h-[280px] sm:w-[280px]
                  md:h-80 md:w-[320px]
                  lg:h-[380px] lg:w-[380px]
                  xl:h-[420px] xl:w-[420px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  shadow-2xl
                "
              >
                {/* Inner Ring */}
                <div
                  className="
                    absolute
                    inset-2 sm:inset-3 md:inset-4
                    rounded-full
                    border
                    border-white/10
                  "
                />

                {/* Image */}
                <Image
                  src="/images/protfolio-img.png"
                  alt="Ronak Jha"
                  width={350}
                  height={350}
                  priority
                  className="
                    relative
                    z-10
                    object-contain
                    w-[200px] h-[200px]
                    sm:w-60 sm:h-60
                    md:w-[280px] md:h-[280px]
                    lg:w-[320px] lg:h-80
                    xl:w-[350px] xl:h-[350px]
                    drop-shadow-[0_20px_60px_rgba(0,212,255,0.35)]
                    hover:scale-105
                    transition-transform
                    duration-500
                  "
                />
              </div>

              {/* Floating Cards - Hidden on mobile, shown on larger screens */}
              <div
                className="
                  absolute
                  -left-4 sm:-left-6 md:-left-8
                  top-0 sm:top-5 md:top-10
                  hidden
                  sm:block
                  rounded-xl sm:rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-3 sm:px-4 md:px-5
                  py-2 sm:py-2.5 md:py-3
                  backdrop-blur-xl
                "
              >
                <p className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">
                  Specialized In
                </p>
                <h4 className="font-semibold text-white text-sm sm:text-base whitespace-nowrap">
                  MERN + Next.js
                </h4>
              </div>

              <div
                className="
                  absolute
                  -right-4 sm:-right-6 md:-right-8
                  bottom-0 sm:bottom-5 md:bottom-10
                  hidden
                  sm:block
                  rounded-xl sm:rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-3 sm:px-4 md:px-5
                  py-2 sm:py-2.5 md:py-3
                  backdrop-blur-xl
                "
              >
                <p className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">
                  Passionate About
                </p>
                <h4 className="font-semibold text-white text-sm sm:text-base whitespace-nowrap">
                  AI & UI/UX
                </h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;