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
              <h1>Building AI-powered web applications with product focus.</h1>
              <p className="banner-lead">
                I build full-stack experiences with React, Next.js, Python, and
                LLM-powered systems that are fast, useful, and designed for
                real-world impact.
              </p>
              <p className="banner-credibility">
                Full-stack engineer with a disciplined operations background and
                a practical approach to shipping reliable software.
              </p>
              <div className="banner-actions">
                <a href="#project" className="banner-btn banner-btn-primary">
                  View Projects
                </a>
                <a
                  href="https://drive.google.com/file/d/1-eGog5EYTi0-4rvtedMNduqDQC3C8saQ/view?usp=sharing"
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
