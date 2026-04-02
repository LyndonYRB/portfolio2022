import "./App.css";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "Python",
  "Flask",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "REST APIs",
  "CI/CD",
];

const featuredProjects = [
  {
    name: "Crypto Dashboard",
    summary:
      "A responsive dashboard for live market prices and trend insights with fast filtering and clean data visualizations.",
    stack: ["React", "Charting", "API Integration"],
    demo: "https://lyndons-crypto-dashboard.netlify.app/",
    code: "https://github.com/LyndonYRB/crypto-dashboard",
  },
  {
    name: "Flask Task Manager",
    summary:
      "A productivity app for creating, editing, and tracking tasks with persistent storage and clean CRUD workflows.",
    stack: ["Python", "Flask", "SQLAlchemy"],
    demo: "https://flask--manager-app.herokuapp.com/",
    code: "https://github.com/LyndonYRB/basic-blog-APP",
  },
  {
    name: "Random Country Generator",
    summary:
      "A lightweight tool that surfaces country facts from an API, focused on quick interaction and polished UI states.",
    stack: ["React", "REST API", "CSS"],
    demo: "https://lyndons-rando-country-generator.netlify.app/",
    code: "https://github.com/LyndonYRB/react-api-project",
  },
];

const experience = [
  {
    title: "Software Engineer (Career Transition)",
    period: "2022 — Present",
    details:
      "Building full-stack projects, sharpening system design fundamentals, and shipping production-ready portfolio work.",
  },
  {
    title: "U.S. Army Veteran",
    period: "12 years",
    details:
      "Led mission-critical operations in planning, maintenance, and telecommunications with a strong focus on reliability.",
  },
];

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          Lyndon St. Luce
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <p className="kicker">Software Engineer Portfolio</p>
          <h1>Building dependable products with clarity, speed, and purpose.</h1>
          <p className="lead">
            I am a software engineer with a military leadership background. I
            design and ship practical web applications with clean UX and solid
            engineering fundamentals.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">
              View Projects
            </a>
            <a className="btn ghost" href="https://github.com/LyndonYRB">
              GitHub
            </a>
          </div>
        </section>

        <section className="panel" id="about">
          <h2>About Me</h2>
          <p>
            My background in military operations shaped how I approach software:
            communicate clearly, solve problems under pressure, and deliver
            dependable outcomes. I enjoy turning ideas into polished products
            and collaborating with teams that value ownership and growth.
          </p>
          <div className="skill-grid">
            {skills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="panel" id="projects">
          <div className="section-head">
            <h2>Featured Projects</h2>
            <p>Recent work focused on full-stack web development.</p>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article key={project.name} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="stack-row">
                  {project.stack.map((item) => (
                    <span key={item} className="stack-item">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="card-actions">
                  <a href={project.demo}>Live Demo</a>
                  <a href={project.code}>Source Code</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel" id="experience">
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((entry) => (
              <article key={entry.title} className="timeline-item">
                <div>
                  <h3>{entry.title}</h3>
                  <p>{entry.details}</p>
                </div>
                <span>{entry.period}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="panel cta" id="contact">
          <h2>Let&apos;s Build Something Great</h2>
          <p>
            Open to software engineering opportunities where I can contribute to
            impactful products and keep growing with a strong team.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="mailto:lyndon@example.com">
              Email Me
            </a>
            <a
              className="btn ghost"
              href="https://www.linkedin.com/in/lyndon-stluce/"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
