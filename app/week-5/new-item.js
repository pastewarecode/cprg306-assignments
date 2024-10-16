"use client";
import { useState } from 'react';

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

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

    const handleSubmit = (event) => {
      event.preventDefault(); 

      const item = {
          name: name,
          quantity: quantity,
          category: category,
      };

      console.log(item);

      alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

      setName("");
      setQuantity(1);
      setCategory("produce");
    };

    return (
      <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md bg-white">

        <div className="flex items-center">
          <p>Quantity: {quantity}</p>

          <button onClick={decrement} disabled={quantity === 1} className='p-2'>
          Decrease
          </button>

          <button onClick={increment} disabled={quantity === 20}>
          Increase
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter name" 
              required 
            />
          </div>

          <div>
            <label>Category:</label>
            <input 
              type="text" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
              placeholder="Enter category" 
              required 
            />
          </div>
          <button type="submit">Add Item</button>
        </form>
    
        <div>
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className='block w-full border border-gray-300 rounded-md p-2 max-w-[100px]'>
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
          </select>
        </div>
    
        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">Add Item</button>

      </div>
    );
  }