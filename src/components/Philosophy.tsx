"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Cpu, Palette, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Monitor size={22} className="text-red-500" />,
    title: "Web Applications",
    description:
      "Modern, responsive and scalable web applications built with current best practices and frameworks.",
  },
  {
    icon: <Cpu size={22} className="text-red-500" />,
    title: "Software Solutions",
    description:
      "Practical software designed around real-world problems and workflows, with a focus on usability.",
  },
  {
    icon: <Palette size={22} className="text-red-500" />,
    title: "Web Design",
    description:
      "Clean, modern and user-focused digital interfaces that balance aesthetics with functionality.",
  },
  {
    icon: <Sparkles size={22} className="text-red-500" />,
    title: "AI-Powered Development",
    description:
      "Exploring and building software experiences using modern AI technologies and intelligent workflows.",
  },
];

export default function Philosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="philosophy" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-6 h-px bg-red-500" />
          <span className="text-xs font-semibold text-red-500 uppercase tracking-widest">
            What I Do
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight"
        >
          Development{" "}
          <span className="text-red-500">Philosophy</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/50 mb-14 max-w-xl"
        >
          The areas I focus on and the type of work I bring to every project.
        </motion.p>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group relative bg-[#111] border border-white/8 rounded-xl p-6 hover:border-red-500/25 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5"
            >
              {/* Icon container */}
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/15 flex items-center justify-center mb-4 group-hover:bg-red-500/15 transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="font-semibold text-white text-sm mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-red-500/0 via-red-500/0 to-red-500/0 group-hover:via-red-500/40 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
