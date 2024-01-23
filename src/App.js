// REACT
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ROUTES
import Home from '../src/Routes/Home'

// CARDS
import LaMarcaProsecco from './Cards/LaMarcaProsecco';
import JChardonnay from './Cards/JChardonnay';
import JLohrSevenOaks from './Cards/JLohrSevenOaks'
import JLohrFalconsPerch from './Cards/JLohrFalconsPerch'
import WhitehavenSB from './Cards/WhitehavenSB'
import OZVzinfandel from './Cards/OZVzinfandel'

// CSS
import './App.css';

// APP
const App = () => {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />}/>
          <Route path='/la-marca-prosecco' element={<LaMarcaProsecco />}/>
          <Route path='/j-chardonnay' element={<JChardonnay />}/>
          <Route path='/jlohr-seven-oaks-cabernet' element={<JLohrSevenOaks />}/>
          <Route path='/jlohr-falcons-perch' element={<JLohrFalconsPerch />}/>
          <Route path='/whitehaven-sb' element={<WhitehavenSB />}/>
          <Route path='/ozv-zinfandel' element={<OZVzinfandel />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;