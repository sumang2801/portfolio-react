import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Work from '../Work/Work'


const Hero = () => {
  return (
<div id='home' className='hero'>
  
      <div className='hero-sections'>
        <div className='hero-left'>

        </div><img src={profile_img} alt="" />
        <div className='hero-right'>

          <div className='hero-para'>
            <h1> <span >I am suman, front end developer base in usa</span></h1>
            <p>Recent Computer Science graduate from Grand Valley State
              University with a passion for building robust,
              user-centric software solutions.
              Proficient in Java, C, C++, JavaScript,
              and cross-platform mobile development (iOS/Android).</p>

            <div className='hero-action'>
              <div className="hero-resume"><p><a href="https://docs.google.com/document/d/1RCnpV_pWvHrgAY3HGDVSdAoOZXqLXOEK44Mm8kbM7Sg/edit?tab=t.0">Resume</a></p></div>

              <div className='hero-connect'>
                <AnchorLink className='anchor-link' offset={50} href='#project'> Scroll </AnchorLink></div>

              
            </div>

          </div>

        </div>
      </div>
        




    </div>
  )
}

export default Hero