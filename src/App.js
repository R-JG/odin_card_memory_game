import React, { useState } from 'react';
import Card from './components/Card';
import { nanoid } from 'nanoid';
import './App.css';

export default function App() {

    const [ cardArray, setCardArray ] = useState(
        Array.from({length: 22}, () => (
            {id: nanoid(), isClicked: false}
        ))
    );

    const cardComponents = cardArray.map((card, index) => (
        <Card 
            key={card.id}
            imageNumber={index}
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