"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TimelineStep {
  year?: string;
  title: string;
  subtitle: string;
  description: string;
  current?: boolean;
}

const timelineSteps: TimelineStep[] = [
  {
    title: "BCA",
    subtitle: "Bachelor of Computer Applications",
    description:
      "Completed a Bachelor's degree in Computer Applications, building a solid foundation in computer science fundamentals and software development.",
  },
  {
    title: "MERN Stack Development",
    subtitle: "Full-Stack Web Development",
    description:
      "Built experience with full-stack web development using MongoDB, Express.js, React, and Node.js — developing a strong understanding of the modern web ecosystem.",
  },
  {
    title: "Software & Web Development",
    subtitle: "Applications, Solutions & Design",
    description:
      "Focused on building web applications, software solutions and designing modern digital interfaces. Developed a workflow that combines clean design with functional software.",
  },
  {
    title: "MSc AI & Computer Science",
    subtitle: "Postgraduate Studies",
    description:
      "Currently pursuing a Master of Science in Artificial Intelligence & Computer Science, expanding into the theoretical and practical aspects of machine learning and intelligent systems.",
    current: true,
  },
  {
    title: "AI + Software Development",
    subtitle: "The Next Chapter",
    description:
      "Exploring modern AI-assisted development workflows and intelligent software systems. Using tools like Antigravity and Claude to build more effectively and experiment with AI-powered applications.",
    current: true,
  },
];

function TimelineItem({ step, index }: { step: TimelineStep; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const isLast = index === timelineSteps.length - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-6"
    >
      {/* Timeline stem */}
      <div className="flex flex-col items-center">
        {/* Node */}
        <div
          className={`relative w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300 z-10 ${
            step.current
              ? "bg-red-600 border-red-500 shadow-lg shadow-red-500/40"
              : "bg-[#141414] border-white/15"
          }`}
        >
          {step.current ? (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2.5 h-2.5 rounded-full bg-white"
            />
          ) : (
            <div className="w-2 h-2 rounded-full bg-white/30" />
          )}
          {/* Pulse ring for current */}
          {step.current && (
            <motion.div
              animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-red-500/30"
            />
          )}
        </div>
        {/* Connecting line */}
        {!isLast && (
          <div className="w-px flex-1 bg-white/8 mt-2 mb-2 min-h-8" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-10 flex-1 ${isLast ? "pb-0" : ""}`}>
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3
            className={`font-semibold text-base ${
              step.current ? "text-white" : "text-white/75"
            }`}
          >
            {step.title}
          </h3>
          {step.current && (
            <span className="px-2 py-0.5 text-xs font-semibold bg-red-600/20 text-red-400 border border-red-500/30 rounded-full">
              Now
            </span>
          )}
        </div>
        <p
          className={`text-xs font-medium mb-2 ${
            step.current ? "text-red-400" : "text-white/35"
          }`}
        >
          {step.subtitle}
        </p>
        <p className="text-sm text-white/40 leading-relaxed max-w-lg">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Journey() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="journey" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-red-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Header */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-6 h-px bg-red-500" />
              <span className="text-xs font-semibold text-red-500 uppercase tracking-widest">
                Journey
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight"
            >
              My{" "}
              <span className="text-red-500">Path</span> So Far
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/50 leading-relaxed"
            >
              A developer&apos;s journey is never linear. Here&apos;s where I&apos;ve been and
              where I&apos;m headed — from foundational education to AI-assisted
              software development.
            </motion.p>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 h-px bg-gradient-to-r from-red-500/60 to-transparent origin-left max-w-xs"
            />
          </div>

          {/* Right: Timeline */}
          <div>
            {timelineSteps.map((step, i) => (
              <TimelineItem key={step.title + i} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
