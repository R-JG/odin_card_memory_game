import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import { nanoid } from 'nanoid';
import './App.css';

export default function App() {

    const [ cardArray, setCardArray ] = useState(generateNewCardArray());
    const [ currentScore, setCurrentScore ] = useState(0);
    const [ gameState, setGameState ] = useState({win: false, loss: false});

    useEffect(() => {
        let newScore = 0;
        for (let i = 0; i < cardArray.length; i++) {
            if (cardArray[i].isClicked) newScore++;
        };
        setCurrentScore(newScore);
    }, [cardArray]);

    useEffect(() => {
        if (currentScore === 22) setGameState({win: true, loss: false});
    }, [currentScore]);

    function generateNewCardArray() {
        return Array.from({length: 22}, (item, index) => (
            {
                id: nanoid(), 
                imageNumber: index, 
                isClicked: false
            }
        ));
    };

    function shuffleCardArray() {
        setCardArray((prevArray) => {
            let newArray = [...prevArray];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            };
            return newArray;
        });
    };

    function updateClickedCard(clickedCardId) {
        setCardArray((prevArray) => prevArray.map((card) => {
            return (clickedCardId === card.id) 
                ? {...card, isClicked: true}
                : card;
        }));
    };

    function resetGame() {
        setCardArray(generateNewCardArray());
        setCurrentScore(0);
        setGameState({win: false, loss: false});
    };

    const cardComponents = cardArray.map((card, index) => (
        <Card 
            key={card.id}
            cardId={card.id}
            cardIndex={index}
            imageNumber={card.imageNumber}
            cardArray={cardArray}
            gameState={gameState}
            setGameState={setGameState}
            updateClickedCard={updateClickedCard}
            shuffleCardArray={shuffleCardArray}
        />
    ));

    return (
        <main className={
            ((gameState.win && 'game-win') 
            || (gameState.loss && 'game-loss')) 
            || ''
        }>
            <h1>{`Score: ${currentScore}`}</h1>
            {gameState.win && <h1>You Win</h1>}
            {gameState.loss && <h1>Game Over</h1>}
            {(!gameState.win && !gameState.loss) || <button onClick={resetGame}>Play Again</button>}
            <p>Click on each of the 22 major arcana of the Tarot only once until all are clicked.</p>
            <div className='cards-container'>
                {cardComponents}
            </div>
        </main>
    );
};