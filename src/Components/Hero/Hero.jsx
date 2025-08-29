import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <section id="home" className="hero polished-hero">
      <div className="hero-sections">
        <div className="hero-left">
          <div className="profile-img-wrapper">
            <img src="/about_profile1_img.jpg?v=3" alt="Suman Ghonday profile" className="profile-img" />
            <span className="profile-badge">Available for work</span>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-para">
            <h1 className="hero-title">
              <span className="hero-highlight">Hello, I'm Suman</span>
              <br />
              <span className="hero-sub">Creative Frontend Developer & Digital Craftsman</span>
            </h1>
            <p className="hero-description">
              Passionate about transforming ideas into <span className="emphasis">extraordinary digital experiences</span>. As a Computer Science graduate from Grand Valley State University, I specialize in building modern, responsive web applications that users love.<br />
              <br />
              I thrive on creating <span className="tech-highlight">pixel-perfect interfaces</span> and <span className="tech-highlight">seamless user journeys</span> using cutting-edge technologies like <span className="tech">React</span>, <span className="tech">JavaScript</span>, <span className="tech">TypeScript</span>, and <span className="tech">Node.js</span>.
            </p>
            <div className="hero-action polished-actions">
              <a
                href="https://docs.google.com/document/d/1RCnpV_pWvHrgAY3HGDVSdAoOZXqLXOEK44Mm8kbM7Sg/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn resume-btn"
              >
                <span>Download Resume</span>
              </a>
              <AnchorLink className="hero-btn work-btn" offset={50} href="#project">
                <span>See My Work</span>
              </AnchorLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero