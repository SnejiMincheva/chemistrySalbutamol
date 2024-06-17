import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>
           Салбутамол
        </h1>
        <p>
          органична химия
        </p>
        <button className='btn' onClick={() => navigate('/what')}>
          Научи повече <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Hero