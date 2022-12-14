import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Cards from './components/Cards';

const App = () => {
  return(
    <div className='App'>
      <NavBar />
      <Main />
      <Cards />
    </div>
  );
}

export default App;

