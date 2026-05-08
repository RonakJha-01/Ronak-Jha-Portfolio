"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import {
  ArrowDownTrayIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeStat, setActiveStat] = useState(null);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);





  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-cyan-500/20 mix-blend-difference pointer-events-none z-50 hidden lg:block"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      />

      <section 
        className="relative overflow-hidden min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 pb-12 sm:pb-16 md:pb-20"
        onMouseMove={handleMouseMove}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-900 to-black" />
          
          {/* Animated Gradient Orbs */}
          <motion.div
            animate={{
              x: [0, 100, 0, -100, 0],
              y: [0, 50, 0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-10 h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 rounded-full bg-cyan-500/20 blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0, 80, 0],
              y: [0, -40, 0, 40, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-0 right-0 h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-full bg-blue-700/20 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl"
          />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[40px_40px] opacity-10" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 items-center gap-8 sm:gap-12 md:gap-16 lg:gap-8">
            
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 w-full text-center lg:text-left"
            >
              {/* Animated Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mb-4 sm:mb-5 md:mb-6 inline-flex items-center justify-center lg:justify-start gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-300 backdrop-blur-xl w-auto mx-auto lg:mx-0 cursor-pointer group"
              >
                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Let's Build Something Crazy!</span>
                <SparklesIcon className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
              </motion.div>

              {/* Heading */}
              <h1 className="mb-4 sm:mb-5 md:mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="block text-gray-300 text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3 md:mb-4"
                >
                  Hey, I'm
                </motion.span>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="relative inline-block"
                >
                  <span className="bg-linear-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight block relative">
                    Ronak Jha
                  </span>
                  {/* Glitch effect layers */}
                  <span className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent opacity-0 animate-glitch-1">
                    Ronak Jha
                  </span>
                  <span className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent opacity-0 animate-glitch-2">
                    Ronak Jha
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-3 sm:mt-4 md:mt-5"
                >
                  <div className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-500/10 to-blue-500/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    <CodeBracketIcon className="h-5 w-5 text-cyan-400" />
                    <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                      <TypeAnimation
                        sequence={[
                          "Full Stack Developer",
                          1500,
                          "MERN Stack Expert",
                          1500,
                          "Next.js Specialist",
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
                </motion.div>
              </h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mx-auto mb-8 sm:mb-10 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-400 lg:mx-0 px-4 sm:px-0"
              >
                I build modern, scalable, and high-performance web
                applications using <span className="text-cyan-400 font-semibold">MERN Stack</span>, <span className="text-blue-400 font-semibold">Next.js</span>, and <span className="text-purple-400 font-semibold">AI-powered solutions</span> with exceptional UI/UX experiences.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="mailto:ronakjha8460@gmail.com?subject=Project%20Inquiry"
                    className="group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/40 w-full sm:w-auto min-w-40 relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-linear-to-r from-cyan-600 to-blue-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
                    <span className="relative z-10">Hire Me</span>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/Ronak_Jha_Resume.pdf"
                    download
                    className="group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:border-cyan-400/30 w-full sm:w-auto min-w-40 relative overflow-hidden"
                  >
                    <ArrowDownTrayIcon className="h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce" />
                    Download Resume
                  </Link>
                </motion.div>
              </motion.div>

              

              
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="lg:col-span-5 w-full flex justify-center mb-8 lg:mb-0"
            >
              <div className="relative">
                {/* Rotating Border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 rounded-full bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-30 blur-2xl"
                />
                
                {/* Outer Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-500 to-blue-700 blur-2xl sm:blur-3xl opacity-30"
                />

                {/* Ring */}
                <div className="relative flex h-62.5 w-62.5 sm:h-70 sm:w-70 md:h-80 md:w-[320px] lg:h-95 lg:w-95 xl:h-105 xl:w-105 items-center justify-center rounded-full border-2 border-white/10 bg-linear-to-br from-white/5 to-transparent backdrop-blur-2xl shadow-2xl overflow-hidden">
                  
                  {/* Animated Gradient Border */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-500 border-r-blue-500"
                  />

                  {/* Inner Rings */}
                  <div className="absolute inset-4 rounded-full border border-white/10" />
                  <div className="absolute inset-8 rounded-full border border-white/5" />
                  
                  {/* Particle Effects */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      style={{
                        top: "50%",
                        left: "50%",
                        transformOrigin: "0 0",
                        transform: `rotate(${i * 30}deg) translate(150px, 0)`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 2,
                      }}
                    />
                  ))}

                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <Image
                      src="/images/protfolio-img.png"
                      alt="Ronak Jha"
                      width={350}
                      height={350}
                      priority
                      className="object-contain w-50 h-50 sm:w-60 sm:h-60 md:w-70 md:h-70 lg:w-[320px] lg:h-80 xl:w-87.5 xl:h-87.5 drop-shadow-[0_20px_60px_rgba(0,212,255,0.35)] transition-all duration-500 rounded-full"
                    />
                  </motion.div>
                </div>

                {/* Animated Floating Cards */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -left-4 sm:-left-6 md:-left-8 top-0 sm:top-5 md:top-10 hidden sm:block rounded-xl sm:rounded-2xl border border-white/10 bg-linear-to-br from-white/10 to-transparent px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 backdrop-blur-xl shadow-lg transition-all duration-300"
                >
                  <p className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">
                    Specialized In
                  </p>
                  <h4 className="font-semibold text-white text-sm sm:text-base whitespace-nowrap bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text">
                    MERN + Next.js
                  </h4>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute -right-4 sm:-right-6 md:-right-8 bottom-0 sm:bottom-5 md:bottom-10 hidden sm:block rounded-xl sm:rounded-2xl border border-white/10 bg-linear-to-br from-white/10 to-transparent px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 backdrop-blur-xl shadow-lg"
                >
                  <p className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">
                    Passionate About
                  </p>
                  <h4 className="font-semibold text-white text-sm sm:text-base whitespace-nowrap bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text">
                    AI & UI/UX
                  </h4>
                </motion.div>

                {/* Floating Icon Decoration */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -bottom-8 -left-8 w-12 h-12 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 blur-md opacity-50"
                />
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-linear-to-r from-purple-500 to-pink-500 blur-md opacity-50"
                />
              </div>
            </motion.div>
          </div>
        </div>

        
      </section>

      {/* Add custom animations to global CSS */}
      <style jsx global>{`
        @keyframes glitch-1 {
          0%, 100% { opacity: 0; transform: translate(0); }
          20% { opacity: 1; transform: translate(-2px, 2px); }
          40% { opacity: 0; transform: translate(0); }
        }
        @keyframes glitch-2 {
          0%, 100% { opacity: 0; transform: translate(0); }
          20% { opacity: 1; transform: translate(2px, -2px); }
          40% { opacity: 0; transform: translate(0); }
        }
        .animate-glitch-1 {
          animation: glitch-1 3s infinite;
        }
        .animate-glitch-2 {
          animation: glitch-2 3s infinite;
        }
      `}</style>
    </>
  );
};

export default HeroSection;