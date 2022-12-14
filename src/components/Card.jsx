import React from 'react';
import star from '../assets/star.png';

const Card = (props) => {
  
  return(
    <div className='card'>
      <img src={props.img} alt='swimmer image' />
      <div className='rating'>
        <h4><img src={star} alt='star' /> {props.rating} <em>({props.votes}) • USA</em></h4>        
      </div>
      <div className='card-description'>
        <p>{props.description}</p>
      </div>
      <div className ='card-price'>
        <p><strong>From ${props.price}</strong> / person</p>
      </div>
    </div>
  );
}

export default Card;