import React from 'react'
import styles from './HeroStyles.module.css'
import heroimg from '../../assets/heroimg.jpg'
import { IoSunny } from "react-icons/io5";
import { FaLinkedin,FaGithub,FaMoon } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import CV from "../../assets/krish resume.pdf";
import {useTheme} from "../../common/ThemeContext";
function Hero() {
  const {theme,toggleTheme} = useTheme();
  const themeIcon = theme==="light" ? <IoSunny className={styles.colorMode} alt="theme button" onClick={toggleTheme}/> : <FaMoon className={styles.colorMode} alt="theme button" onClick={toggleTheme} style={{color:"white"}}/>
  const iconCol = theme==="light" ? "black" : "white";
  return (
    <section id="hero" className={styles.box}>
        <div className={styles.colorModeBox}>
            <img className={styles.heroImg} src = {heroimg} alt="profile pic"/>
            
            
        </div>
        <div>
          <div className={styles.info}>
            <h1>Krish <br/>Pandey</h1>
            <h2>Engineering Student</h2>
            <span>
              <a href="https://linkedin.com/in/krish-pandey-061168252" target="_blank">
              <FaLinkedin className={styles.icon} alt="linkedin icon" style={{color:iconCol}}/>
              </a>
              <a href="https://github.com/fireslayer60" target="_blank">
              <FaGithub className={styles.icon} alt="Github icon" style={{color:iconCol}}/>
              </a>
              <a href="https://leetcode.com/u/kp_1604_/" target="_blank">
              <SiLeetcode className={styles.icon} alt="Github icon" style={{color:iconCol}}/>
              </a>
            </span>
            <p className={styles.description}>
            Enthusiastic and versatile developer experienced in Python, Flutter, JavaScript and Java, with a passion for creating impactful solutions. 
            </p>
            <a href={CV} download>
              <button className="hover">
                Resume
              </button>
            </a>
          </div>
        </div>
    </section>
  )
}

export default Hero;