import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home'
import Project from './Project'
import Education from './Education'
import Contact from './Contact';
import Experience from './Experience';
function App() {
  return (
    <div className='app-navbar'>
      <BrowserRouter>
        <div className="app-navbar">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Contacts" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
