import React from "react";
import github from "../assets/github-copilot.svg";
import twitter from "../assets/twitter-svg.svg";
import linked from "../assets/linkedin.svg";

export default function Footer() {
  return (
    <div className="footer">
      <h1 className="visually-hidden">Footer</h1>
      <div className=" footer-nav">
        <a
          className="nav-link"
          href="https://www.linkedin.com/in/david-czerwinski1"
          rel="noreferrer"
          target="_blank"
        >
          <img className="icon" src={linked} alt="Linkedin icon" />
          <p>Linkedin</p>
        </a>
        <a
          className="nav-link"
          href="https://github.com/davidczerwinski"
          rel="noreferrer"
          target="_blank"
        >
          <img className="icon" src={github} alt="Github icon" />
          <p>Github</p>
        </a>
      </div>
    </div>
  );
}
