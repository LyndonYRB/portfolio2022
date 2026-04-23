import { Container, Row } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import ProjectCard from "./ProjectCard";
import featuredProjects from "../data/featuredProjects";

export default function Projects() {
  return (
    <section className="project" id="project">
      <Container>
        <TrackVisibility partialVisibility once>
          {({ isVisible }) => (
            <div
              className={
                isVisible ? "animate__animated animate__fadeInUp" : ""
              }
            >
              <div className="project-header">
                <span className="project-kicker">Featured Work</span>
                <h2>Projects That Show How I Build</h2>
                <p>
                  A focused selection of product-minded work across full-stack
                  development, AI-powered experiences, and user-centered
                  problem solving.
                </p>
              </div>

              <Row className="g-4 project-grid">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
}
