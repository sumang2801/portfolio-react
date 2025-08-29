import React, { useState, useEffect, useRef } from 'react'
import './About.css'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const sectionRef = useRef(null)

  const skills = [
    {
      category: "Frontend",
      icon: "🎨",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      skills: [
        { name: 'React.js', level: 90, icon: '⚛️', color: '#61DAFB' },
        { name: 'JavaScript', level: 88, icon: '🟨', color: '#F7DF1E' },
        { name: 'TypeScript', level: 82, icon: '🔷', color: '#3178C6' },
        { name: 'HTML & CSS', level: 92, icon: '🌐', color: '#E34F26' },
        { name: 'Vue.js', level: 75, icon: '💚', color: '#4FC08D' },
        { name: 'Tailwind CSS', level: 85, icon: '💨', color: '#06B6D4' }
      ]
    },
    {
      category: "Backend & Languages",
      icon: "⚡",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      skills: [
        { name: 'Java', level: 85, icon: '☕', color: '#ED8B00' },
        { name: 'Python', level: 80, icon: '🐍', color: '#3776AB' },
        { name: 'C++', level: 78, icon: '⚙️', color: '#00599C' },
        { name: 'Node.js', level: 82, icon: '🟢', color: '#339933' },
        { name: 'SQL', level: 75, icon: '🗄️', color: '#4479A1' }
      ]
    },
    {
      category: "Tools & Technologies",
      icon: "🛠️",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      skills: [
        { name: 'Git & GitHub', level: 90, icon: '🔧', color: '#F05032' },
        { name: 'VS Code', level: 95, icon: '📝', color: '#007ACC' },
        { name: 'Docker', level: 70, icon: '🐳', color: '#2496ED' },
        { name: 'MongoDB', level: 72, icon: '🍃', color: '#47A248' }
      ]
    },
    {
      category: "Mobile & Cross-Platform",
      icon: "📱",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      skills: [
        { name: 'React Native', level: 78, icon: '📱', color: '#61DAFB' },
        { name: 'iOS Development', level: 75, icon: '🍎', color: '#007AFF' },
        { name: 'Android', level: 80, icon: '🤖', color: '#3DDC84' }
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const SkillCard = ({ skill, index, categoryIndex }) => (
    <div 
      className={`skill-card ${isVisible ? 'animate' : ''}`}
      style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s` }}
      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${index}`)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <div className="skill-icon" style={{ color: skill.color }}>
        {skill.icon}
      </div>
      <div className="skill-info">
        <h4>{skill.name}</h4>
        <div className="skill-level-container">
          <div className="skill-level-bg">
            <div 
              className="skill-level-fill"
              style={{ 
                width: isVisible ? `${skill.level}%` : '0%',
                background: `linear-gradient(90deg, ${skill.color}20, ${skill.color})`
              }}
            />
          </div>
          <span className="skill-percentage">{skill.level}%</span>
        </div>
      </div>
      <div 
        className={`skill-glow ${hoveredSkill === `${categoryIndex}-${index}` ? 'active' : ''}`}
        style={{ background: skill.color }}
      />
    </div>
  )

  return (
    <div id='about' className='about' ref={sectionRef}>
      <div className="skills-bg">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="about-container">
        <div className={`about-header ${isVisible ? 'visible' : ''}`}>
          <div className="section-badge">
            <span>💻 Technical Expertise</span>
          </div>
          <h1>Skills & Technologies</h1>
          <p>A comprehensive overview of my technical skills and the tools I use to create amazing digital experiences</p>
        </div>

        <div className="skills-grid">
          {skills.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`skill-category ${isVisible ? 'visible' : ''}`}>
              <div className="category-header">
                <div className="category-icon-wrapper" style={{ background: category.gradient }}>
                  <span className="category-icon">{category.icon}</span>
                </div>
                <h3>{category.category}</h3>
                <div className="category-line" style={{ background: category.gradient }}></div>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <SkillCard 
                    key={index} 
                    skill={skill} 
                    index={index} 
                    categoryIndex={categoryIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`skills-stats ${isVisible ? 'visible' : ''}`}>
          <div className="stat-item">
            <div className="stat-number">20+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3+</div>
            <div className="stat-label">Years Learning</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">∞</div>
            <div className="stat-label">Passion Level</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About