// components/Button.js

import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-black text-white mt-5 hover:bg-gray-800 font-bold py-3 px-6 rounded-full text-lg mx-auto block"
     
    >
     Create Mobile 
    </button>
  );
};

export default Button;
