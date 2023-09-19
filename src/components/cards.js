import React from 'react';

const Card = ({ product, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(product.id); // Call the onDelete function with the product ID
  };

  return (
    <div className="card hover:shadow-lg p-4 mb-4 transition duration-300 ease-in-out transform hover:scale-105">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Description: {product.desc}</p>
      <div className="mt-2">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleDeleteClick} // Call handleDeleteClick when the button is clicked
        >
          Delete
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => onUpdate(product.id)} // Assuming onUpdate is a function that handles the update action
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Card;
