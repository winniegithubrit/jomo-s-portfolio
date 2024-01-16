import React from 'react';
import { Link } from 'react-router-dom';
import winnieImage from "../Components/images/winnie.jpg";

import "./App.css";
function Home() {
  return (
    <div className="main-container">
      <div className="home-page">
        {/* Apply Bootstrap styling to the navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body">
          <div className="container-fluid">
            {/* ms-auto is used to push the navbar routes to the left side of the page */}
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
              <li className="nav-item me-5">
                <Link to="/contacts" className="nav-link text-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="home-page-content">
        <div className="data">
          I am Winnie Jomo a <span className='highlight'>Software Developer</span> Located in
          Nairobi,Kenya.
        </div>
        <div className="data-image">
          <img src={winnieImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
