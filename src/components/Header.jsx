import Navbar from "./Navbar";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export default function Header(props) {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <div className="header">
      <h1 className="visually-hidden">Header</h1>
      <Link to="/" className="header-link">
        David
      </Link>

      {isMobile ? (
        <Navbar />
      ) : (
        <div className="nav-button-group">
          <Link to="/" className="nav-button">
            Home
          </Link>
          <Link to="/contact" className="nav-button">
            Contact
          </Link>
          <Link to="/projects" className="nav-button">
            Projects
          </Link>
        </div>
      )}
    </div>
  );
}
