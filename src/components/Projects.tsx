"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { ExternalLink, Clock } from "lucide-react";

function GithubIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ProjectCard({ project, index, featured }: { project: Project; index: number; featured?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative bg-[#111] border border-white/8 rounded-xl overflow-hidden hover:border-red-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5 flex flex-col ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Image / preview area */}
      <div
        className={`relative overflow-hidden bg-[#0d0d0d] border-b border-white/5 ${
          featured ? "h-56 lg:h-64" : "h-44"
        }`}
      >
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-white/4 border border-white/8 flex items-center justify-center mx-auto mb-3">
                <Clock size={20} className="text-white/20" />
              </div>
              <p className="text-xs text-white/20 font-medium">Preview coming soon</p>
            </div>
          </div>
        )}

        {/* Status badge */}
        {project.status === "placeholder" && (
          <div className="absolute top-3 left-3 px-2 py-1 text-xs font-medium bg-[#111]/90 border border-white/10 rounded text-white/40 backdrop-blur-sm">
            Placeholder
          </div>
        )}
        {featured && (
          <div className="absolute top-3 right-3 px-2 py-1 text-xs font-semibold bg-red-600/90 text-white rounded backdrop-blur-sm">
            Featured
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-white text-base mb-2 group-hover:text-red-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs text-white/40 bg-white/4 border border-white/8 rounded font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 mt-auto">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-red-600 text-white rounded hover:bg-red-500 transition-colors duration-200"
            >
              <ExternalLink size={12} />
              Live Demo
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white/60 border border-white/10 rounded hover:text-white hover:border-white/20 transition-colors duration-200"
            >
              <GithubIcon />
              GitHub
            </a>
          ) : null}
          {project.caseStudyUrl ? (
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white/60 border border-white/10 rounded hover:text-white hover:border-white/20 transition-colors duration-200"
            >
              Case Study
            </a>
          ) : null}
        </div>
      </div>

      {/* Hover border ring */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-red-500/0 group-hover:ring-red-500/20 transition-all duration-300 pointer-events-none" />
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-red-600/5 rounded-full blur-3xl" />
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
            Projects
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight"
        >
          Work &{" "}
          <span className="text-red-500">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/50 mb-14 max-w-xl"
        >
          Projects will be showcased here as they are completed and ready to
          share. Check back soon.
        </motion.p>

        {/* Featured projects */}
        {featuredProjects.length > 0 && (
          <div className="grid lg:grid-cols-2 gap-5 mb-5">
            {featuredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                featured={project.featured}
              />
            ))}
          </div>
        )}

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={featuredProjects.length + i}
              />
            ))}
          </div>
        )}

        {/* CTA to add more */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-white/25 italic">
            More projects coming soon. This section is designed to grow with
            your portfolio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
