"use client"
import { useUserAuth } from "../_utils/auth-context"
import Link from "next/link"

//import getItems and addItem from newly created shopping-list-service.js
import { getItems, addItem } from "../_services/shopping-list-service"
import { useEffect } from "react"
import NewItem from "@/app/week-4/new-item"

export default function ProtectedPage() {

        //custom hook we created
        const {user} = useUserAuth();

        async function loadItems() {
            const userItems = getItems(user.uid);
            setItems(userItems);
        }

        useEffect( () => { 
            //if component is mounted, call function "loadItems"
            if (user && user.uid)
            {
                loadItems();
            }
        }, [user] );

        async function handleAddItem(newItem) {

            try
            {
            const itemId = await addItem(user.uid, newItem)

            const itemWithId = { ...newItem, id: itemId };

            setItems((prevItems) => [...prevItems, itemWithId]);
            }
            catch(error)
            {
                console.log(error);
            }
        }

    return (
        <main className="mb-5">
            <header>
                <h1>Protected Page</h1>
            </header>

            {user ? 
            (
                <div>
                    <p>Hello, {user.displayName}, your user ID is: {user.uid}</p>                 
                </div>
            ) 
            : 
            (
                <div>
                    <p>You must be logged in to view this page</p>
                    <Link href="http://localhost:3000/week-9/" className="underline text-blue">Click here to return to the Sign In page.</Link>
                </div>
            )}
        </main>
    )
}