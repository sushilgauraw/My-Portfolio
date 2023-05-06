import React from 'react'
import "./HeroStyle.css"
import Introvideo  from "../Asset/bg3.mp4"

function Hero2() {
  return (
    <div className='hero-img'>
    <video className='bgColor' autoPlay loop muted playsInline>
      <source src= {Introvideo}/>
    </video>
    <div className='heading'>
      <h1>PROJECT.</h1>
      <p>some of my most resent work</p>
    </div>
    </div>
  )
}

export default Hero2