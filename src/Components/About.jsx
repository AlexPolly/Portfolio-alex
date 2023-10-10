import React from 'react';
import "./About.css"
import ppic from "../Img/ppic.jpg"

function About() {
  
  return (
    <div id='about' className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, My name is </h2>
                <h2 className='i-name'>Alex A P</h2>
                <div className="i-title">
                    <h3>I'm a &nbsp;</h3>
                    <div className="i-title-wrapper">
                        <div className="i-title-item text-info">Web Developer</div>
                        <div className="i-title-item text-success">Web Developer</div>
                        <div className="i-title-item text-danger">Web Developer</div>
                        <div className="i-title-item text-secondary">Web Developer</div>
                        <div className="i-title-item text-warning mb-5">Web Developer</div>
                    </div>
                    
                </div>
                <div className="i-desc ">
                  <p className=''>  I'm passionate about crafting seamless web experiences. With a knack for time and team management, I bring creativity and efficiency to every project. Let's build something amazing together!</p>
                </div>
            </div>            
        </div>
        <div className="i-right">
            <img className='i-img' src={ppic} alt="" />
        </div>
    </div>
  )
}

export default About