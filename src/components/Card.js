import React from 'react';
import './Card.css';

export default function Card(props) {

    const { 
        cardId, 
        imageNumber, 
        updateClickedCard, 
        shuffleCardArray 
    } = props;

    return (
        <div 
            className='card'
            onClick={() => {
                updateClickedCard(cardId);
                shuffleCardArray();
            }}
        >
            <img 
                src={require(`../images/${imageNumber}.jpg`)} 
                alt='card' 
            />
        </div>
    );
};