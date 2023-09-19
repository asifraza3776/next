import React, { useEffect, useState } from 'react';
import Card from './cards';

const ProductList = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // Fetch data from your server here and set it in the state.
    // For example, using fetch:
    fetch('http://localhost:4000/api/data') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  
  const filteredProducts = products.filter((product) => {
    // Filter products based on the selected category
    return product.category === selectedCategory;
  });
  
  const handleDelete = (productId) => {
    // Make a DELETE request to your backend API to delete the product
    fetch(`http://localhost:4000/api/data/${productId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // If the delete request was successful, update the state to remove the deleted product
          alert("data deleted")
          window.location.reload();
        } else {
          // Handle errors if neededs
          alert("Error")
          console.error('Error deleting product:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  };
  
  return (
    <div className="product-list flex flex-wrap -mx-2 mt-4">
      {products.map((product) => (
        <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4">
          <Card product={product} onDelete={()=>handleDelete(product.id)} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
