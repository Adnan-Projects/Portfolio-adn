"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const journey = [
  { label: "BCA", desc: "Bachelor of Computer Applications" },
  { label: "Software Foundation", desc: "Python, SQL, REST APIs, FastAPI" },
  { label: "Machine Learning", desc: "Scikit-learn, Model evaluation" },
  { label: "MSc AI & CS", desc: "Deep Learning, PyTorch, Embeddings" },
  { label: "AI Application Engineer", desc: "GenAI, LLMs, RAG, Cloud Deploy", current: true },
];

function useReveal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, inView };
}

export default function About() {
  const { ref, inView } = useReveal();

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

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
            About
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight"
            >
              AI Application{" "}
              <span className="text-red-500">Engineer</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4 text-white/60 leading-relaxed"
            >
              <p>
                I build end-to-end AI applications, taking ideas from concept to deployment. 
                My foundation in software engineering—combined with Python, FastAPI, and PostgreSQL—enables me 
                to create robust backend systems that power intelligent features.
              </p>
              <p>
                Beyond basic prompting, I specialize in implementing real ML systems, integrating 
                LLM APIs, building RAG pipelines with vector databases, and orchestrating AI agents 
                to solve complex problems.
              </p>
              <p>
                I&apos;m currently pursuing an{" "}
                <span className="text-white/80 font-medium">
                  MSc in Artificial Intelligence & Computer Science
                </span>
                , expanding my knowledge into machine learning and intelligent
                software systems — bringing a technical depth to how I approach
                software.
              </p>
            </motion.div>

            {/* Role tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {[
                "AI Engineer",
                "Backend Developer",
                "Machine Learning",
                "LLM/RAG Integration",
              ].map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 text-xs font-medium text-white/70 border border-white/10 rounded-full bg-white/3"
                >
                  {role}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Journey timeline */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-6"
            >
              My Journey
            </motion.p>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-white/8" />

              <div className="space-y-0">
                {journey.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                    className="relative flex items-start gap-6 pb-8 last:pb-0 group"
                  >
                    {/* Node */}
                    <div
                      className={`relative z-10 w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        step.current
                          ? "bg-red-600 border-red-500 shadow-lg shadow-red-500/30"
                          : "bg-[#141414] border-white/15 group-hover:border-red-500/40"
                      }`}
                    >
                      <span
                        className={`text-xs font-bold ${
                          step.current ? "text-white" : "text-white/40"
                        }`}
                      >
                        {i + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <div className="flex items-center gap-2">
                        <p
                          className={`font-semibold text-sm ${
                            step.current ? "text-red-400" : "text-white/80"
                          }`}
                        >
                          {step.label}
                        </p>
                        {step.current && (
                          <span className="text-xs px-2 py-0.5 bg-red-500/15 text-red-400 border border-red-500/30 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-white/35 mt-0.5">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
