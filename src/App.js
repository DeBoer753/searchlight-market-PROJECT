// REACT
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ROUTES
import Home from '../src/Routes/Home'

// CARDS
import LaMarcaProsecco from './Cards/LaMarcaProsecco';
import JChardonnay from './Cards/JChardonnay';
import JPinot from './Cards/JPinot';
import JCuvee20 from './Cards/JCuvee20';
import JBrutRose from './Cards/JBrutRose';
import JLohrSevenOaks from './Cards/JLohrSevenOaks'
import JLohrHilltop from './Cards/JLohrHilltop';
import JLohrFalconsPerch from './Cards/JLohrFalconsPerch'
import WhitehavenSB from './Cards/WhitehavenSB'
import WilliamHillCASB from './Cards/WilliamHillCASB';
import RattiDasti from './Cards/RattiDasti';
import OSAbstract from './Cards/OSAbstract';
import LouisSonoma from './Cards/LouisSonoma';
import OZVzinfandel from './Cards/OZVzinfandel'
import DomaineDrouhinPinot from './Cards/DomaineDrouhinPinot';
import JosephDrouhinMacon from './Cards/JosephDrouhinMacon';
import JosephDrouhinChablis from './Cards/JosephDrouhinChablis';
import JLohrBayMist from './Cards/JLohrBayMist';
import DryCreekCabernet from './Cards/DryCreekCabernet';
import DryCreekZin from './Cards/DryCreekZin';
import PolClementBrut from './Cards/PolClementBrut';

import OffshootRelax from './Cards/OffshootRelax';
import CoronadoWeekend from './Cards/CoronadoWeekend';
import AlmanacSournova from './Cards/AlmanacSournova';
import AlmanacLove from './Cards/AlmanacLove';

// CSS
import './App.css';

// APP
const App = () => {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Routes>
          {/* WINE */}
          <Route index element={<Home />} />
          <Route path='/' element={<Home />}/>
          <Route path='/la-marca-prosecco' element={<LaMarcaProsecco />}/>
          <Route path='/j-chardonnay' element={<JChardonnay />}/>
          <Route path='/j-pinot' element={<JPinot />}/>
          <Route path='/j-cuvee20' element={<JCuvee20 />}/>
          <Route path='/j-brut-rose' element={<JBrutRose />}/>
          <Route path='/jlohr-seven-oaks-cabernet' element={<JLohrSevenOaks />}/>
          <Route path='/jlohr-hilltop' element={<JLohrHilltop />}/>
          <Route path='/jlohr-falcons-perch' element={<JLohrFalconsPerch />}/>
          <Route path='/jlohr-bay-mist' element={<JLohrBayMist />}/>
          <Route path='/whitehaven-sb' element={<WhitehavenSB />}/>
          <Route path='/williamhill-ca-sb' element={<WilliamHillCASB />}/>
          <Route path='/ratti-dasti' element={<RattiDasti />}/>
          <Route path='/os-abstract' element={<OSAbstract />}/>
          <Route path='/louis-sonoma' element={<LouisSonoma />}/>
          <Route path='/ozv-zinfandel' element={<OZVzinfandel />}/>
          <Route path='/domaine-drouhin-pinot' element={<DomaineDrouhinPinot />}/>
          <Route path='/joseph-drouhin-macon' element={<JosephDrouhinMacon />}/>
          <Route path='/joseph-drouhin-chablis' element={<JosephDrouhinChablis />}/>
          <Route path='/dry-creek-cab' element={<DryCreekCabernet />}/>
          <Route path='/dry-creek-zin' element={< DryCreekZin/>}/>
          <Route path='/pol-clement-brut' element={< PolClementBrut/>}/>

          {/* BEER */}
          <Route path='/offshoot-relax' element={< OffshootRelax/>}/>
          <Route path='/coronado-weekend' element={< CoronadoWeekend/>}/>
          <Route path='/almanac-sournova' element={< AlmanacSournova/>}/>
          <Route path='/almanac-love' element={< AlmanacLove/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;