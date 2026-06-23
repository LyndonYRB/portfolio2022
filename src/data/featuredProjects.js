import manhattanArcadesImg from "../assets/projects/manhattan-arcades-gis.png";
import asylumSeekerDashboardImg from "../assets/projects/asylum-seeker-dashboard.png";
import ntrasemImg from "../assets/projects/ntrasem.png";

const featuredProjects = [
  {
    title: "Manhattan Arcades",
    label: "Full-Stack Geospatial Discovery Platform",
    summary:
      "Full-stack geospatial discovery platform for exploring Manhattan arcade venues with an interactive Leaflet map, PostGIS-backed venue data, GeoJSON endpoints, and distance-based spatial search.",
    techStack: [
      "React",
      "Leaflet",
      "Node.js",
      "Express",
      "PostgreSQL",
      "PostGIS",
      "GeoJSON",
      "JWT",
    ],
    impact:
      "Combines venue browsing, marker popups, responsive UI, authenticated reviews, and PostGIS spatial queries into a practical location-aware discovery experience.",
    demoUrl: "https://manhattan-arcades-app-f2e0f81c5116.herokuapp.com/",
    repoUrl: "https://github.com/LyndonYRB/Manhattan-Arcades",
    image: manhattanArcadesImg,
  },
  {
    title: "NTRASEM",
    label: "AI-Powered SIEM Triage Platform",
    summary:
      "Local-first AI-powered SIEM triage platform that ingests mock firewall, DNS, and SIEM alert data, normalizes events, generates redacted incident briefs, and exports full or safe reports.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Go",
      "Python",
      "FastAPI",
      "Cybersecurity",
      "SIEM",
      "SOC Workflow",
      "Data Redaction",
    ],
    impact:
      "Combines Go-based event ingestion, Python/FastAPI redaction and mock AI analysis, and a Next.js frontend into an end-to-end SOC-style triage workflow inspired by Cyber State Active Duty mission operations.",
    demoUrl: "",
    repoUrl: "",
    image: ntrasemImg,
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
