import React from 'react';

export default function Item({name, quantity, category}) {   //name, quantity, category are props  
    return (
        <li>
            <div>
                <h3>{name}</h3>
                <span>Quantity: {quantity}</span>
                <p>Category: {category}</p>
            </div>
        </li>
    );
}