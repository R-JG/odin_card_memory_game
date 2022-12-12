import React from 'react';
import './Card.css';

export default function Card(props) {

    const { 
        cardId, 
        cardIndex,
        imageNumber, 
        cardArray,
        gameState,
        setGameState,
        updateClickedCard, 
        shuffleCardArray 
    } = props;

    function handleClick() {
        if (cardArray[cardIndex].isClicked) {
            return setGameState({win: false, loss: true});
        };
        updateClickedCard(cardId);
        shuffleCardArray();
    };

    return (
        <div 
            className='card'
            onClick={
                (!gameState.win && !gameState.loss) 
                ? handleClick
                : undefined
        }>
            <img 
                src={require(`../images/${imageNumber}.jpg`)} 
                alt='card' 
            />
        </div>
    );
};