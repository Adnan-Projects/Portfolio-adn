"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { Zap, Globe, Database, Brain } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  workflow: <Zap size={16} className="text-red-500" />,
  web: <Globe size={16} className="text-red-500" />,
  mern: <Database size={16} className="text-red-500" />,
  ai: <Brain size={16} className="text-red-500" />,
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
      </div>

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
            Skills
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight"
        >
          Technologies &{" "}
          <span className="text-red-500">Expertise</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/50 mb-14 max-w-xl"
        >
          A snapshot of the tools, languages, and technologies that define how I
          build software today.
        </motion.p>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + ci * 0.1 }}
              className="group relative bg-[#111] border border-white/8 rounded-xl p-5 hover:border-red-500/25 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5"
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-1">
                {categoryIcons[category.id]}
                <h3 className="text-sm font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              {category.subtitle && (
                <p className="text-xs text-white/30 mb-4 pl-6">
                  {category.subtitle}
                </p>
              )}

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, si) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.2 + ci * 0.1 + si * 0.04,
                    }}
                    className="px-2.5 py-1 text-xs font-medium text-white/65 bg-white/4 border border-white/8 rounded hover:text-white hover:border-red-500/40 hover:bg-red-500/8 transition-all duration-200 cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>

              {/* AI category note */}
              {category.id === "ai" && (
                <p className="text-xs text-white/25 mt-4 border-t border-white/5 pt-3 italic">
                  Current study & learning direction as part of MSc programme.
                </p>
              )}

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-xl ring-1 ring-red-500/0 group-hover:ring-red-500/15 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
