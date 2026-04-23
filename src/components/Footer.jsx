import { Col, Container, Row } from "react-bootstrap";

import logo from "../materials/logo.png";
import navIcon1 from "../materials/nav-icon1.svg";
import navIcon2 from "../materials/nav-icon2.png";
import navIcon3 from "../materials/nav-icon3.png";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <br></br>
        <Row className="align-item-center">
          <Col sm={6}>
            <img className="footer-logo-img" src={logo} alt="Lyndon St. Luce" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/lyndon-stluce/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://github.com/LyndonYRB"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="/Lyndon-St-Luce-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="Resume"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2026 Lyndon St. Luce. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
