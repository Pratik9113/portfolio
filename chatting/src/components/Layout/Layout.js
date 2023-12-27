// Layout.js

import React from 'react';
import './Layout.css';
import { useTheme } from '../../context/ThemeContent';
import { Link } from 'react-scroll';
import  { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import {BsFillMoonStarsFill, BsFillSunFill} from "react-icons/bs";

const Layout = () => {


  const [theme ,setTheme] = useTheme();

  const handleTheme  = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  };
  const navRef = useRef();

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  return (
    <>
      <header>
        <p className='header-text'>Pratik Patil</p>
        <nav ref={navRef}>
          <a href="/#"> 
              <Link to = "Home" spy={true} smooth={true} offset={-100}  duration={100}>
                  Home 
              </Link>
          </a>
          <a href="/#"> 
                <Link to = "About" spy={true} smooth={true} offset={-100}  duration={100}>
                  About 
              </Link>
          </a>
          <a href="/#"> 
                <Link to = "Project" spy={true} smooth={true} offset={-100}  duration={100}>
                  Project 
              </Link>
          </a>
          <a href="/#">
              <Link to = "Achievemnet" spy={true} smooth={true} offset={-100}  duration={100}>
              Achievemnet
              </Link>
          </a>
          <a href="/#"> 
              <Link to = "Education" spy={true} smooth={true} offset={-100}  duration={100}>
                  Education 
              </Link>
          </a>
          <a href="/#"> 
          <Link to = "Contact" spy={true} smooth={true} offset={-100}  duration={100}>
                  Contact
              </Link>
          </a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>

        <div className='theme-btn' onClick={handleTheme}>
            {theme === 'light' ? <BsFillMoonStarsFill/> : <BsFillSunFill/>}
        </div>

      </header>
    </>
  );
};

export default Layout;