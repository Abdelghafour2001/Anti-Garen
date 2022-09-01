import React from 'react'
import MainVideo from '../../assets/garen.mp4'
import './Hero.css'
function Hero() {
  return (
    <div className='hero'>
        <video autoPlay loop id='video'>
            <source src={MainVideo} type='video/mp4'/>
        </video>
    </div>
  )
}

export default Hero