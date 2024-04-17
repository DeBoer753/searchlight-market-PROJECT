// REACT 
import React from 'react';

// ROUTER
import { Link } from 'react-router-dom';

// CSS
import styles from './Home.module.css';

// HOME
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>Searchlight Market</h1>
        {/* WINE */}
        <Link to='/la-marca-prosecco'>La Marca Prosecco</Link>
        <Link to='/j-chardonnay'>J Chardonnay</Link>
        <Link to='/j-pinot'>J Pinot</Link>
        <Link to='/j-cuvee20'>J Cuvee 20</Link>
        <Link to='/j-brut-rose'>J Brut Rosé</Link>
        <Link to='/jlohr-seven-oaks-cabernet'>J. Lohr Seven Oaks Cabernet</Link>
        <Link to='/jlohr-hilltop'>J. Lohr Hilltop Cabernet</Link>
        <Link to='/jlohr-falcons-perch'>J. Lohr Falcons Perch Pinot Noir</Link>
        <Link to='/jlohr-bay-mist'>J. Lohr Bay Mist Riesling</Link>
        <Link to='/whitehaven-sb'>Whitehaven Sauvignon Blanc</Link>
        <Link to='/williamhill-ca-sb'>William Hill Sauvignon Blanc</Link>
        <Link to='/ratti-dasti'>Ratti Barbera D'Asti</Link>
        <Link to='/os-abstract'>Orin Swift Abstract </Link>
        <Link to='/louis-sonoma'>Louis M. Martini Sonoma Cabernet</Link>
        <Link to='/ozv-zinfandel'>OZV Zinfandel</Link>
        <Link to='/domaine-drouhin-pinot'>Domaine Drouhin Pinot Noir</Link>
        <Link to='/joseph-drouhin-macon'>Joseph Drouhin Macon</Link>
        <Link to='/joseph-drouhin-chablis'>Joseph Drouhin Chablis</Link>
        <Link to='/dry-creek-cab'>Dry Creek Cabernet</Link>
        <Link to='/dry-creek-zin'>Dry Creek Zinfandel</Link>
        <Link to='/pol-clement-brut'>Pol Clement Brut</Link>

        {/* BEER */}
        <Link to='/eastbrother-bopils'>East Brother Bo Pils</Link>
        <Link to='/offshoot-relax'>Offshoot Relax</Link>
        <Link to='/coronado-weekend'>Coronado Weekend</Link>
        <Link to='/coronado-saltycrew'>Coronado Salty Crew</Link>
        <Link to='/almanac-sournova'>Almanac Sournova</Link>
        <Link to='/almanac-twilight'>Almanac Twilight</Link>
        <Link to='/almanac-love'>Almanac Love</Link>
        <Link to='/almanac-kolsch'>Almanac Kolsch</Link>
        <Link to='/avbc-pilsner'>AVBC Pilsner</Link>
        <Link to='/avbc-black-light'>AVBC Black Light</Link>
        <Link to='/avbc-coastal'>AVBC Coastal</Link>
        <Link to='/gs-wildone'>Gs Wild One</Link>
        <Link to='/kyla-lavendar'>Kyla Lavendar</Link>
        <Link to='/kyla-coco'>Kyla Coconut</Link>
        <Link to='/kyla-lychee'>Kyla Lychee</Link>
        <Link to='/kyla-sunset'>Kyla Sunset Trio</Link>
        
    </div>
  );
};

export default Home;
