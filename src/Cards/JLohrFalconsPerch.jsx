// REACT
import React, { useState } from 'react';

// DATA
import { description1 } from './A-BacksideData';
import { description2 } from './A-BacksideData';
import { message } from './A-BacksideData';
import { rescanTheQRCodeFor } from './A-BacksideData';

// CSS
import styles from '../Cards/JLohrFalconsPerch.module.css'; // Make sure to create a CSS file (e.g., FlipCard.css) for styling

// J LOHR FALCONS PERCH
const JLohrFalconsPerch = () => {
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
                                
                            <img src={process.env.PUBLIC_URL + '/imgs/skus/jlohr_falcons_perch.png'} alt="" />
                            
                            <div className={styles.cardBottomHalf}>
                                <h5 className={styles.ofAge}>• Must be 21 years or older to purchase •</h5>
                                <h3>J. Lohr Falcons Perch Pinot Noir</h3>
                                <p className={styles.description}>Description</p>
                                <p className={styles.skuDescription}>Falcon's Perch Pinot Noir brings a touch of tranquility while looking out at the city lights from your window. Let the velvety textures and nuanced flavors turn everyday moments into memories within the comfort of your San Francisco abode.</p>
                                <div className={styles.miniBoxContainer}>
                                    <div className={styles.miniBox1}>
                                        <h4>Pairing</h4> 
                                        <hr />
                                        <h5 className={styles.pairing}>Salmon<br />Mushroom risotto<br />Chocolate cake</h5>
                                    </div>
                                    <div className={styles.miniBox2}>
                                        <h4>Origin</h4>
                                        <hr />
                                        <h5 className={styles.origin}>Paso Robles, CA</h5>
                                    </div>
                                    <div className={styles.miniBox3}>
                                        <h4>Taste</h4>
                                        <hr />
                                        <h5 className={styles.taste}>Light<br />Smooth<br />Acidic</h5>
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

export default JLohrFalconsPerch;