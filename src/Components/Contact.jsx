import React, { useRef } from 'react'
import './contact.css'
import walmart from '../assets/walmart.png'
import adobe from '../assets/adobe.png'
import microsoft from '../assets/microsoft.png'
import facebook from '../assets/facebook.png'
import facebookIcon from '../assets/facebook-icon.png'
import TwitterIcon from '../assets/twitter.png'
import youtubeIcon from '../assets/youtube.png'
import instagramIcon from '../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();  
     const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0wbtbem', 'template_54qm92q', form.current, 'jaxRTI2jQ8cyFYLo-NoZ_')
      .then((result) => {
          console.log(result.text);
         
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="ContactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDescription">I have had a remarkable experience with this individual, and their communication has been exceptionally effective. They maintained frequent updates throughout our interaction. I truly appreciate their work ethic and excellence in every aspect.  </p>
        <div className="clientImgs">
          <img src={walmart} alt="Client" className="clientImg" />
          <img src={adobe} alt="Client" className="clientImg" />
          <img src={microsoft} alt="Client" className="clientImg" />
          <img src={facebook} alt="Client" className="clientImg"  />
        </div>

      </div>
      <div id="conatct">

<h1 className="contactPageTitle">Contact Me</h1>
<span className="contactDescription">Please fill out the form</span>
<form className="contactForm" ref={form}  onSubmit={sendEmail}>
  <input type="text" className="name" placeholder='Your Name' name='your_name' />
  <input type="text" className="email" placeholder='Your Email'  name='your_email'/>
  <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
  <button type='submit' value='Send' className="submitBtn">Submit</button>
  <div className="links">
    <img src={facebookIcon} alt="facebook" className="link" />
    <img src={youtubeIcon} alt="youtube" className="link" />
    <img src={TwitterIcon} alt="twitter" className="link" />
    <img src={instagramIcon} alt="instagram" className="link" />
  </div>
</form>



      </div>

    </section>
  )
}

export default Contact