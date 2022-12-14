import React from 'react';
import Card from './Card';
import star from '../assets/star.png';
import swimmer from '../assets/image12.png';
import bike from '../assets/mountain_bike.png';
import wedding from '../assets/wedding_photography.png';

const Cards = () => {
  return(
    <div className='cards'>
      <Card 
        img={swimmer}
        rating='5.0'
        votes='6'
        description='Life lessons with Katie Zaferes'
        price='136'
      />
      <Card 
        img={wedding}
        rating='5.0'
        votes='30'
        description='Learn wedding photography'
        price='125'
      />
      <Card 
        img={bike}
        rating='4.5'
        votes='2'
        description='Group Mountain Biking'
        price='50'
      />       
    </div>
  )
}

export default Cards;