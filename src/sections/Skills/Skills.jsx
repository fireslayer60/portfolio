import React from 'react'

import style from './SkillsStyles.module.css'
import SkillList from '../../common/SkillList'
function Skills() {
  return (
    <section id="skills" className={style.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={style.skillList}>
           <SkillList name ="Flutter"/>
           <SkillList name ="Dart"/>
           <SkillList name ="firebase"/>
           <SkillList name ="PostgresSQL"/>
           <SkillList name ="Rest API"/>
        </div>
        <hr/>
        <div className={style.skillList}>
           <SkillList name ="Python"/>
           <SkillList name ="Machine Learning"/>
           <SkillList name ="Flask"/>
           <SkillList name ="Git"/>
           <SkillList name ="Java"/>
        </div>
        <hr/>
        <div className={style.skillList}>
           <SkillList name ="HTML"/>
           <SkillList name ="CSS"/>
           <SkillList name ="JavaScript"/>
           <SkillList name ="Nodejs"/>
           <SkillList name ="Reactjs"/>
        </div>
    </section>
  )
}

export default Skills