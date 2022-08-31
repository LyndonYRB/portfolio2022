import { useState } from "react";
import { Col, Modal } from "react-bootstrap";

export default function ProjectCard({
  title,
  imgUrl,
  projectUrl,
  gitHubUrl,
  description,
}) {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>
            <div className="proj-links">
              <a href={projectUrl} className="proj-link">
                <button>Deployed Site</button>
              </a>
              <a href={gitHubUrl} className="proj-link">
                <button>Github</button>
              </a>
              <br></br>
              <br></br>
              <span className="proj-link">
                <button onClick={handleShowModal}>More Info</button>

                <Modal show={showModal} onHide={handleCloseModal}>
                  <Modal.Header>{title}</Modal.Header>
                  <Modal.Body>
                    <p>{description}</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <span className="proj-link">
                      <button className="close-btn" onClick={handleCloseModal}>
                        Close
                      </button>
                    </span>
                  </Modal.Footer>
                </Modal>
              </span>
            </div>
          </span>
        </div>
      </div>
    </Col>
  );
}
