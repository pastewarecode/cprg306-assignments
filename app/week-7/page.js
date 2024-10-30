"use client";
import { useState, useEffect } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

export default function Page() {

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (item) => {
        setItems((prevItems) => [...prevItems ,item])
    };

    return (
        <main className='bg-blue-400'>
            <h1 className='text-3xl font-bold p-2'>Shopping List</h1>

            {/*passing handleAddItem as a prop defined in <NewItem></NewItem>*/}
            <NewItem onAddItem={handleAddItem}/>
            
             {/*passing items as a prop defined in <ItemList/>*/}
            <ItemList items={items}/>
        </main>
    )
}