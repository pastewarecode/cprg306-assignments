import React from 'react';

export default function Item({name, quantity, category}) {   //name, quantity, category are props  
    return (
        <li className='border-2 border-l-4 max-w-[300px] p-2 rounded-xl'>
            <div>
                <h3 className='font-semibold'>{name}</h3>
                <span>Quantity: {quantity}</span>
                <p>Category: {category}</p>
            </div>
        </li>
    );
}