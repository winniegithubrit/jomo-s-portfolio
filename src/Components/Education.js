import React from 'react'
import { Link } from 'react-router-dom'

function Education() {
  const technicalSkills = [
    'Programming Languages: Python, JavaScript, C, C++, Java',
    'Data Analysis and Visualization: SQL, Visualization with Python',
    'Web Development: HTML, CSS, JavaScript, Python, SQL, Jinja2, React, Django Framework, Cloudinary, Tailwind, Flask, FastAPI, PostgreSQL, Django RestFul Framework, Angular',
    'Software Development: GitHub, Trello',
  ];
  return (
    <div className="education">
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
              <Link to="/contacts" className="nav-link text-light">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
     <div className="container">
      <div className="education-info">
        <h2>EDUCATION:</h2>
        <p>Bachelor of Science in Mathematics and Computer Science (2021 - Present) <br /> Multimedia University Of Kenya</p>
        <p>Emobilis Web Development (2023) <br /> Certificate in Software Development (Django Framework)</p>
        <p>Certificate in Software Development (2023) <br /> Moringa School</p>
        <p>Certificate in Data Analytics and Visualization (2022) <br /> Strathmore University</p>
       
      </div>
      <div className="technical-skills">
        <h2>TECHNICAL SKILLS:</h2>
        <ul>
          {technicalSkills.map((skill, index) => (
            <li key={index}>
              <button>{skill}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Education
