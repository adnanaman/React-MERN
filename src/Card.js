import React from 'react';
const Card = ({ name, code, supply, price }) => {
    return (        
            <div>
                <div>
                    <img src='https://robohash.org/bitcoin?50x50' alt='bitcoin' ></img>
                </div>
                <h2>{name}</h2><p>{code}</p><p>{supply}</p><p>{price}</p>
            </div>
    );
}
export default Card;