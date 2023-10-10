import {
  DiHtml5,
  DiCss3,
  DiMysql,
  DiReact,
  DiJava,
  DiGit,
  DiJsBadge
}from 'react-icons/di'

import "../style/components/technologiesContainer.sass"

import React from 'react'

const technologies = [
  {id: "html" , name: "HTML5" ,description:"Front-end", icon: <DiHtml5/>},
  {id: "css" , name: "CSS3" ,description:"Front-end", icon: <DiCss3/>},
  {id: "js" , name: "JavaScript" ,description:"Front-end", icon: <DiJsBadge/>},
  {id: "mysql" , name: "MySQL" ,description:"Banco De Dados", icon: <DiMysql/>},
  {id: "react" , name: "React" ,description:"Front-end", icon: <DiReact/>},
  {id: "java" , name: "Java" ,description:"Back-end", icon: <DiJava/>},
  {id: "git" , name: "Git" ,description:"Repositorio", icon: <DiGit/>}
]

const TechnologiesContainer = () => {
  return (
      <section className='technologies-container'>
        <h2>Tecnologias</h2>
        <div className='technologies-grid'>
          {technologies.map((tech) => (
            <div className='technlogy-card' id={tech.id} key={tech.id}>
                {tech.icon}
                <div>
                  <h3>
                    {tech.name}
                  </h3>
                  <p>
                    {tech.description}
                  </p>
                </div>
            </div>

          ))}
        </div>
      </section>    
    )
}

export default TechnologiesContainer