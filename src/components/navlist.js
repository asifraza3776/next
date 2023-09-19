// Navbar.js

import Link from 'next/link';
import React from 'react';

const Navlist = ({ onSelectCategory }) => {
  return (
    <nav className="bg-gray-800 p-4 ">
      <ul className="flex space-x-4 text-white">
        <Link href="/mobile">
          Mobile
        </Link>
        <li
          className="cursor-pointer"
          onClick={() => onSelectCategory('shoes')}
        >
          Shoes
        </li>
        <li
          className="cursor-pointer"
          onClick={() => onSelectCategory('cloth')}
        >
          Cloth
        </li>
      </ul>
    </nav>
  );
};

export default Navlist;
