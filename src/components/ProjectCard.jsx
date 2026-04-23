import { Col } from "react-bootstrap";

const isPlaceholderUrl = (url) => !url || url.startsWith("REPLACE_WITH_");
const isPlaceholderValue = (value) =>
  typeof value === "string" && value.startsWith("REPLACE_WITH_");

export default function ProjectCard({
  title,
  label,
  summary,
  techStack = [],
  impact,
  demoUrl,
  repoUrl,
  primaryCtaLabel = "Live Demo",
  secondaryCtaLabel = "GitHub",
  image,
}) {
  const hasDemo = !isPlaceholderUrl(demoUrl);
  const hasRepo = !isPlaceholderUrl(repoUrl);
  const visibleTechStack = techStack.filter((item) => !isPlaceholderValue(item));

  return (
    <Col xs={12} md={6} xl={4} className="d-flex">
      <article className="project-card">
        <div className="project-card-media">
          <img src={image} alt={`${title} preview`} />
          <span className="project-card-label">{label}</span>
        </div>

        <div className="project-card-body">
          <div className="project-card-copy">
            <h3>{title}</h3>
            <p className="project-card-summary">{summary}</p>
            <p className="project-card-impact">{impact}</p>
          </div>

          {visibleTechStack.length > 0 && (
            <ul className="project-card-stack" aria-label={`${title} tech stack`}>
              {visibleTechStack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          <div className="project-card-actions">
            {hasDemo ? (
              <a
                href={demoUrl}
                className="project-card-link project-card-link-primary"
                target="_blank"
                rel="noreferrer"
              >
                {primaryCtaLabel}
              </a>
            ) : (
              <span
                className="project-card-link project-card-link-disabled"
                aria-disabled="true"
              >
                {primaryCtaLabel}
              </span>
            )}

            {hasRepo ? (
              <a
                href={repoUrl}
                className="project-card-link project-card-link-secondary"
                target="_blank"
                rel="noreferrer"
              >
                {secondaryCtaLabel}
              </a>
            ) : (
              <span
                className="project-card-link project-card-link-disabled"
                aria-disabled="true"
              >
                {secondaryCtaLabel}
              </span>
            )}
          </div>
        </div>
      </article>
    </Col>
  );
}
