// REACT
import React, { useState } from 'react';

// CSS
import '../Cards/LaMarcaProsecco.css'; // Make sure to create a CSS file (e.g., FlipCard.css) for styling

// LAMARCA PROSECCO
const LaMarcaProsecco = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className='main-container'>
        

        <div className="card-container">
            <h1 className='alert'>(Please return to vertical view)</h1>
            <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
                <div className="flip-card-inner">




                    {/* Front side */}
                    <div className="flip-card-front">
                        <div className="inner-element">

                            <div className='icon-container'>
                                <div className='tap-icon'>
                                    <img src={process.env.PUBLIC_URL + '/imgs/tap-icon.png'} alt="" />
                                </div>
                            </div>
                                
                            <img src={process.env.PUBLIC_URL + '/imgs/skus/lamarca_prosecco.png'} alt="" />
                            
                            <div className='card-bottom-half'>
                                <h3>La Marca</h3>
                                <p className='description'>Description</p>
                                <p className='sku-description'>Elevate any occasion with the refreshing bubbles of La Marca, a sparkling touch to your favorite dishes. Everything from crisp salads to seafood delights. Cheers to an effortlessly elegant experience!</p>
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




                    {/* Back side */}
                    <div className="flip-card-back">
                        <div>
                            <h1>Welcome to</h1>
                            <h2>SEARCHLIGHT MARKET</h2>

                            <h3>Hello, and welcome to Searchlight Market! My name is Myles and I am a full time sales rep / web developer hobbyist who created the card you are seeing now.</h3>
                            <h3>My goal is to help grow not only our portfolio of wines, beers, and spirits, but more importantly to grow the independent retail shops we know and love in the Bay Area through digital perspective.</h3>
                            {/* <h3>Take a look around the rest of the store to find more great beverages of ours.</h3> */}
                            <h3>•</h3>
                            <h3>Searchlight Market is ran by an incredible team who are always there to help their customers. If you have any questions, feel free to reach out to anyone on the floor!</h3>
                        </div>
                    </div>




                </div>
            </div>
        </div>

    </div>
  );
};

export default LaMarcaProsecco;