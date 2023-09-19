import React, { useState } from 'react';
import Link from 'next/link';


const Card = ({ product, onDelete, onUpdate }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handleDeleteClick = () => {
    onDelete(product.id);
  };

  const handleUpdateClick = () => {
    setShowUpdateForm(true);
  };

  return (
    <div className="card hover:shadow-lg p-4 mb-4 transition duration-300 ease-in-out transform hover:scale-105">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <div className="mt-2">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
        





      </div>

      {/* {showUpdateForm && (
        <UpdateForm product={product} onUpdate={onUpdate} />
      )} */}
    </div>

  );
};

export default Card;
