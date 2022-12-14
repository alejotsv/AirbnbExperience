import React from 'react';
import image12 from '../assets/image12.png';
import star from '../assets/star.png';

const Card = () => {
  return(
    <div className='card'>
      <img src={image12} alt='swimmer image' />
      <div className='rating'>
        <h4><img src={star} alt='star' /> 5.0 <em>(6) • USA</em></h4>        
      </div>
    </div>
  );
}

export default Card;