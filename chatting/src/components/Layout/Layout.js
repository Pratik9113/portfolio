// Layout.js

import React from 'react';
import './Layout.css';
import  { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";


const Layout = () => {
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
          <a href="/#"> Home </a>
          <a href="/#"> About </a>
          <a href="/#"> Projects </a>
          <a href="/#"> Achievement</a>
          <a href="/#"> Tech stack</a>
          <a href="/#"> Contact</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
};

export default Layout;