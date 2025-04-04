import React from 'react'
import './Footer.css'
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <img srg=" " alt=''/>
                <p></p>
                


            </div>
            <div className='footer-top-right'>
            <h1>Current Status</h1>
          


          <div className="contact-left">
          
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />{" "}
              <p>ghondaygurung@yahoo.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>6163376280</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Harrisburg PA, USA</p>
            </div>
          </div>
        </div>


            </div>
        </div>
        <hr />
        <div className='footer-bottom'>
            <p className='footer-bottom-left'>@ 2025 All right reserved.</p>
            <div className='footer-bottom-right'>
                <p>Term of Service</p>
                <p>Privacy Policy</p>
                <p>Services</p>

            </div>

        </div>
        
    </div>
  )
}

export default Footer