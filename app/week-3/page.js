import React from 'react';
import ItemList from './item-list';

export default function Page() {

    return (
        <main className='bg-blue-400'>
            <h1 className='text-3xl font-bold p-2'>Shopping List</h1>
            <ItemList></ItemList>
        </main>
    )
}