import { Col, Container, Row } from "react-bootstrap";
import skyline from "../materials/hero-skyline.svg";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center banner-row">
          <Col xs={12} lg={7}>
            <div className="banner-copy">
              <span className="banner-kicker">Software Engineer</span>
              <h1>Software Engineer Building AI-Powered Web Applications</h1>
              <p className="banner-lead">
                M.S. Computer Science candidate building full-stack
                applications with React, Next.js, TypeScript, and LLM-powered
                systems.
              </p>
              <p className="banner-credibility">
                Army veteran &bull; Full-stack projects &bull; User-focused
                product development
              </p>
              <div className="banner-actions">
                <a href="#project" className="banner-btn banner-btn-primary">
                  View Projects
                </a>
                <a
                  href="/Lyndon-St-Luce-Resume.pdf"
                  className="banner-btn banner-btn-secondary"
                >
                  Resume
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={5}>
            <div className="banner-visual" aria-hidden="true">
              <div className="banner-visual-frame">
                <img
                  className="banner-skyline"
                  src={skyline}
                  alt=""
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
