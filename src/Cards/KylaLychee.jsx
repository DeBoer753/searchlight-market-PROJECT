// REACT
import React, { useState } from 'react';

// DATA
import { description1, storeName } from './A-BacksideData';
import { description2 } from './A-BacksideData';
import { message } from './A-BacksideData';
import { rescanTheQRCodeFor } from './A-BacksideData';

// CSS
import styles from '../Cards/KylaLychee.module.css'; // Make sure to create a CSS file (e.g., FlipCard.css) for styling

// CARD
const KylaLychee = () => {
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
                                
                            <img src={process.env.PUBLIC_URL + '/imgs/skus/kyla_lychee.png'} alt="" />
                            
                            <div className={styles.cardBottomHalf}>
                                <h5 className={styles.ofAge}>• Must be 21 years or older to purchase •</h5>
                                <h3>Kyla Kombucha Lychee Lemonade</h3>
                                <p className={styles.description}>Description</p>
                                <p className={styles.skuDescription}>Kyla Kombucha, a Gold Medal Winner at the 2021 U.S. Open Hard Kombucha Championship.With its vibrant taste and rejuvenating qualities, every sip is a journey to paradise. Enjoy it chilled for a refreshing escape whenever the moment calls for a taste of tropical bliss.</p>
                                <div className={styles.miniBoxContainer}> 
                                    <div className={styles.miniBox1}>
                                        <h4>Pairing</h4> 
                                        <hr />
                                        <h5 className={styles.pairing}>Cocount shrimp<br />Avocado salad<br />Creamy brie cheese</h5>
                                    </div>
                                    <div className={styles.miniBox2}>
                                        <h4>Origin</h4>
                                        <hr />
                                        <h5 className={styles.origin}>Hood River, OR</h5>
                                    </div>
                                    <div className={styles.miniBox3}>
                                        <h4>Taste</h4>
                                        <hr />
                                        <h5 className={styles.taste}>Lychee<br />Lemon<br />Rose water</h5>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>




                    {/* Back side */}
                    <div className={styles.flipCardBack}>
                        <div>
                            <h1>Welcome to</h1>
                            <h2>{storeName}</h2>
                            <h3>{description1}</h3>
                            <h3>{description2}</h3>
                            <img src={process.env.PUBLIC_URL + '/imgs/message-icon.png'} alt="" />
                            <h3 style={{ fontStyle: 'italic' }}>{message}</h3>
                            <img src={process.env.PUBLIC_URL + '/imgs/events-icon.png'} alt="" />
                            <h3 className={styles.rescan}>{rescanTheQRCodeFor}</h3>
                        </div>
                    </div>




                </div>
            </div>
        </div>

    </div>
  );
};

export default KylaLychee;