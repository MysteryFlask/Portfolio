import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillRedditCircle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { DiStackoverflow } from "react-icons/di";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by MysteryFlask and Soumyajit Behera</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} MysteryFlask</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/mysteryflask"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://stackoverflow.com/users/14850720/mysteryflask"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <DiStackoverflow />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.reddit.com/user/No_Strategy_9241"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillRedditCircle />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
