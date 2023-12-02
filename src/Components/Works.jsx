import React from 'react'
import './Works.css'
import portfolio1 from '../assets/portfolio-1.png'
import portfolio2 from '../assets/portfolio-2.png'
import portfolio3 from '../assets/portfolio-3.png'
import portfolio4 from '../assets/portfolio-4.png'
import portfolio5 from '../assets/portfolio-5.png'
import portfolio6 from '../assets/portfolio-6.png'
const Works = () => {
  return (
    <section id="works">
        <h2 className="workstitle">My Portfolio</h2>
        <span className="worksDescription">As an experienced Full Stack Developer, I'm building a website to offer formal consultancy on Fintech and Blockchain. Leveraging my expertise, I aim to create a user-friendly platform providing valuable insights for clients navigating these dynamic industries.</span>
        <div className="worksImgs">
          <img src={portfolio1} alt="" className="workImg" />
          <img src={portfolio2} alt="" className="workImg" />
          <img src={portfolio3} alt="" className="workImg" />
          <img src={portfolio4} alt="" className="workImg" />
          <img src={portfolio5} alt="" className="workImg" />
          <img src={portfolio6} alt="" className="workImg" />
          
        </div>
        <button className="worksBtn">See More</button>
    </section>
  )
}

export default Works