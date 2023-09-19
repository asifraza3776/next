// Navbar.js

import Link from 'next/link';
import React from 'react';

const Navlist = ({ onSelectCategory }) => {
  return (
    <nav className="bg-gray-800 p-4  flex justify-center">
      <ul className="flex space-x-4 text-white">
        <Link href="/mobile">
          Mobile
        </Link>
        <Link href="/shoes"
          className="flex space-x-4 text-white"
          
        >
          Shoes
        </Link>
        <Link href="/cloths"
          className="flex space-x-4 text-white"
        >
          Cloths
        </Link>

        
      </ul>

    </nav>

  );
};

export default Navlist;
