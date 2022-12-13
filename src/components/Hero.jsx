import React from 'react';
import banner from '../assets/banner.png';

const Hero = () => {
  return(
    <div className='hero-banner'>
      <img src={banner} alt='hero banner' />
      <div className='hero-text'>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </div>
  );
}

export default Hero;