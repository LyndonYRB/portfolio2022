import { Container, Tab, Col, Row, Nav, Modal } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../materials/color-sharp2.png";
import projImg1 from "../materials/project-img1.png";
import projImg2 from "../materials/project-img2.png";
import projImg3 from "../materials/project-img3.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export default function Projects() {
  const projects = [
    {
      title: "Fly Swatter",
      description:
        "A simple game that utilize the mouse click and collision detection, made in JavaScript, HTML and CSS. The objective is to click on the fly to kill it before it touches the cake. Evertime you win and opt to play again an extra fly will be added making the game more difficult.",
      imgUrl: projImg1,
      projectUrl: "https://lyndonyrb.github.io/fly-swatter/",
      gitHubUrl: "https://github.com/LyndonYRB/fly-swatter ",
    },
    {
      title: "Random Country Genenator",
      description:
        "You click the button and the name, capital and the popaltion of a random country will pop up. The API I used was made by one of my classmates, It was created using MongoDB for the front-end I used React.",
      imgUrl: projImg2,
      projectUrl: "https://lyndons-rando-country-generator.netlify.app/",
      gitHubUrl: "https://github.com/LyndonYRB/react-api-project",
    },
    {
      title: "Flask Task Manager",
      description: `A task manager app made with Python-Flask. You simply input a task in the text field and press the "Add Task" button to add it to the list of tasks along with the date added, you also have the option to udate and delete each task.`,
      imgUrl: projImg3,
      projectUrl: "https://flask--manager-app.herokuapp.com/",
      gitHubUrl: "https://github.com/LyndonYRB/basic-blog-APP",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Here are a few samples of projects I've worked on.</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  More projects coming soon...
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  More projects coming soon...
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="" src={colorSharp2} />
    </section>
  );
}
