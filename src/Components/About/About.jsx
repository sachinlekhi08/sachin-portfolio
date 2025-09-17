import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Sachin from '../../assets/sachin.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
        
        <div className="about-tittle">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={Sachin} alt="" />
            </div>
            <div className="about-right">
                <div className='about-self'>
                    <p>I am a highly motivated second-year Computer Science student with a non-CS background. My unique path into technology has fueled my passion for data analytics, backend systems, and problem-solving. </p>
                    <p>I enjoy exploring how data can drive decisions and how robust backend systems support scalable applications. My goal is to keep learning, work on impactful projects, and grow into a skilled data professional.</p>
                </div>
                <div className='about-skills'>
                    <div className="about-skill"><p>Python and Javascript</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>SQL and APIs</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>HTML and CSS</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Data Structures & Algorithms</p><hr style={{width:"65%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achivement">
                <h1>2+</h1>
                <p>Years Of Experience</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>20+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>15+</h1>
                <p>Happy clients</p>
            </div>
        </div>
    </div>
  )
}

export default About
