import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone,<br /> I am <span className="purple">Lim Kim San</span>
            from <span className="purple"> Singapore </span> and now I live in
            <span className="purple"> Singapore. </span>
            <br /> As a senior Web Developer, I have deep experience in this area.
            <br />
            Additionally, I am freelancer and looking for a job opportunity.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Lim Kim San</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
