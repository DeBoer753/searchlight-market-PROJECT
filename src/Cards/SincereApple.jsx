// REACT
import React, { useState } from 'react';

// DATA
import { description1 } from './A-BacksideData';
import { description2 } from './A-BacksideData';
import { message } from './A-BacksideData';
import { rescanTheQRCodeFor } from './A-BacksideData';

// CSS
import styles from '../Cards/SincereApple.module.css'; // Make sure to create a CSS file (e.g., FlipCard.css) for styling

// CARD
const SincereApple = () => {
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
                                
                            <img src={process.env.PUBLIC_URL + '/imgs/skus/sincere_apple.png'} alt="" />
                            
                            <div className={styles.cardBottomHalf}>
                                <h5 className={styles.ofAge}>• Must be 21 years or older to purchase •</h5>
                                <h3>Sincere Cider Dry Apple</h3>
                                <p className={styles.description}>Description</p>
                                <p className={styles.skuDescription}>Sincere Cider's flagship apple cider is true to hard cider’s historical and agricultural roots. Made in California with a special blend of culinary apples and French wine yeast. Light, gluten free, portable, perfectly balanced, and decidedly fruit-driven.</p>
                                <div className={styles.miniBoxContainer}> 
                                    <div className={styles.miniBox1}> 
                                        <h4>Pairing</h4> 
                                        <hr />
                                        <h5 className={styles.pairing}>Brunch dishes<br />Lime roasted chicken<br />Creamy brie cheese</h5>
                                    </div>
                                    <div className={styles.miniBox2}>
                                        <h4>Origin</h4>
                                        <hr />
                                        <h5 className={styles.origin}>Oakland, CA</h5>
                                    </div>
                                    <div className={styles.miniBox3}>
                                        <h4>Taste</h4>
                                        <hr />
                                        <h5 className={styles.taste}>Apple<br />Crisp / Dry<br />Subtle tart</h5>
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

export default SincereApple;