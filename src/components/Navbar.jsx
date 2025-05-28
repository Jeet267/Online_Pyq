import React, { useState } from 'react';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import SigninModal from './SigninModal';
import SignupModal from './SignupModal';

const Navbar = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">PYQStore</div>

      <ul className="flex space-x-6 text-gray-700 font-medium items-center">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Subjects</li>
        <li className="hover:text-blue-600 cursor-pointer">About</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>

        <SignedIn>
          <li>
            <UserButton afterSignOutUrl="/" />
          </li>
        </SignedIn>
        
        <SignedOut>
          <li>
            <button
              onClick={() => setShowSignIn(true)}
              className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Sign In
            </button>
            <button
              onClick={() => setShowSignUp(true)}
              className="cursor-pointer border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50"
            >
              Sign Up
            </button>
          </li>
        </SignedOut>
      </ul>

      {showSignIn && (
        <SigninModal
          onClose={() => setShowSignIn(false)}
          onSigninSuccess={() => setShowSignIn(false)}
          switchToSignup={() => {
            setShowSignIn(false);
            setShowSignUp(true);
          }}
        />
      )}

      {showSignUp && (
        <SignupModal
          onClose={() => setShowSignUp(false)}
          onSignupSuccess={() => setShowSignUp(false)}
          switchToSignin={() => {
            setShowSignUp(false);
            setShowSignIn(true);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
