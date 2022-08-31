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
            <img className="footer-logo-img" src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/lyndon-stluce/">
                <img src={navIcon1} />
              </a>
              <a href="https://github.com/LyndonYRB">
                <img src={navIcon2} />
              </a>
              <a href="https://drive.google.com/file/d/10qs9hkFxTMqsHEV1wn4WdZHQ29fmoyon/view">
                <img src={navIcon3} />
              </a>
            </div>
            <p>CopyRight 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
