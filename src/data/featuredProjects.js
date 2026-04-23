import manhattanArcadesImg from "../assets/projects/manhattan-arcades.png";
import asylumSeekerDashboardImg from "../assets/projects/asylum-seeker-dashboard.png";
import quizmlImg from "../assets/projects/quizml.png";

const featuredProjects = [
  {
    title: "Manhattan Arcades",
    label: "Full-Stack App",
    summary:
      "A polished location-based discovery app for exploring Manhattan arcade venues with venue details, reviews, and transit-aware browsing.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Authentication"],
    impact:
      "Demonstrates responsive frontend execution, backend integration, and product thinking around real-world venue discovery.",
    demoUrl: "https://manhattan-arcades-app-f2e0f81c5116.herokuapp.com/",
    repoUrl: "https://github.com/LyndonYRB/Manhattan-Arcades",
    image: manhattanArcadesImg,
  },
  {
    title: "QuizML.ai",
    label: "AI Learning Platform",
    summary:
      "An AI-powered learning platform that turns uploaded PDFs into adaptive micro-lessons, quizzes, and remediation loops using retrieval, embeddings, and structured generation.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "pgvector",
      "OpenAI",
      "Stripe",
      "Vercel",
    ],
    impact:
      "Combines multi-document ingestion, RAG-based lesson generation, mastery enforcement, and subscription-backed product logic into a full-stack AI learning system.",
    demoUrl:
      "https://quizml-49chxx1n8-lyndonstluce-5610s-projects.vercel.app/",
    repoUrl: "https://github.com/LyndonYRB/quizml",
    image: quizmlImg,
  },
  {
    title: "Asylum Seeker Log App",
    label: "Android App",
    summary:
      "A Kotlin Android app that digitizes real-world occupant tracking and incident logging workflows using Firebase-backed data and structured log management.",
    techStack: [
      "Kotlin",
      "Android Studio",
      "Firebase Realtime Database",
      "Firebase Auth",
      "iText PDF",
    ],
    impact:
      "Transforms a paper-based operational process into a searchable mobile system with authentication, filtering, incident reporting, and PDF export.",
    demoUrl: "https://github.com/LyndonYRB/AsylumSeekerLogApp-Mobile/releases",
    repoUrl: "https://github.com/LyndonYRB/AsylumSeekerLogApp-Mobile",
    primaryCtaLabel: "Download APK",
    secondaryCtaLabel: "GitHub",
    image: asylumSeekerDashboardImg,
  },
];

export default featuredProjects;
