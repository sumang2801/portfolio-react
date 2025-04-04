import React from 'react'
import './About.css'


const About = () => {
  return (
    <div id='about' className='about'>

      <div className='about-title'>
      </div> 
      <div className='about-skills'><h1>Skills</h1>
          <div className='about-skill'><p>HTML, CSS</p><hr style={{ width: "50%" }} /></div>
          <div className='about-skill'><p>React, vuejs</p><hr style={{ width: "50%" }} /></div>
          <div className='about-skill'><p>JAVASCRIPT</p><hr style={{ width: "40%" }} /></div>
          <div className='about-skill'><p>Typescript</p><hr style={{ width: "50%" }} /></div>
          <div className='about-skill'><p>Java</p><hr style={{ width: "50%" }} /></div>
          <div className='about-skill'><p>python</p><hr style={{ width: "40%" }} /></div>
          <div className='about-skill'><p>c++</p><hr style={{ width: "50%" }} /></div>
          <div className='about-skill'><p>Github</p><hr style={{ width: "50%" }} /></div>

        </div>
    </div>
  )
}

export default About