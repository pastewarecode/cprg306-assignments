"use client";
import { useState, useEffect } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

export default function Page() {

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('')

    const handleAddItem = (item) => {
        setItems((prevItems) => [...prevItems ,item])
    };

    //event handler
    const handleItemSelect = (selectedItemName) => {
        const cleanedName = selectedItemName
        .split(',')[0]
        .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '')
        .trim();

        setSelectedItemName(cleanedName);
    }

    return (
        <main className='bg-blue-400'>
            <h1 className='text-3xl font-bold p-2'>Shopping List</h1>
            <div className='flex'>
                <div>
                    {/*passing handleAddItem as a prop defined in <NewItem></NewItem>*/}
                    <NewItem onAddItem={handleAddItem}/>
                    
                    {/*passing items as a prop defined in <ItemList/>*/}
                    <ItemList items={items} onItemSelect={handleItemSelect}/>
                </div>

                <div className='p-6 text-2xl'>
                    <MealIdeas ingredient={selectedItemName}/>
                </div>
            </div>
        </main>
    )
}