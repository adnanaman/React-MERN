import React from 'react';
import Card from './Card';

const CardList = ({ coins }) => {
    const coinComponent = coins.map((coin, i) => {
        return  <Card key={i} name={coins[i].name} code={coins[i].code}
        supply={coins[i].supply} price={coins[i].price}></Card>
    })
    return (        
            <div>
               {coinComponent}
            </div>
    );
}
export default CardList; 