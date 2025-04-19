import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (

    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt=""className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
            
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative educational journey with our university comperhensive educations programs.Our cutting-edge curriculum are designed to empower student with knowledge, skills and experience needed to excel in the dynamic feild of education</p>
            <p>with a focus on innovation prepare aspiring educators to make a meaningful impact in classrooms, achools and communities</p>
            <p>whether you aspire to became a teacher, admionistrator, coouncelor or educational leader . Our diverse range of proggrams offer the perfect pathway to achieve your goals unlock your full potential in shaping in the future of education.</p>
        </div>
    </div>
  )
}

export default About