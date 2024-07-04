// REACT
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ROUTES
import Home from '../src/Routes/Home'

// CARDS
import LaMarcaProsecco from './Cards/LaMarcaProsecco';
import FranciscanChardonnay from './Cards/FranciscanChardonnay';
import LanguageOfYesRose from './Cards/LanguageOfYesRose';
import CannonBallSB from './Cards/CannonBallSB';
import EyzaguirreMerlot from './Cards/EyzaguirreMerlot'
import EyzaguirreCab from './Cards/EyzaguirreCab'
import LaPlayaSB from './Cards/LaPlayaSB'
import LaPlayaViognier from './Cards/LaPlayaViognier'
import LaPlayaChardonnay from './Cards/LaPlayaChardonnay'
import JChardonnay from './Cards/JChardonnay';
import JPinot from './Cards/JPinot';
import JCuvee20 from './Cards/JCuvee20';
import JBrutRose from './Cards/JBrutRose';
import JLohrSevenOaks from './Cards/JLohrSevenOaks'
import JLohrRiverstone from './Cards/JLohrRiverstone'
import JLohrHilltop from './Cards/JLohrHilltop';
import JLohrFalconsPerch from './Cards/JLohrFalconsPerch'
import WhitehavenSB from './Cards/WhitehavenSB'
import WilliamHillCASB from './Cards/WilliamHillCASB';
import RattiDasti from './Cards/RattiDasti';
import OSAbstract from './Cards/OSAbstract';
import OSMachete from './Cards/OSMachete';
import LouisSonoma from './Cards/LouisSonoma';
import OZVzinfandel from './Cards/OZVzinfandel'
import MaggioPinot from './Cards/MaggioPinot'
import MaggioSirah from './Cards/MaggioSirah'
import DomaineDrouhinPinot from './Cards/DomaineDrouhinPinot';
import JosephDrouhinMacon from './Cards/JosephDrouhinMacon';
import JosephDrouhinChablis from './Cards/JosephDrouhinChablis';
import JLohrBayMist from './Cards/JLohrBayMist';
import DryCreekCabernet from './Cards/DryCreekCabernet';
import DryCreekZin from './Cards/DryCreekZin';
import DryCreekSB from './Cards/DryCreekSB';
import DryCreekChenin from './Cards/DryCreekChenin';
import DryCreekFume from './Cards/DryCreekFume';
import PolClementBrut from './Cards/PolClementBrut';
import RaeburnPinot from './Cards/RaeburnPinot';
import DeliriumTremens from './Cards/DeliriumTremens';
import EastBrotherBoPils from './Cards/EastBrotherBoPils';
import OffshootRelax from './Cards/OffshootRelax';
import CoronadoWeekend from './Cards/CoronadoWeekend';
import CoronadoSaltyCrew from './Cards/CoronadoSaltyCrew';
import AlmanacSournova from './Cards/AlmanacSournova';
import AlmanacTwilight from './Cards/AlmanacTwilight';
import AlmanacLove from './Cards/AlmanacLove';
import AlmanacKolsch from './Cards/AlmanacKolsch';
import AlmanacSeasonal from './Cards/AlmanacSeasonal';
import AVBCPilsner from './Cards/AVBCPilsner';
import AVBCBlackLight from './Cards/AVBCBlackLight';
import AVBCCoastal from './Cards/AVBCCoastal';
import GsWildOne from './Cards/GsWildOne';
import KylaLavendar from './Cards/KylaLavendar';
import KylaCoco from './Cards/KylaCoco';
import KylaLychee from './Cards/KylaLychee';
import KylaSunset from './Cards/KylaSunset';
import SincereApple from './Cards/SincereApple';
import UintaHopNosh from './Cards/UintaHopNosh';
import UintaClearDaze from './Cards/UintaClearDaze';
import BrewdogHazyNA from './Cards/BrewdogHazyNA';
import GlutenbergIPA from './Cards/GlutenbergIPA';
import GlutenbergPaleAle from './Cards/GlutenbergPaleAle';

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
          <Route path='/franciscan-chardonnay' element={<FranciscanChardonnay />}/>
          <Route path='/languageofyes-rose' element={<LanguageOfYesRose />}/>
          <Route path='/cannonball-sb' element={<CannonBallSB />}/>
          <Route path='/eyzaguirre-merlot' element={<EyzaguirreMerlot />}/>
          <Route path='/eyzaguirre-cab' element={<EyzaguirreCab />}/>
          <Route path='/laplaya-sb' element={<LaPlayaSB />}/>
          <Route path='/laplaya-viognier' element={<LaPlayaViognier />}/>
          <Route path='/laplaya-chardonnay' element={<LaPlayaChardonnay />}/>
          <Route path='/j-chardonnay' element={<JChardonnay />}/>
          <Route path='/j-pinot' element={<JPinot />}/>
          <Route path='/j-cuvee20' element={<JCuvee20 />}/>
          <Route path='/j-brut-rose' element={<JBrutRose />}/>
          <Route path='/jlohr-seven-oaks-cabernet' element={<JLohrSevenOaks />}/>
          <Route path='/jlohr-riverstone' element={<JLohrRiverstone />}/>
          <Route path='/jlohr-hilltop' element={<JLohrHilltop />}/>
          <Route path='/jlohr-falcons-perch' element={<JLohrFalconsPerch />}/>
          <Route path='/jlohr-bay-mist' element={<JLohrBayMist />}/>
          <Route path='/whitehaven-sb' element={<WhitehavenSB />}/>
          <Route path='/williamhill-ca-sb' element={<WilliamHillCASB />}/>
          <Route path='/ratti-dasti' element={<RattiDasti />}/>
          <Route path='/os-abstract' element={<OSAbstract />}/>
          <Route path='/os-machete' element={<OSMachete />}/>
          <Route path='/louis-sonoma' element={<LouisSonoma />}/>
          <Route path='/ozv-zinfandel' element={<OZVzinfandel />}/>
          <Route path='/maggio-pinot' element={<MaggioPinot />}/>
          <Route path='/maggio-sirah' element={<MaggioSirah />}/>
          <Route path='/domaine-drouhin-pinot' element={<DomaineDrouhinPinot />}/>
          <Route path='/joseph-drouhin-macon' element={<JosephDrouhinMacon />}/>
          <Route path='/joseph-drouhin-chablis' element={<JosephDrouhinChablis />}/>
          <Route path='/dry-creek-cab' element={<DryCreekCabernet />}/>
          <Route path='/dry-creek-zin' element={< DryCreekZin/>}/>
          <Route path='/dry-creek-sb' element={< DryCreekSB/>}/>
          <Route path='/dry-creek-chenin' element={< DryCreekChenin/>}/>
          <Route path='/dry-creek-fume' element={< DryCreekFume/>}/>
          <Route path='/pol-clement-brut' element={< PolClementBrut/>}/>
          <Route path='/raeburn-pinot' element={< RaeburnPinot/>}/>

          {/* BEER */}
          <Route path='/eastbrother-bopils' element={< EastBrotherBoPils/>}/>
          <Route path='/offshoot-relax' element={< OffshootRelax/>}/>
          <Route path='/coronado-weekend' element={< CoronadoWeekend/>}/>
          <Route path='/coronado-saltycrew' element={< CoronadoSaltyCrew/>}/>
          <Route path='/almanac-sournova' element={< AlmanacSournova/>}/>
          <Route path='/almanac-twilight' element={< AlmanacTwilight/>}/>
          <Route path='/almanac-love' element={< AlmanacLove/>}/>
          <Route path='/almanac-kolsch' element={< AlmanacKolsch/>}/>
          <Route path='/almanac-seasonal' element={< AlmanacSeasonal/>}/>
          <Route path='/avbc-pilsner' element={< AVBCPilsner />}/>
          <Route path='/avbc-black-light' element={< AVBCBlackLight />}/>
          <Route path='/avbc-coastal' element={< AVBCCoastal />}/>
          <Route path='/delirium-tremens' element={< DeliriumTremens />}/>
          <Route path='/gs-wildone' element={< GsWildOne />}/>
          <Route path='/kyla-lavendar' element={< KylaLavendar />}/>
          <Route path='/kyla-coco' element={< KylaCoco />}/>
          <Route path='/kyla-lychee' element={< KylaLychee />}/>
          <Route path='/kyla-sunset' element={< KylaSunset />}/>
          <Route path='/sincere-apple' element={< SincereApple />}/>
          <Route path='/uinta-hopnosh' element={< UintaHopNosh />}/>
          <Route path='/uinta-cleardaze' element={< UintaClearDaze />}/>
          <Route path='/brewdog-hazy-na' element={< BrewdogHazyNA />}/>
          <Route path='/glutenberg-ipa' element={< GlutenbergIPA />}/>
          <Route path='/glutenberg-paleale' element={< GlutenbergPaleAle />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;