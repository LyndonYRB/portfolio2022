import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import "animate.css";
import TrackVisibility from "react-on-screen";
import Carousel from "./Carousel";

export const Banner = () => {
  const [loopNum, setloopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Developer", "Soldier", "Artist"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 200);
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setloopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my portfolio</span>
                  <h1>
                    {"Hi I'm Lyndon, "}

                    <span className="wrap">{text}</span>
                  </h1>
                  <br></br>
                  <h2>About Me</h2>
                  <p>
                    Combat Veteran with 12 years of military service with
                    experience in planning, maintenance and telecommunications
                    seeking to transition into Software Engineering. Apart from
                    my creativity, willingness to learn, and being result-driven
                    my strengths are also my resilience to solve problems as
                    well as to assist those who need help.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={7} xl={5}>
            <Carousel />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
