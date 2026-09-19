"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

function TerminalVisual() {
  return (
    <div className="relative w-full max-w-sm mx-auto lg:max-w-none">
      {/* Glow behind */}
      <div className="absolute inset-0 -m-8 bg-red-600/10 blur-3xl rounded-full pointer-events-none" />

      {/* Terminal window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-[#111111] border border-white/10 rounded-xl overflow-hidden shadow-2xl"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-[#0d0d0d]">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
          <div className="w-3 h-3 rounded-full bg-green-500/40" />
          <span className="ml-2 text-xs text-white/30 font-mono">~/portfolio</span>
        </div>

        {/* Terminal body */}
        <div className="p-5 font-mono text-sm space-y-2">
          <TerminalLine delay={0.7} prompt="$" command="whoami" />
          <TerminalOutput delay={0.9} text="adnan narimukkil" color="text-white/90" />

          <div className="pt-1" />
          <TerminalLine delay={1.1} prompt="$" command="cat role.txt" />
          <TerminalOutput delay={1.3} text="AI Engineer" color="text-red-400" />
          <TerminalOutput delay={1.4} text="AI Application Engineer" color="text-red-400" />
          <TerminalOutput delay={1.5} text="Software Developer" color="text-red-400" />

          <div className="pt-1" />
          <TerminalLine delay={1.7} prompt="$" command="cat stack.json" />
          <TerminalOutput delay={1.9} text='{ "core": ["Python", "SQL", "FastAPI"],' color="text-white/60" />
          <TerminalOutput delay={2.0} text='  "ai": ["LLMs", "RAG", "PyTorch"] }' color="text-white/60" />

          <div className="pt-1" />
          <TerminalLine delay={2.2} prompt="$" command="git status" />
          <TerminalOutput delay={2.4} text="On branch: building-the-future ✓" color="text-green-400" />

          <div className="pt-2 flex items-center gap-1">
            <span className="text-red-500 font-bold">$</span>
            <motion.span
              className="w-2 h-4 bg-red-500 inline-block ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 2.5 }}
        className="absolute -right-4 top-12 bg-red-600/20 border border-red-500/30 rounded-lg px-3 py-2 backdrop-blur-sm hidden xl:block"
      >
        <p className="text-xs text-red-400 font-semibold">MSc AI & CS</p>
        <p className="text-xs text-white/40">In Progress</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 2.7 }}
        className="absolute -left-4 bottom-12 bg-[#111]/80 border border-white/10 rounded-lg px-3 py-2 backdrop-blur-sm hidden xl:block"
      >
        <p className="text-xs text-white/70 font-semibold">AI Stack</p>
        <p className="text-xs text-white/30">Python + FastAPI</p>
      </motion.div>
    </div>
  );
}

function TerminalLine({ delay, prompt, command }: { delay: number; prompt: string; command: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
      className="flex items-center gap-2"
    >
      <span className="text-red-500 font-bold">{prompt}</span>
      <span className="text-white/80">{command}</span>
    </motion.div>
  );
}

function TerminalOutput({ delay, text, color }: { delay: number; text: string; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
      className={`pl-4 ${color} text-xs leading-relaxed`}
    >
      {text}
    </motion.div>
  );
}

// Subtle grid background component
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Red radial glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-600/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-800/5 rounded-full blur-3xl" />
    </div>
  );
}

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      <GridBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div>
            {/* Tag line */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/30 bg-red-500/5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs text-red-400 font-medium tracking-wide uppercase">
                Available for opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Building Digital{" "}
              <span className="text-red-500">Experiences</span> &{" "}
              Intelligent Software Solutions.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg text-white/60 leading-relaxed mb-4 max-w-xl"
            >
              I&apos;m{" "}
              <span className="text-white font-medium">Adnan Narimukkil</span>,
              an AI Application Engineer focused on building intelligent software solutions, 
              deploying ML models, and creating AI-powered digital experiences.
            </motion.p>

            <motion.p
              custom={0.3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-sm text-white/40 leading-relaxed mb-10 max-w-xl"
            >
              Currently exploring the intersection of software development and
              artificial intelligence while pursuing an{" "}
              <span className="text-white/60">
                MSc in Artificial Intelligence & Computer Science
              </span>
              .
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={0.4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded hover:bg-white/90 transition-all duration-200 text-sm"
              >
                View My Work
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 text-white font-semibold rounded hover:border-red-500/60 hover:text-red-400 transition-all duration-200 text-sm"
              >
                <MessageCircle size={15} />
                Let&apos;s Talk
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              custom={0.5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex gap-8 mt-12 pt-8 border-t border-white/8"
            >
              {[
                { label: "Degree", value: "BCA" },
                { label: "Pursuing", value: "MSc AI" },
                { label: "Focus", value: "AI Systems" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/40 uppercase tracking-wide mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Terminal visual */}
          <div className="flex justify-center lg:justify-end" ref={scrollRef}>
            <TerminalVisual />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/20 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  );
}
