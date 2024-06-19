// REACT
import React, { useState } from 'react';

// DATA 
import { description1, storeName, description2, message, rescanTheQRCodeFor } from './A-BacksideData';

// CSS
import styles from '../Cards/DryCreekChenin.module.css'; // Make sure to create a CSS file (e.g., FlipCard.css) for styling

// CARD
const DryCreekChenin = () => {
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
                                
                            <img className={styles.bottle} src={process.env.PUBLIC_URL + '/imgs/skus/drycreek_chenin.png'} alt="" />
                            
                            <div className={styles.cardBottomHalf}>
                                <h5 className={styles.ofAge}>• Must be 21 years or older to purchase •</h5>
                                <h3>Dry Creek Vineyard Chenin Blanc</h3>
                                <p className={styles.description}>Description</p>
                                <p className={styles.skuDescription}>This wine has refreshing flavors of cucumber, lime and nectarine with hints of sweet basil and ripe orange. The mouthfeel is soft but inviting, with a lively acidity. This classic, Loire Valley-style wine is excellent when paired with fresh oysters, seafood, or just about anything!</p>
                                <div className={styles.miniBoxContainer}>
                                    <div className={styles.miniBox1}>
                                        <h4>Pairing</h4> 
                                        <hr />
                                        <h5 className={styles.pairing}>Cod / Chicken<br />Citrus salad<br />Goat cheese</h5>
                                    </div>
                                    <div className={styles.miniBox2}>
                                        <h4>Origin</h4>
                                        <hr />
                                        <h5 className={styles.origin}>Healdsburg, CA</h5>
                                    </div>
                                    <div className={styles.miniBox3}>
                                        <h4>Taste</h4>
                                        <hr />
                                        <h5 className={styles.taste}>Light<br />Dry<br />Acidic</h5>
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

export default DryCreekChenin;