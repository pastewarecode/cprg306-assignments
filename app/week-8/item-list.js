"use client"
import { useState } from 'react';
import Item from './item';
    
export default function ItemList({items}) {

    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
        if(sortBy === "name")
        {
            return a.name.localeCompare(b.name);
        }
        else if (sortBy === "category")
        {
            return a.category.localeCompare(b.category);
        }

        return 0;
    });


    return (

        <div>
            <div className='p-4 font-bold border-2 border-black max-w-[200px] rounded-lg bg-blue-500'>
                <button className='p-1 mb-2 hover:bg-blue-700 border rounded-lg border-black bg-orange-600' onClick={() => setSortBy("name")}>
                    Sorting by name
                </button>

                <br></br>

                <button className='p-1 hover:bg-blue-700 border rounded-lg border-black bg-orange-600' onClick={() => setSortBy("category")}>
                    Sorting by category
                </button>
            </div>


            <ul className='space-y-4 p-4 text-lg'>
                {sortedItems.map((item, id) => (
                    <Item
                    key = {id}
                    name = {item.name}
                    quantity = {item.quantity}
                    category = {item.category}
                    />
                ))}
            </ul>
        </div>
    );
}