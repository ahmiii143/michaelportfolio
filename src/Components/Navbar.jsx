import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import {Link}from 'react-scroll'
import contact  from '../assets/contact.png'
import menu from '../assets/menu.png'


const Navbar = () => {
  const [showMenu , setShowMenu] = useState(false)
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
            <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" >Portfolio</Link>
            <Link  activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>
        </div>
        <button className='desktopMenubtn' onClick={()=>{
          document.getElementById('conatct').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contact} alt="contact" className="desktopMenuIcon" />Contact Me
        </button>

         <img src={menu} alt="menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu" style={ {display:  showMenu? 'flex' : "none"}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>About</Link>
            <Link  activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem"onClick={()=>setShowMenu(!showMenu)}>Portfolio</Link>
            <Link  activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>Clients</Link>
            <Link  activeClass='active' to='conatct' spy={true} smooth={true} offset={-50} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>




    </nav>
  )
}

export default Navbar