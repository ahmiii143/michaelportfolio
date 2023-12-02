import React from 'react'
import './Intro.css'
import image from '../assets/image.png'
import {Link}from 'react-scroll'
import Hireme from '../assets/hireme.png'



const Intro = () => {
  return (
   <section id="intro">
    <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Michael Alan</span><br />a Software engineer</span>
        <p className="intoPara">I'm a Software Engineer with extensive full-stack development expertise.<br/>I also have a strong passion and background in web-3 and fintech.</p>
        <Link><button className="btn"><img src={Hireme} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>

    
        

    </div>
    <img src={image} alt="profile" className="bg" />

   </section>
  )
}

export default Intro