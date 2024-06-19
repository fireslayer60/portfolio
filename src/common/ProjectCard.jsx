import React from 'react'

function ProjectCard(props) {
  return (
    
         <a href={props.link} target="_blank">
                <div style={{padding:"30px",backgroundColor:"#fff",borderRadius:"20px"}}>
                    <img className='hover' src={props.img} alt={`${props.name} image`} />
                </div>
                
            
                    <h3>{props.name}</h3>
                    <p>{props.desc}</p>
                    </a>
    
       
        
    
  )
}

export default ProjectCard