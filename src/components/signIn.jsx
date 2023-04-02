import React from 'react';
import { signInWithPopup } from "./firebase-config.jsx";
import { auth, provider } from './firebase-config'

function SignIn() {
  const signInWithGoogle = () => {
    signInWithPopup(auth,provider)
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Sign In</h1>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={signInWithGoogle}
      >
        Sign In With Google
      </button>
    </div>
  )
}

export default SignIn
