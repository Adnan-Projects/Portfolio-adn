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
    id: "core-backend",
    title: "Core & Backend",
    subtitle: "Software foundation",
    skills: [
      { name: "Python" },
      { name: "SQL & PostgreSQL" },
      { name: "FastAPI" },
      { name: "REST APIs" },
    ],
  },
  {
    id: "genai",
    title: "Generative AI & LLMs",
    subtitle: "RAG, Agents & Integration",
    skills: [
      { name: "LLM APIs (OpenAI/Anthropic/Gemini)" },
      { name: "RAG & Vector DBs (pgvector/Qdrant)" },
      { name: "LangChain & LlamaIndex" },
      { name: "LangGraph (Agents)" },
    ],
  },
  {
    id: "ml-dl",
    title: "Machine Learning",
    subtitle: "Models & Deep Learning",
    skills: [
      { name: "Scikit-learn" },
      { name: "PyTorch" },
      { name: "Neural Networks & Transformers" },
      { name: "Embeddings" },
    ],
  },
  {
    id: "infrastructure",
    title: "Deployment & DevOps",
    subtitle: "Cloud & Containers",
    skills: [
      { name: "Docker" },
      { name: "AWS / Azure / GCP" },
      { name: "GitHub Actions (CI/CD)" },
      { name: "Git & Linux" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    subtitle: "User interfaces",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
  },
];
