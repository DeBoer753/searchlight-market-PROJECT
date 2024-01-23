// REACT
import React, { useState } from 'react';

// CSS
import styles from '../Cards/JChardonnay.module.css'; // Make sure to create a CSS file (e.g., FlipCard.css) for styling

// J CHARDONNAY
const JChardonnay = () => {
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
                                
                            <img src={process.env.PUBLIC_URL + '/imgs/skus/j_chardonnay.png'} alt="" />
                            
                            <div className={styles.cardBottomHalf}>
                                <h5 className={styles.ofAge}>• Must be 21 years or older to purchase •</h5>
                                <h3>J Chardonnay</h3>
                                <p className={styles.description}>Description</p>
                                <p className={styles.skuDescription}>This wine is perfect for unwinding after a day's work or pairing with a delightful meal. Whether you're enjoying a quiet night in or celebrating small victories, J Chardonnay adds a touch of sophistication to your moment.</p>
                                <div className={styles.miniBoxContainer}>
                                    <div className={styles.miniBox1}>
                                        <h4>Pairing</h4> 
                                        <hr />
                                        <h5 className={styles.pairing}>Roasted chicken<br />Risotto<br />Brie cheese</h5>
                                    </div>
                                    <div className={styles.miniBox2}>
                                        <h4>Origin</h4>
                                        <hr />
                                        <h5 className={styles.origin}>Healdsburg, CA</h5>
                                    </div>
                                    <div className={styles.miniBox3}>
                                        <h4>Taste</h4>
                                        <hr />
                                        <h5 className={styles.taste}>Bold<br />Dry<br />Soft</h5>
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
                            <h3>Searchlight Market is ran by an incredible team who are always there to help their customers. If you have any questions, feel free to reach out to anyone on the floor!</h3>
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

export default JChardonnay;