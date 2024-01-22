// REACT
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ROUTES
import Home from '../src/Routes/Home'

// CARDS
import LaMarcaProsecco from './Cards/LaMarcaProsecco';
import JChardonnay from './Cards/JChardonnay';
import JLohrSevenOaks from './Cards/JLohrSevenOaks'
import WhitehavenSB from './Cards/WhitehavenSB'

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
          <Route path='/jlohr-seven-oaks' element={<JLohrSevenOaks />}/>
          <Route path='/whitehaven-sb' element={<WhitehavenSB />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;