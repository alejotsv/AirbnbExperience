import React from 'react';
import Card from './Card';
import star from '../assets/star.png';
import cardsInfo from '../assets/cardsInfo';

const Cards = () => {
  const info = cardsInfo.map( card => {
    return(
      <Card 
        img={`src/assets/${card.img}.png`}
        rating={card.rating}
        vote={card.vote}
        description={card.description}
        price={card.price}
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