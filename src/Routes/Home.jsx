// REACT 
import React from 'react';

// ROUTER
import { Link } from 'react-router-dom';

// CARDS
import LaMarca750Card from '../Cards/LaMarca750Card';

// CSS
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <h1>Searchlight Market</h1>
        <Link to='/la-marca-prosecco-750'>La Marca Prosecco 750</Link>
    </div>
  );
};

export default Home;
