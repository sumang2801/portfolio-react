import React from 'react'
import './Footer.css'
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Footer = () => {
  return (
    <div id='footer' className='footer modern-footer'>
        <div className='footer-background'>
            <div className='footer-shapes'>
                <div className='footer-shape footer-shape-1'></div>
                <div className='footer-shape footer-shape-2'></div>
                <div className='footer-shape footer-shape-3'></div>
            </div>
        </div>
        
        <div className='footer-content'>
            <div className='footer-hero'>
                <h1 className='footer-title'>
                    <span className='footer-highlight'>Let's Build</span>
                    <br />
                    Something Amazing Together
                </h1>
                <p className='footer-subtitle'>
                    Ready to turn your ideas into reality? I'm here to help create 
                    exceptional digital experiences that make a difference.
                </p>
            </div>

            <div className='footer-main'>
                <div className='footer-left'>
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-text">SG</span>
                        </div>
                        <div className="brand-info">
                            <h3>Suman Gurung</h3>
                            <p>Frontend Developer & Problem Solver</p>
                        </div>
                    </div>
                    
                    <div className="footer-social">
                        <h4>Follow Me</h4>
                        <div className="social-links">
                            <a href="https://github.com/ghondaygrg" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.37 0 0 5.37 0 12 0 17.31 3.435 21.795 8.205 23.385 8.805 23.49 9.03 23.13 9.03 22.815 9.03 22.53 9.015 21.585 9.015 20.415 5.67 21.135 4.965 18.795 4.965 18.795 4.425 17.49 3.63 17.13 3.63 17.13 2.535 16.38 3.717 16.395 3.717 16.395 4.935 16.65 5.565 17.910 5.565 17.910 6.615 19.725 8.295 19.215 9.075 18.915 9.18 18.12 9.495 17.61 9.84 17.325 7.17 17.025 4.38 15.99 4.38 11.37 4.38 10.065 4.845 8.985 5.61 8.985 5.61 6.615 8.025 6.615 10.92 8.985 11.37 4.38 15.99 7.17 17.025 9.84 17.325 9.495 17.61 9.18 18.12 9.075 18.915 8.295 19.215 6.615 19.725 5.565 17.910 4.935 16.65 3.717 16.395 2.535 16.38 3.63 17.13 4.425 17.49 4.965 18.795 4.965 18.795 5.67 21.135 9.015 20.415 9.015 21.585 9.03 22.53 9.03 22.815 9.03 23.13 8.805 23.49 8.205 23.385 3.435 21.795 0 17.31 0 12 0 5.37 5.37 0 12 0Z"/>
                                </svg>
                                <span>GitHub</span>
                            </a>
                            <a href="https://linkedin.com/in/suman-ghonday" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846 13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711 19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368 3.274 4.23 4.194 3.305 5.337 3.305 6.477 3.305 7.401 4.23 7.401 5.368 7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"/>
                                </svg>
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className='footer-right'>
                    <div className='contact-card'>
                        <h3>Get In Touch</h3>
                        <p>Ready to start a project or just want to chat? I'd love to hear from you!</p>
                        
                        <div className="contact-methods">
                            <div className="contact-method">
                                <div className="contact-icon">
                                    <img src={mail_icon} alt="Email" />
                                </div>
                                <div className="contact-info">
                                    <span className="contact-label">Email</span>
                                    <a href="mailto:ghondaygurung@yahoo.com" className="contact-value">
                                        ghondaygurung@yahoo.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="contact-method">
                                <div className="contact-icon">
                                    <img src={call_icon} alt="Phone" />
                                </div>
                                <div className="contact-info">
                                    <span className="contact-label">Phone</span>
                                    <a href="tel:6163376280" className="contact-value">
                                        (616) 337-6280
                                    </a>
                                </div>
                            </div>
                            
                            <div className="contact-method">
                                <div className="contact-icon">
                                    <img src={location_icon} alt="Location" />
                                </div>
                                <div className="contact-info">
                                    <span className="contact-label">Location</span>
                                    <span className="contact-value">Harrisburg, PA, USA</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="cta-section">
                            <a href="mailto:ghondaygurung@yahoo.com" className="cta-button">
                                <span>Start a Conversation</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='footer-bottom'>
                <div className='footer-bottom-content'>
                    <p className='copyright'>© 2025 Suman Gurung. Crafted with passion and precision.</p>
                    <div className='footer-links'>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#project">Projects</a>
                        <a href="#footer">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer