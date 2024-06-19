import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import {useTheme} from "./ThemeContext";
function SkillList(props) {
  const {theme,toggleTheme} = useTheme();
  const iconCol = theme==="light" ? "black" : "white";
  return (
    <span>
    <GiCheckMark style={{color:iconCol}}/>
    <p>{props.name}</p>
</span>
  )
}

export default SkillList