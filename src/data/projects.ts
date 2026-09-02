export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
  status: "placeholder" | "live" | "wip";
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Project Coming Soon",
    description:
      "Details about one of my upcoming projects will be added here. This card is a placeholder for future work.",
    technologies: ["React", "Next.js", "TypeScript"],
    featured: true,
    status: "placeholder",
  },
  {
    id: "project-2",
    title: "Project Coming Soon",
    description:
      "Details about one of my upcoming projects will be added here. This card is a placeholder for future work.",
    technologies: ["Node.js", "MongoDB", "Express"],
    featured: false,
    status: "placeholder",
  },
  {
    id: "project-3",
    title: "Project Coming Soon",
    description:
      "Details about one of my upcoming projects will be added here. This card is a placeholder for future work.",
    technologies: ["TypeScript", "Tailwind CSS", "React"],
    featured: false,
    status: "placeholder",
  },
];
