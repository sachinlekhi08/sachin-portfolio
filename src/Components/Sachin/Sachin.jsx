import React from 'react'
import './Sachin.css'
import profile from '../../assets/Profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Sachin = () => {
  return (
     <div id='home' className='Sachin'>
        <div className='sachin-photo'>
            <img src={profile} alt="sachin photo" />
        </div>
        <div className='sachin-info'>
            <h1><span>Hi, I'am Sachin k chaudhary.</span><br />Aspiring Data Analyst & Backend Developer</h1>
            <p>"I enjoy working with data, solving problems through analysis, and building backend systems that power real-world applications. Alongside my core focus, I also explore frontend development to create complete solutions."</p>
        </div>
        <div className='sachin-action'>
            <div className='Sachin-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
            <div className="sachin-resume">View My Resume</div>
        </div>
    </div>
  )
}

export default Sachin