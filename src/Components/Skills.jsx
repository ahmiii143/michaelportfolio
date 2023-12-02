import React from 'react'
import './Skill.css'
import fullStack from '../assets/fullstack.png'
import fintech from '../assets/fintech.png'
import  Web3 from '../assets/Web3.png'

const Skills = () => {
  return (
    <section id="skills">
        <span className="skills">What I do </span>
        <span className="skillDescription">I'm Michael Alan, a seasoned full-stack web developer with more focus on full stack and fintech and just a keen interest on Web-3 spaces.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={fullStack} alt="fullStack" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>FullStack</h2>
                    <p>As a Full Stack Developer, I thrive at the intersection of technology and finance, offering a unique perspective on Fintech. With comprehensive skills in both front-end and back-end development.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={fintech} alt="fintech" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Fintech </h2>
                    <p>As a Fintech professional, I bring valuable insights and expertise to the ever-evolving industry.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={Web3} alt="Web3" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>WEB-3</h2>
                    <p>As a Web-3 Enthusiast and Full Stack Developer, I navigate the decentralized landscape, bringing a fusion of technical expertise and a passion for blockchain innovation.</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Skills