"use client"
import Link from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    //we want to use try and catch for async functions
    async function handleSignIn() {
      try 
      {
        // Sign in to Firebase with GitHub authentication (AWAIT STATEMENT MUST BE USED IN ASYNC FUNCTION)
        await gitHubSignIn();
      } 
      catch (error)
      {
        console.log(error);
      }
    }

    async function handleSignOut() {
      try
      {
        // Sign out of Firebase
        await firebaseSignOut();
      }
      catch (error)
      {
        console.log(error);
      }
    }


// Display some of the user's information
    return (
        <main className="mb-5">
            <header>
                <h1 className="text-3xl text-center">FireBase Authentication</h1>
            </header>
        
        {user ? 
        ( 
          <div>
            <div>
              <p>
                Welcome, {user.displayName} ({user.email})
              </p>
              <img src={user.photoUrl} className="ml-2 py-4 w-10 h-10"></img>
              <Link href="http://localhost:3000/week-9/shopping-list" className='underline text-blue'>Shopping List Page</Link>
            </div>

            <div>
              <button 
                type="button"
                className="text-lg bg-blue-600 text-white rounded px-2 py-1 ml-5"
                onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
          </div>
        ) 
        : 
        (
          <div>
            <button 
                type="button"
                className="text-lg bg-blue-600 text-white rounded px-2 py-1 ml-5"
                onClick={handleSignIn}>
                Sign In
            </button>
          </div>
        ) }

      </main>
    )
}