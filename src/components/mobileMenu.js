import React, { useEffect } from 'react';
import { Link, matchPath, useLocation } from "react-router-dom";

export const MobileMenu = (props) => {

  const location = useLocation();
  const aboutMatch = matchPath({
    path: '/about',
    exact: true,
    strict: false
  }, location.pathname);
  const projectsMatch = matchPath({
    path: '/projects',
    exact: true,
    strict: false
  }, location.pathname);
  useEffect(() => { 
    if(aboutMatch){
      document.getElementById('about-button').classList.add("ActiveButton");
    }
    if(projectsMatch){
      document.getElementById('interactive-button').classList.add("ActiveButton");
    }
  });
  
  return (
    <div id="mobile-menu-wrapper" className="PinkBorder">
      {/* Menu Title */}
      <Link to="/" onClick={() => {props.resetMobileMenuActive()}}>
        <div id="mobile-menu-title-wrapper" className="ButtonStyle">
          <img className="TitleGif" alt="gif of spinning 3D CPU chip" src={require("../assets/structural-images/cpu.gif")} />
          <h1 id="menu-title">Patrick <u>H</u>ase</h1>
        </div>
      </Link>
      {/* Menu Links */}
      <div id="mobile-menu-link-wrapper">
        <Link to="/projects" className="MobileLink" onClick={() => {props.resetMobileMenuActive()}}>
          <button className="ButtonStyle MobileMenuButton" id="interactive-button">
            <u>p</u>rojects
          </button>
        </Link>
        <Link to="/about" className="MobileLink" onClick={() => {props.resetMobileMenuActive()}}>
          <button className="ButtonStyle MobileMenuButton" id="about-button">
            <u>a</u>bout
          </button>
        </Link>
      </div>
    </div>
  )
};
