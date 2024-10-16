"use client";

import { useState } from 'react';

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity((modQuantity) => {
        if (modQuantity < 20) {
            return modQuantity + 1;
        }

        return modQuantity;  
        });
    };

    const decrement = () => {
        setQuantity((modQuantity) => {
        if (modQuantity > 1) {
            return modQuantity - 1;
        }

        return modQuantity;  
        });
    };



    return (
      <div>
        <p>Quantity: {quantity}</p>

        <button onClick={decrement} disabled={quantity === 1} className='p-2'>
        Decrease
        </button>

        <button onClick={increment} disabled={quantity === 20}>
        Increase
        </button>
      </div>
    );
  }