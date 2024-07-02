import React from 'react'
import { Link } from 'react-scroll';
import style from "./NavBarStyles.module.css";
import { useTheme } from '../../common/ThemeContext';
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
function NavBar() {
    const {theme,toggleTheme} = useTheme();
  const themeIcon = theme==="light" ? <IoSunny className={style.icon} alt="theme button" onClick={toggleTheme}/> : <FaMoon className={style.icon} alt="theme button" onClick={toggleTheme} style={{color:"white"}}/>
  return (
    <div className={style.navbar}>
        {themeIcon}
        <p>Krish Pandey</p>
        
      <ul>
        <li><Link to="hero" smooth={true} duration={500} >Home</Link></li>
        <li><Link to="projects" smooth={true} duration={500} offset={-70}>Projects</Link></li>
        <li><Link to="skills" smooth={true} duration={500} offset={-70}>Skills</Link></li>
        <li><Link to="contact" smooth={true} duration={500} offset={-70}>Contact</Link></li>
      </ul>
      
    </div>
  )
}

export default NavBar