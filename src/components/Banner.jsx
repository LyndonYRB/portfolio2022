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
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

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
                    Out of all my jobs/projects that I`ve done, the ones I
                    enjoyed the most are the types that allow me to create or
                    rebuild something whether it's art, communication equipment
                    or code and the greatest joy I get is when I see someone
                    engaged in the final product of my work. What drives me to
                    transition to Software Engineering is the fact that I get to
                    be part of an evolving industry where I get to exercise my
                    creativity and my ability to break down and solve problems.
                    My greatest strengths are my creativity and perseverance, I
                    was told this by those who I served in the military with.
                    When presented with a difficult problem I would break it
                    down to small problems or I would seek out those who had the
                    same issue to get their input, or I would just step away and
                    take a break to clear my head and then an idea or solution
                    would come to me. As a team player I do my best to motivate
                    those around me and to create a positive environment
                    especially during the difficult times. One of the ways I do
                    this is by showing my coworkers or fellow service members
                    the comic I`ve been working on for years or one of my art
                    works. When taking on a team project or a task I tend to
                    take a backseat role if I feel the other members have a
                    solid plan to execute the mission however if their methods
                    are not working, I will jump in and take charge.
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
