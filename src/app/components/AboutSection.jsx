"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  AcademicCapIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: <CodeBracketIcon className="h-5 w-5" />,
    content: {
      Frontend: [
        "HTML",
        "CSS & Tailwind CSS",
        "JavaScript",
        "React.js",
        "Next.js",
      ],
      Backend: ["Node.js", "Express.js"],
      Database: ["MongoDB", "MySQL", "PostgreSQL"],
      Tools: ["Git", "GitHub", "Postman"],
      Languages: ["JavaScript", "Python"],
      "AI & Data": [
        "Artificial Intelligence",
        "Machine Learning",
        "Python for Data Science",
      ],
      Additional: ["ROS (Robot Operating System)"],
    },
  },

  {
    title: "Education",
    id: "education",
    icon: <AcademicCapIcon className="h-5 w-5" />,
    content: [
      {
        title: "10th Standard",
        subtitle: "GSEB • 2021",
        extra: "Scored 89%",
      },
      {
        title: "12th Standard",
        subtitle: "GSEB • 2023",
        extra: "Scored 74%",
      },
      {
        title: "Computer Science & Engineering",
        subtitle: "GTU • Expected 2027",
        extra: "Current CGPA: 8.0",
      },
    ],
  },

  {
    title: "Projects",
    id: "projects",
    icon: <RocketLaunchIcon className="h-5 w-5" />,
    content: {
      "Major Projects": [
        "LR Web Application using MERN Stack",
        "AI SaaS App using PERN Stack",
        "Food Delivery Website using MERN Stack",
        "Admin Panel for Food Delivery Platform",
        "Portfolio Website using Next.js",
      ],

      "Minor Projects": [
        "Tracking System using React.js",
        "Text to QR Generator",
        "Text to Speech App",
        "Weather App using JavaScript",
        "XO Game using JavaScript",
      ],
    },
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const activeTab = TAB_DATA.find((item) => item.id === tab);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-4xl
                  bg-linear-to-r
                  from-cyan-500/20
                  to-blue-600/20
                  blur-3xl
                "
              />

              {/* Main Card */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-4xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  p-3
                  shadow-2xl
                "
              >
                <Image
                  src="/images/about-img.png"
                  alt="About Ronak Jha"
                  width={520}
                  height={520}
                  className="
                    rounded-3xl
                    object-cover
                    w-full
                    max-w-[320px]
                    sm:max-w-[420px]
                    lg:max-w-[500px]
                  "
                />
              </div>

              {/* Floating Badge */}
              <div
                className="
                  absolute
                  -bottom-5
                  left-1/2
                  -translate-x-1/2
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#111]/80
                  backdrop-blur-xl
                  px-5
                  py-3
                  shadow-xl
                "
              >
                <p className="text-center text-sm text-gray-400">
                  Passionate About
                </p>

                <h4
                  className="
                    bg-linear-to-r
                    from-cyan-400
                    to-blue-500
                    bg-clip-text
                    text-center
                    text-lg
                    font-bold
                    text-transparent
                  "
                >
                  Modern Web + AI
                </h4>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {/* Section Tag */}
            <div
              className="
                mb-5
                inline-flex
                items-center
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-sm
                text-gray-300
                backdrop-blur-xl
              "
            >
              About Me
            </div>

            {/* Heading */}
            <h2 className="mb-6 text-4xl font-black text-white sm:text-5xl">
              Creating Modern &
              <span
                className="
                  bg-linear-to-r
                  from-cyan-400
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                {" "}
                Scalable Digital Experiences
              </span>
            </h2>

            {/* Description */}
            <p className="text-base leading-relaxed text-gray-400 sm:text-lg">
              I’m a Full Stack Developer passionate about building
              high-performance web applications using MERN Stack,
              Next.js, and AI-powered solutions. I focus on creating
              clean architectures, smooth user experiences, and
              visually premium interfaces that feel modern on every
              device.
            </p>

            {/* Tabs */}
            <div className="mt-10 flex flex-wrap gap-3">

              {TAB_DATA.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`
                    group
                    relative
                    flex
                    items-center
                    gap-2
                    overflow-hidden
                    rounded-full
                    border
                    px-5
                    py-3
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    ${
                      tab === item.id
                        ? "border-cyan-400/30 bg-white/10 text-white shadow-lg shadow-cyan-500/10"
                        : "border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                    }
                  `}
                >

                  {/* Active Glow */}
                  {tab === item.id && (
                    <div
                      className="
                        absolute
                        inset-0
                        bg-linear-to-r
                        from-cyan-500/10
                        to-blue-500/10
                      "
                    />
                  )}

                  <span className="relative z-10">
                    {item.icon}
                  </span>

                  <span className="relative z-10">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="
                  mt-10
                  rounded-4xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-xl
                "
              >

                {/* Skills */}
                {tab === "skills" && (
                  <div className="space-y-6">

                    {Object.entries(activeTab.content).map(
                      ([category, items], index) => (
                        <div key={index}>
                          <h3
                            className="
                              mb-3
                              text-lg
                              font-semibold
                              text-white
                            "
                          >
                            {category}
                          </h3>

                          <div className="flex flex-wrap gap-3">
                            {items.map((item, idx) => (
                              <span
                                key={idx}
                                className="
                                  rounded-full
                                  border
                                  border-white/10
                                  bg-[#111]
                                  px-4
                                  py-2
                                  text-sm
                                  text-gray-300
                                  transition-all
                                  duration-300
                                  hover:border-cyan-400/30
                                  hover:text-white
                                  hover:scale-105
                                "
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}

                {/* Education */}
                {tab === "education" && (
                  <div className="space-y-5">

                    {activeTab.content.map((item, index) => (
                      <div
                        key={index}
                        className="
                          rounded-2xl
                          border
                          border-white/10
                          bg-[#111]/60
                          p-5
                        "
                      >
                        <h3 className="text-lg font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-gray-400">
                          {item.subtitle}
                        </p>

                        <p className="mt-2 text-cyan-400">
                          {item.extra}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Projects */}
                {tab === "projects" && (
                  <div className="space-y-8">

                    {Object.entries(activeTab.content).map(
                      ([category, items], index) => (
                        <div key={index}>
                          <h3
                            className="
                              mb-4
                              text-lg
                              font-semibold
                              text-white
                            "
                          >
                            {category}
                          </h3>

                          <div className="grid gap-4 sm:grid-cols-2">

                            {items.map((item, idx) => (
                              <div
                                key={idx}
                                className="
                                  rounded-2xl
                                  border
                                  border-white/10
                                  bg-[#111]/70
                                  p-4
                                  text-gray-300
                                  transition-all
                                  duration-300
                                  hover:-translate-y-1
                                  hover:border-cyan-400/30
                                  hover:bg-[#151515]
                                "
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;