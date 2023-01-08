import React from 'react';
import Card from './Card';
import star from '../assets/star.png';
import cardsInfo from '../assets/cardsInfo';

const Cards = () => {
  const info = cardsInfo.map( card => {
    return(
      <Card 
        key={card.id}
        {...card}
      />
    )
  } )  

  return(
    <div className='cards'>
      {info}
    </div>
  )
}

export default Cards;