import React from 'react';
import airbnb_logo from '../assets/airbnb.png'

const NavBar = () => {
  return(
    <nav>
      <img src={airbnb_logo} alt='airbnb logo' />
    </nav>
  )
}

export default NavBar;