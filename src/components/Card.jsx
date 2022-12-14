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
      <div className='card-description'>
        <p>Life lessons with Katie Zaferes</p>
      </div>
      <div className ='card-price'>
        <p><strong>From $136</strong> / person</p>
      </div>
    </div>
  );
}

export default Card;