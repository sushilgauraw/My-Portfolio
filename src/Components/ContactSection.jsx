import React from 'react'
import AboutImg  from "../Asset/bg.mp4"

function ContactSection(props) {
  return (
    <>
    <div>
    <div className='hero-img'>
    <video className='bgColor' autoPlay loop muted playsInline>
    <source src= {AboutImg}/>
    </video>
    <div className='heading'>
      <h1>{props.Heading}</h1>
      <p>{props.text}</p>
    </div>
    </div>
    </div>
    </>
  )
}

export default ContactSection