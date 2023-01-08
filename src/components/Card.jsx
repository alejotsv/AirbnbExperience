import React from 'react';
import { useState } from 'react';
import star from '../assets/star.png';

const Card = (props) => {
  console.log(props)
  const [img, setImg] = useState(props.img);
  const [rating, setRating] = useState(props.rating);
  const [votes, setVotes] = useState(props.votes);
  const [description, setDescription] = useState(props.description);
  const [price, setPrice] = useState(props.price);  
  
  return(
    <div className='card'>
      <img src={`src/assets/${img}.png`} alt='experience image' />
      <div className='rating'>
        <h4><img src={star} alt='star' /> {rating} <em>({votes}) • USA</em></h4>        
      </div>
      <div className='card-description'>
        <p>{description}</p>
      </div>
      <div className ='card-price'>
        <p><strong>From ${price}</strong> / person</p>
      </div>
    </div>
  );
}

export default Card;
