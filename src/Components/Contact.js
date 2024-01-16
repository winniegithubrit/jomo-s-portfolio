import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
  faSnapchat,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const [formData,setFormData] = useState({
    name:"",
    emaiil: "",
    message: "",

  });
   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData({
       ...formData,
       [name]: value,
     });
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     alert("Message Sent!");
     console.log("Form submitted:", formData);
     
   };
  
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
      <div className="contact-us">
        <h1 className='comment'>Leave your comments here</h1>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="Footer">
          <a href="https://twitter.com/WinnieJomo" className="twitter">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com/winniejomo/" className="instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://github.com/winniegithubrit" className="github">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>

          <a href="https://www.snapchat.com/winnie_jomo21" className="snapchat">
            <FontAwesomeIcon icon={faSnapchat} size="2x" />
          </a>
          <a
            href="https://www.tiktok.com/@jomo_winnie?lang=en"
            className="tiktok"
          >
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact
