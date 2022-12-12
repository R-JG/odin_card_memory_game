import React from 'react';
import './Card.css';

export default function Card(props) {

    const { imageNumber } = props;

    return (
        <div className='card'>
            <img 
                src={require(`../images/${imageNumber}.jpg`)} 
                alt='card' 
            />
        </div>
    );
};