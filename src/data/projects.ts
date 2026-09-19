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
    id: "pocketai",
    title: "PocketAI — Offline AI Expense Tracker",
    description:
      "A privacy-focused Android expense management application that automatically detects and categorizes financial transactions using on-device AI from SMS.",
    longDescription:
      "PocketAI is a privacy-focused Android expense management application that automatically detects and categorizes financial transactions using on-device AI, while keeping financial data stored locally on the user's device. The architecture separates deterministic financial-data extraction from AI classification.",
    image: "/images/pocketai.png",
    technologies: ["Kotlin", "Jetpack Compose", "On-Device AI", "SQLite"],
    githubUrl: "https://github.com/Adnan-Projects/pocketai",
    featured: true,
    status: "live",
  },
  {
    id: "project-2",
    title: "Project Coming Soon",
    description:
      "Details about one of my upcoming projects will be added here. This card is a placeholder for future work.",
    technologies: ["PyTorch", "LLMs", "RAG", "pgvector"],
    featured: false,
    status: "placeholder",
  },
  {
    id: "project-3",
    title: "Project Coming Soon",
    description:
      "Details about one of my upcoming projects will be added here. This card is a placeholder for future work.",
    technologies: ["LangChain", "Agents", "Docker", "AWS"],
    featured: false,
    status: "placeholder",
  },
];
