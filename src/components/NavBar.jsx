import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../materials/logo.png";
import navIcon1 from "../materials/nav-icon1.svg";
import navIcon2 from "../materials/nav-icon2.png";
import navIcon3 from "../materials/nav-icon3.png";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 24);

      const sectionIds = ["home", "skills", "project"];
      const activeSection = sectionIds.find((id, index) => {
        const section = document.getElementById(id);

        if (!section) return false;

        const sectionTop = section.offsetTop - 120;
        const nextSection = sectionIds[index + 1]
          ? document.getElementById(sectionIds[index + 1])
          : null;
        const sectionBottom = nextSection
          ? nextSection.offsetTop - 120
          : document.body.scrollHeight;

        return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
      });

      if (activeSection) {
        setActiveLink(activeSection);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false);
  };

  return (
      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        className={scrolled ? "scrolled" : ""}
      >
        <Container>
          <Navbar.Brand href="/">
            <img className="logo-img" src={logo} alt="Lyndon St. Luce" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === "project"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("project")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
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
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
