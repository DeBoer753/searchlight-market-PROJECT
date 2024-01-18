// REACT 
import React from 'react';

// ROUTER
import { Link } from 'react-router-dom';

// CSS
import './Home.css';

// HOME
const Home = () => {
  return (
    <div className='home-container'>
      <h1>Searchlight Market</h1>
        <Link to='/la-marca-prosecco'>La Marca Prosecco</Link>
    </div>
  );
};

export default Home;
