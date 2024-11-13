"use client"
import { useUserAuth } from "../_utils/auth-context"
import Link from "next/link"

export default function ProtectedPage() {

        //custom hook we created
        const {user} = useUserAuth();

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