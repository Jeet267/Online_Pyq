import React, { useState, useEffect } from 'react';
import SigninModal from './SigninModal';
import SignupModal from './SignupModal';

const Navbar = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) setUserName(name);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    localStorage.removeItem('userName');
    setUserName(null);
  };

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">PYQStore</div>

      <ul className="flex space-x-6 text-gray-700 font-medium items-center">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Subjects</li>
        <li className="hover:text-blue-600 cursor-pointer">About</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>

        {userName ? (
          <>
            <li className="text-blue-600 font-semibold">Welcome, {userName}</li>
            <li
              onClick={handleLogout}
              className="cursor-pointer bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
              Logout
            </li>
          </>
        ) : (
          <>
            <li
              onClick={() => setShowSignup(true)}
              className="cursor-pointer bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
              Signup
            </li>
            <li
              onClick={() => setShowSignin(true)}
              className="cursor-pointer bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
              Signin
            </li>
          </>
        )}
      </ul>

      {showSignup && <SignupModal onClose={() => setShowSignup(false)} />}
      {showSignin && (
        <SigninModal
          onClose={() => {
            setShowSignin(false);
            setUserName(localStorage.getItem('userName')); // update state after signin
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
