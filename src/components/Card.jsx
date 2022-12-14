import React from 'react';
import star from '../assets/star.png';

const Card = (props) => {
  
  return(
    <div className='card'>
      <img src={props.img} alt='swimmer image' />
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