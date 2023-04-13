import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import soon from "../../Assets/Projects/soon.png";
import computer from "../../Assets/Projects/computer.png";
import portfolio from "../../Assets/Projects/portfolioimg.png";
import rating from "../../Assets/Projects/rating.png";
import badge from "../../Assets/Projects/badge.png";
import storage from "../../Assets/Projects/storage.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={computer}
              isBlog={false}
              title="Discord Disguised Recovery"
              description="A Discord bot with some simple embed creation commands that secretly doubles as a way to take back your server if you are ever hacked or banned."
              ghLink="https://github.com/MysteryFlask/disguisedbackupbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="My personal website, with multiple pages and animated components, built with React.js and the help of Soumyajit Behera."
              ghLink="https://github.com/MysteryFlask/Portfolio"
              demoLink="https://mysteryflask.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rating}
              isBlog={false}
              title="FilmRatingsUK"
              description="A UK-based Discord bot that gets unofficial film and tv show age ratings using multiple APIs and web scraping."
              ghLink="https://github.com/MysteryFlask/FilmRatingsUK"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={badge}
              isBlog={false}
              title="Active Ping Bot"
              description="An extremely simple Python discord bot that allows users with almost no coding experience to acquire, and retain the Discord active developer badge."
              ghLink="https://github.com/MysteryFlask/PingBadgeBot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={storage}
              isBlog={false}
              title="ReactFrameStorage"
              description="A React.js website that allows you to store links and their contents in movable, resizable frames for future use."
              ghLink="https://github.com/MysteryFlask/ReactFrameStorage"
              demoLink="https://react-frame-storage.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={soon}
              isBlog={false}
              title="More projects soon..."
              description="I am always developing something, so check my GitHub projects page and expect something new here pretty soon!"
              ghLink="https://github.com/MysteryFlask"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
