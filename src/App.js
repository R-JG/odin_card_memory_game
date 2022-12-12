import React, { useState } from 'react';
import Card from './components/Card';
import { nanoid } from 'nanoid';
import './App.css';

export default function App() {

    const [ cardArray, setCardArray ] = useState(
        Array.from({length: 22}, (item, index) => (
            {
                id: nanoid(), 
                imageNumber: index, 
                isClicked: false
            }
        ))
    );

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

    const cardComponents = cardArray.map((card) => (
        <Card 
            key={card.id}
            cardId={card.id}
            imageNumber={card.imageNumber}
            updateClickedCard={updateClickedCard}
            shuffleCardArray={shuffleCardArray}
        />
    ));

    return (
        <main>
            <div className='cards-container'>
                {cardComponents}
            </div>
        </main>
    );
};