import React from 'react'
import './Work.css'
import mywork_data from '../../assets/mywork_data'
import git from '../../assets/git.svg'
import demo from '../../assets/demo.svg'

const Work = () => {
  return (
    <div id='project' className='work'>
      <div className='work-content'>
        <div className='work-header'>
          <span className='work-badge'>Portfolio</span>
          <h1 className='work-title'>Featured Projects</h1>
          <p className='work-subtitle'>
            Innovative solutions crafted with modern technologies and creative design
          </p>
        </div>
        
        <div className='projects-grid'>
          {mywork_data.map((project, index) => {
            return (
              <div key={index} className={`project-card project-card-${(index % 3) + 1}`}>
                <div className='project-image-container'>
                  <img src={project.w_img} alt={project.w_name} className='project-image' />
                  <div className='project-overlay'>
                    <div className='project-actions'>
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className='action-btn code-btn'>
                        <img src={git} alt="GitHub" />
                        <span>View Code</span>
                      </a>
                      <a href={project.url2} target="_blank" rel="noopener noreferrer" className='action-btn demo-btn'>
                        <img src={demo} alt="Demo" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className='project-info'>
                  <div className='project-category'>Project {String(index + 1).padStart(2, '0')}</div>
                  <h3 className='project-title'>{project.w_name}</h3>
                  <p className='project-description'>
                    {project.description || "A modern web application built with cutting-edge technologies and best practices."}
                  </p>
                  
                  <div className='project-tech-stack'>
                    <span className='tech-tag'>React</span>
                    <span className='tech-tag'>JavaScript</span>
                    <span className='tech-tag'>CSS</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Work