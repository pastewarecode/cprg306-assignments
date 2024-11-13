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
     <main>
          <header>
            <h1>Firebase authentication</h1>
          </header>
        
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <Link href="http://localhost:3000/week-9/protected"></Link>


          
        </div>
      </main>
    )
}