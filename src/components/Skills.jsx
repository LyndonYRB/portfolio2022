import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import iconJS from "../materials/js.png";
import iconCSS from "../materials/css.png";
import iconHTML from "../materials/html.png";
import iconReact from "../materials/react.png";
import iconMongo from "../materials/mongodb.png";
import iconExpress from "../materials/express.png";
import iconNode from "../materials/node.png";
import iconPython from "../materials/python.png";
import iconFlask from "../materials/flask.png";
import iconDjango from "../materials/django.png";
import iconPostgres from "../materials/postgresql.png";
import colorSharp from "../materials/color-sharp.png";

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>

              <p>
                These are the languages and frameworks I've learned to use from
                bootcamp and reading tutorials.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={iconJS} alt="Image1" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={iconHTML} alt="Image2" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={iconCSS} alt="Image3" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={iconNode} alt="Image4" />
                  <h5>Node</h5>
                </div>
                <div className="item">
                  <img src={iconExpress} alt="Image4" />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img src={iconMongo} alt="Image4" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={iconPython} alt="Image4" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={iconFlask} alt="Image4" />
                  <h5>Flask</h5>
                </div>
                <div className="item">
                  <img src={iconPostgres} alt="Image4" />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src={iconDjango} alt="Image4" />
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <img src={iconReact} alt="Image4" />
                  <h5>React</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" alt="" src={colorSharp} />
    </section>
  );
}
