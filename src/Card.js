import React from 'react';

const Card = () => {

    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src= 'https://robohash.org/myrobofriend?200x200'/>
            <div>
                <h2>Robo name</h2>
                <p>robot@emailaddress.com</p>
            </div>
        </div>
    );

}

export default Card;