import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold text-indigo-700">Edu-Mantra</h1>
      <ul className="flex space-x-6 text-sm font-medium">
        <li><a href="#home" className="text-gray-700 hover:text-indigo-600">Home</a></li>
        <li><a href="#order" className="text-gray-700 hover:text-indigo-600">Assignments</a></li>
        <li><a href="#order" className="text-gray-700 hover:text-indigo-600">Notes</a></li>
        <li><a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a></li>
        
      </ul>

    </nav>
  );
};

export default Navbar;
