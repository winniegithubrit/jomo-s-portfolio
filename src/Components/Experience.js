import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css";

function Experience() {
  return (
    <div className="experience">
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
              <Link to="/education" className="nav-link text-light">
                Education
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link to="/contacts" className="nav-link text-light">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="experience-data">
        <div className="work1">
          <h1>Laika Sacco Society</h1>
          <h2>IT Intern</h2>
          <h3>Responsibility:</h3>
          <p>
            Technical Support: Assisting employees with IT-related issues and
            providing technical support. Troubleshooting hardware and software
            problems.
          </p>
        </div>
        <div className="work2">
          <h1>Italanta Elewa Company</h1>
          <h2>Junior Software Developer</h2>
          <h3>Responsibility:</h3>
          <p>
            1. Open Source Project Contributions: Actively contribute code,
            documentation, and other resources to open-source projects.
            Collaborate with the open-source community, discuss ideas, and
            participate in decision-making processes.
            2. Collaboration:
            Workclosely with other developers, both within the company and the
            broader open-source community. Participate in discussions, code
            reviews, and collaborative decision-making. 
            3. Issue Tracking:
            Monitor and respond to issues reported by the community. Contribute
            to issue tracking by reporting bugs, suggesting enhancements, or
            providing solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience
