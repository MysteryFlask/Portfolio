import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="aqua">MysteryFlask</span>
            , AKA Galaxy111, from <span className="aqua"> London, England.</span>
            <br />I am a student currently pursuing a career in Programming, Software and App Development, and Data Science.
            <br />
            <br />
            Other than coding, here are some other things I like to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Video Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> PC Building/Engineering
            </li>
            <li className="about-activity">
              <ImPointRight /> Editing Wikipedia
            </li>
          </ul>

          <p style={{ color: "rgb(3, 173, 142)" }}>
            "Turn your errors into catalysts for innovation and growth!"{" "}
          </p>
          <footer className="blockquote-footer">MysteryFlask, 2023</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
