import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">

      <div className="text-2xl font-bold text-blue-600">
        PYQStore
      </div>


      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Subjects</li>
        <li className="hover:text-blue-600 cursor-pointer">About</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>

    
    </nav>
  );
};

export default Navbar;
