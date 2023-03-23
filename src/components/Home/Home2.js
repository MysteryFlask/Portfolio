import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { DiStackoverflow } from "react-icons/di";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> ME </span>
            </h1>
            <p className="home-about-body">
              I have a passion for programming and software development, and I love to do it in my free time!
              <br />
              <br />I am good at coding in
              <i>
                <b className="purple"> Python, Javascript and Linux. </b>
              </i>
              <br />
              <br />
              My specific fields of interest are building new &nbsp;
              <i>
                <b className="purple">Discord Bots, Flask and React.js websites and Linux programs </b> as well as
                areas related to{" "}
                <b className="purple">
                  Artificial Intelligence and Data Science.
                </b>
              </i>
              <br />
              <br />
              Occasionally, I use my time to work on creating games using
              <b className="purple"> Unity</b> and other
              <i>
                <b className="purple">
                  {" "}
                  Game Development Engines
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Unreal Engine and Construct 3</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mysteryflask"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://stackoverflow.com/users/14850720/mysteryflask"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <DiStackoverflow />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
