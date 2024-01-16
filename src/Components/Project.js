import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./App.css";



function Project() {
  const [projectData, setProjectData] = useState([])
  useEffect(()=>{
    fetch(" http://localhost:3001/projectData")
    .then(response =>response.json())
    .then(projectData => setProjectData(projectData))
    
  }, []);


  return (
    <div className="project">
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
      <div className='projects'>
        <h1 className='data1'>My Projects</h1>
          <ul>
            {projectData.map(projectDat =>(
              
             <li key={projectDat.id}>
              <img src={projectDat.image} alt={projectDat.name}/>
              <h2>{projectDat.name}</h2>
              <p>{projectDat.description}</p>
              <p>{projectDat.language}</p>
              <p>{projectDat.type}</p>
              <p>{projectDat.framework}</p>
              <a href={projectDat.url} target="_blank">View on Github</a>

             </li>
            ))}
          </ul>
      </div>
    </div>
  );
}

export default Project
