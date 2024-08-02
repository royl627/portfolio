import React from 'react';
import './Navbar.css';
import homeIcon from '../icons/home.png';
import aboutIcon from '../icons/about.png';
import contactIcon from '../icons/contact.png';
import profile from '../assets/profile.png';
import github from '../icons/github.png';
import linkedin from '../icons/linkedin.png';

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="navbar-logo">
          <img src={profile} alt="Profile" className='navbar-profile' />
        </div>
        <div className='navbar-name'>
          Zhexuan (Roy) Li
        </div>
        <div className='navbar-websites'>
          <a href="https://github.com/royl627" target="_blank" rel="noreferrer">
            <img src={github} alt="GitHub Profile" className='navbar-github' />
          </a>
          <a href="https://www.linkedin.com/in/roylzx/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="LinkedIn Profile" className='navbar-linkedin' />
          </a>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#home">
              <img src={homeIcon} alt="Home" className="navbar-icon" />
              Home
            </a>
          </li>
          <li>
            <a href="#about">
              <img src={aboutIcon} alt="About" className="navbar-icon" />
              About
            </a>
          </li>
          <li>
            <a href="#contact">
              <img src={contactIcon} alt="Contact" className="navbar-icon" />
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;