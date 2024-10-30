import React from 'react';

export default function Item({name, quantity, category}) {

    return (
        <div>
            <li>
                <h3>{name}</h3>
                <span>Quantity: {quantity}</span>
                <p>Category: {category}</p>
            </li>
        </div>
    )
}