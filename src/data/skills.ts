export interface SkillCategory {
  id: string;
  title: string;
  subtitle?: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "workflow",
    title: "Current Workflow",
    subtitle: "How I build today",
    skills: [
      { name: "Antigravity" },
      { name: "Claude" },
      { name: "AI-assisted Development" },
      { name: "Vibe Coding" },
    ],
  },
  {
    id: "web",
    title: "Web Development",
    subtitle: "Frontend & full-stack technologies",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "mern",
    title: "Previous Stack",
    subtitle: "Full-stack MERN experience",
    skills: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React" },
      { name: "Node.js" },
    ],
  },
  {
    id: "ai",
    title: "AI & Computer Science",
    subtitle: "Current study & learning direction",
    skills: [
      { name: "Artificial Intelligence" },
      { name: "Machine Learning" },
      { name: "Computer Science" },
      { name: "AI-powered Applications" },
      { name: "Intelligent Software Systems" },
    ],
  },
];
