import React from 'react'
import "./AboutStyle.css"
import AboutImg  from "../Asset/bgvideo.mp4"


function AboutSection(props) {
  return (
    <>
    <div>
    <div className='hero-img'>
    <video className='bgColor' autoPlay loop muted playsInline>
      <source src= {AboutImg}/>
    </video>
    <div className='heading'>
      <h1>ABOUT.</h1>
      <p>{props.text}</p>
    </div>
    </div>
    </div>
 

    </>
  )
}

export default AboutSection;