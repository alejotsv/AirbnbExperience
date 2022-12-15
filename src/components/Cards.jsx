import React from 'react';
import Card from './Card';
import star from '../assets/star.png';
import swimmer from '../assets/image12.png';
import bike from '../assets/mountain_bike.png';
import wedding from '../assets/wedding_photography.png';
import card_info from '../assets/cards-info.js';

const Cards = () => {
  const info = card_info.map( card => {
    return(
      <Card 

      />
    )
  } )
  console.log(info);

  return(
    <div className='cards'>
      {info}
    </div>
  )
}

export default Cards;