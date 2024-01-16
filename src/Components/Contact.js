import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className="contact">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body">
        <div className="container-fluid">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-light">
                <span className="navbar-logo">Winnie Jomo</span>
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link to="/" className="nav-link text-light">
                Home
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link to="/project" className="nav-link text-light">
                Project
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link to="/experience" className="nav-link text-light">
                Experience
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link to="/education" className="nav-link text-light">
                Education
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Contact
