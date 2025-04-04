import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo2 from '../../assets/logo2.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


 
const Navbar = () => {
  const [menu, setMenu]=useState('home');
  const menuRef = useRef();
  const openMenu=()=>{
    menuRef.current.style.right='0px';
  }
  const closeMenu=()=>{ 
    menuRef.current.style.right='-350px';
  }
  return (
    <div className='navbar'>
        <img src={logo2} alt="" />
        <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open'/>

    <ul ref={menuRef} className="nav-menu">
      <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close' />
      
        <li><AnchorLink className='anchor-link' href='#home'>
          <p onClick= {()=>setMenu('home')}>Home</p>
          </AnchorLink>{menu==='home'?<img src='--' alt=''/>:<></>}</li>


        <li><AnchorLink className='anchor-link' offset={50} href='#about'>
          <p onClick= {()=>setMenu('about')}>Skills</p>
          </AnchorLink>{menu==='about'?<img src= '--' alt=''/>:<></>}</li>



        <li><AnchorLink className='anchor-link' offset={50} href='#project'>
          <p onClick= {()=>setMenu('project')}>Project</p>
          </AnchorLink>{menu==='project'?<img src='--'alt=''/>:<></>}</li>

        

          <li><AnchorLink className='anchor-link' offset={50} href='#footer'>
          <p onClick= {()=>setMenu('footer')}>Contact</p>
          </AnchorLink>{menu==='footer'?<img src='--'alt=''/>:<></>}</li>

          
        
    </ul> 

   </div>
  )
}

export default Navbar