import React from 'react'
import styles from './ProjectsStyles.module.css'
import noteimg from "../../assets/note.png"
import ProjectCard from '../../common/ProjectCard'
import recieptimg from "../../assets/img2.png"
import moodimg from "../../assets/img0.jpeg"
function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard name="Notes Buddy" desc="Notes Organizer App" img={noteimg} link="https://github.com/fireslayer60/note_buddy.git"/>
            <ProjectCard name="Receipt Rapid" desc="Expense Tracker App" img={recieptimg} link="https://github.com/fireslayer60/reciept-rapid.git"/>
            <ProjectCard name="Mooder" desc="Mood Journal App" img={moodimg} link="https://github.com/fireslayer60/hack.git"/>
        </div>
    </section>
  )
}

export default Projects