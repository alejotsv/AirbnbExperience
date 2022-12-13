import React from 'react';
import banner from '../assets/banner.png';

const Hero = () => {
  return(
    <div className='hero-banner'>
      <img src={banner} alt='hero banner' />
    </div>
  );
}

export default Hero;