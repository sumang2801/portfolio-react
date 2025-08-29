import React, { useState, useEffect } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logoSGClassic from '../../assets/logo-sg-classic.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <AnchorLink href='#home' className='brand-link' onClick={closeMenu}>
            <img src={logoSGClassic} alt="SG Logo" className="navbar-logo" style={{height: '56px', width: '56px', marginRight: '8px'}} />
          </AnchorLink>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          <AnchorLink href='#home' className='nav-link' onClick={closeMenu}>
            <span className="nav-text">Home</span>
          </AnchorLink>
          <AnchorLink href='#project' className='nav-link' onClick={closeMenu}>
            <span className="nav-text">Projects</span>
          </AnchorLink>
          <AnchorLink href='#about' className='nav-link' onClick={closeMenu}>
            <span className="nav-text">Skills</span>
          </AnchorLink>
          <AnchorLink href='#footer' className='nav-link' onClick={closeMenu}>
            <span className="nav-text">Contact</span>
          </AnchorLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div 
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <AnchorLink href='#home' className='mobile-nav-link' onClick={closeMenu}>
              <span className="mobile-nav-number">01</span>
              <span className="mobile-nav-text">Home</span>
            </AnchorLink>
            <AnchorLink href='#project' className='mobile-nav-link' onClick={closeMenu}>
              <span className="mobile-nav-number">02</span>
              <span className="mobile-nav-text">Projects</span>
            </AnchorLink>
            <AnchorLink href='#about' className='mobile-nav-link' onClick={closeMenu}>
              <span className="mobile-nav-number">03</span>
              <span className="mobile-nav-text">Skills</span>
            </AnchorLink>
            <AnchorLink href='#footer' className='mobile-nav-link' onClick={closeMenu}>
              <span className="mobile-nav-number">04</span>
              <span className="mobile-nav-text">Contact</span>
            </AnchorLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar