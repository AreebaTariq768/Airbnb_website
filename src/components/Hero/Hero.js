import React from 'react'
import './Hero.css'
import grid from '../../images/grid.png'
const Hero = () => {
  return (
    <div>
      <section className='hero'>
        <img className='hero--photo' src={grid}></img>
        <h1 className='hero--header'>Online Experience</h1>
        <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
      </section>
    </div>
  )
}

export default Hero
