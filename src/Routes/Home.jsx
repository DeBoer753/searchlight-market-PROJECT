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
        <Link to='/j-chardonnay'>J Chardonnay</Link>
        <Link to='/jlohr-seven-oaks-cabernet'>J. Lohr Seven Oaks Cabernet</Link>
        <Link to='/jlohr-falcons-perch'>J. Lohr Falcons Perch Pinot Noir</Link>
        <Link to='/jlohr-bay-mist'>J. Lohr Bay Mist Riesling</Link>
        <Link to='/whitehaven-sb'>Whitehaven Sauvignon Blanc</Link>
        <Link to='/ozv-zinfandel'>OZV Zinfandel</Link>
        <Link to='/domaine-drouhin-pinot'>Domaine Drouhin Pinot Noir</Link>
        <Link to='/joseph-drouhin-macon'>Joseph Drouhin Macon</Link>
        <Link to='/joseph-drouhin-chablis'>Joseph Drouhin Chablis</Link>
    </div>
  );
};

export default Home;
