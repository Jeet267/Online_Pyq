import React, { useState, useEffect } from 'react';
import AuthContainer from './AuthContainer';

const Navbar = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) setUserName(name);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
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
          <li
            onClick={() => setShowAuth(true)}
            className="cursor-pointer bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          >
            Login / Signup
          </li>
        )}
      </ul>

      {showAuth && (
        <AuthContainer
          onClose={() => setShowAuth(false)}
          onSigninSuccess={() => {
            const name = localStorage.getItem('userName');
            setUserName(name);
            setShowAuth(false);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
