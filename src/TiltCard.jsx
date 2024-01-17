
import React, { useState } from 'react';
// import './TiltCard.css';




const FloatingCard = () => {

  return (
    <body>

        <h1>Welcome to</h1>
        <h2>SEARCHLIGHT MARKET</h2>

        <div className="floating-card-container">
            <div className={`floating-card`}>

                <div className="inner-element">
                    <img src={process.env.PUBLIC_URL + '/imgs/lamarca750.PNG'} alt="" />
                    
                    <div className='card-bottom-half'>
                        <h3>La Marca</h3>
                        <p className='description'>Description</p>
                        <p className='sku-description'>La Marca Prosecco boasts a delightful taste that embodies Italian craftsmanship. Its crisp and refreshing profile balances fruity notes of green apple and juicy citrus, complemented by subtle floral undertones.</p>
                        <div className='mini-box-container'>
                            <div className='mini-box-1'>
                                <h4>Origin</h4>
                                <hr />
                                <h5 className='origin'>Prosecco, Italy</h5>
                            </div>
                            <div className='mini-box-2'>
                                <h4>Score</h4> 
                                <hr />
                                <h5 className='score'>3.8 / 5</h5>
                                <h6>• 30K+ Ratings on Vivino •</h6>
                            </div>
                            <div className='mini-box-3'>
                                <h4>Taste</h4>
                                <hr />
                                <h5 className='taste'>Light<br />Acidic<br />Fizzy</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </body>
  );
};

export default FloatingCard;