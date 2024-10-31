"use client"

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    

    // Sign in to Firebase with GitHub authentication (AWAIT STATEMENT MUST BE USED IN ASYNC FUNCTION)
    await gitHubSignIn();
    

    // Sign out of Firebase
    await firebaseSignOut();
 


// Display some of the user's information
    return (
     <main>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>;
      </main>
    )
}