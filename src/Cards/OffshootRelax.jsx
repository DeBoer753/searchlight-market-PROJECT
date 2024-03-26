// REACT
import React, { useState } from 'react';

// DATA
import { message } from './A-BacksideData';

// CSS
import styles from '../Cards/OffshootRelax.module.css'; // Make sure to create a CSS file (e.g., FlipCard.css) for styling

// CARD
const OffshootRelax = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={styles.mainContainer}>
        

        <div className={styles.cardContainer}>
            <h1 className={styles.alert}>(Please return to vertical view)</h1>
            <div className={`${styles['flipCard']} ${isFlipped ? styles['flipped'] : ''}`} onClick={handleCardClick}>
                <div className={styles.flipCardInner}>




                    {/* Front side */}
                    <div className={styles.flipCardFront}>
                        <div className={styles.innerElement}>

                            <div className={styles.iconContainer}>
                                <div className={styles.tapIcon}>
                                    <img src={process.env.PUBLIC_URL + '/imgs/tap-icon.png'} alt="" />
                                </div>
                            </div>
                                
                            <img src={process.env.PUBLIC_URL + '/imgs/skus/offshoot_relax.png'} alt="" />
                            
                            <div className={styles.cardBottomHalf}>
                                <h5 className={styles.ofAge}>• Must be 21 years or older to purchase •</h5>
                                <h3>Offshoot Relax Hazy IPA</h3>
                                <p className={styles.description}>Description</p>
                                <p className={styles.skuDescription}>Whether you're looking to unwind by the waterfront at Crissy Field or simply seeking relaxation after a long day's work, Offshoot Relax Hazy IPA is the perfect choice.</p>
                                <div className={styles.miniBoxContainer}> 
                                    <div className={styles.miniBox1}>
                                        <h4>Pairing</h4> 
                                        <hr />
                                        <h5 className={styles.pairing}>Tacos<br />Shrimp skewers<br />Grilled veggies</h5>
                                    </div>
                                    <div className={styles.miniBox2}>
                                        <h4>Origin</h4>
                                        <hr />
                                        <h5 className={styles.origin}>Placentia, CA</h5>
                                    </div>
                                    <div className={styles.miniBox3}>
                                        <h4>Taste</h4>
                                        <hr />
                                        <h5 className={styles.taste}>Citrus<br />Smooth<br />Full Bodied</h5>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>




                    {/* Back side */}
                    <div className={styles.flipCardBack}>
                        <div>
                            <h1>Welcome to</h1>
                            <h2>SEARCHLIGHT MARKET</h2>

                            <h3>Hello, and welcome to Searchlight Market! My name is Myles and I am a full time sales rep / web developer hobbyist who created the card you are seeing now.</h3>
                            <h3>My goal is to help grow not only our portfolio of wines, beers, and spirits, but more importantly to grow the independent retail shops we know and love here in San Francisco through a digital perspective.</h3>
                            <img src={process.env.PUBLIC_URL + '/imgs/message-icon.png'} alt="" />
                            <h3 style={{ fontStyle: 'italic' }}>{message}</h3>
                            <img src={process.env.PUBLIC_URL + '/imgs/events-icon.png'} alt="" />
                            <h3 className={styles.rescan}>Rescan the QR codes during holidays and public events for updated themes and messages!</h3>
                        </div>
                    </div>




                </div>
            </div>
        </div>

    </div>
  );
};

export default OffshootRelax;