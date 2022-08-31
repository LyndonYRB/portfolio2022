import headerImg1 from "../materials/header-img1.png";
import headerImg2 from "../materials/header-img2.png";
import headerImg3 from "../materials/header-img3.png";
import { Col } from "react-bootstrap";
import "./Carousel.css";
export default function Carousel() {
  return (
    <Col id="carousel-container" class="carousel slide" data-ride="carousel">
      <div className="carousel-items">
        <img className="carousel-img" src={headerImg1} alt="Header Img1" />

        <img className="carousel-img" src={headerImg2} alt="Header Img2" />

        <img className="carousel-img" src={headerImg3} alt="Header Img3" />
      </div>
    </Col>
  );
}
