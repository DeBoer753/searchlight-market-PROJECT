// REACT
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ROUTES
import Home from '../src/Routes/Home'

// CARDS
import LaMarca750Card from './Cards/LaMarca750Card';

// CSS
import './App.css';

const App = () => {
  return (
    <body>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />}/>
          <Route path='/la-marca-prosecco-750' element={<LaMarca750Card />}/>
        </Routes>
      </BrowserRouter>
    </body>
  );
};

export default App;