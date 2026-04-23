import { Col, Container, Row } from "react-bootstrap";

const skillGroups = [
  {
    title: "Frontend",
    summary: "Production React interfaces with typed Next.js workflows.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend & APIs",
    summary: "Service layers for full-stack products and mobile workflows.",
    skills: ["Node.js", "Express", "REST APIs", "Firebase"],
  },
  {
    title: "Data & Platforms",
    summary: "Relational data, auth-backed app platforms, and vector search.",
    skills: ["PostgreSQL", "Supabase", "pgvector"],
  },
  {
    title: "AI & Product Systems",
    summary: "AI learning flows, retrieval pipelines, payments, and deployment.",
    skills: ["OpenAI", "RAG", "Embeddings", "Stripe", "Vercel"],
  },
  {
    title: "Mobile",
    summary: "Native Android development for structured field workflows.",
    skills: ["Kotlin", "Android Studio"],
  },
];

export default function Skills() {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <span className="skill-kicker">Technical Focus</span>
              <h2>Skills Proven Through Current Projects</h2>
              <p>
                A focused stack across full-stack web apps, AI-assisted learning
                systems, data-backed products, and Android workflows.
              </p>

              <div className="skill-grid">
                {skillGroups.map((group) => (
                  <article className="skill-group" key={group.title}>
                    <h3>{group.title}</h3>
                    <p>{group.summary}</p>
                    <ul>
                      {group.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
