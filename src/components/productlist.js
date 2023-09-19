import React, { useEffect, useState } from 'react';
import Card from './cards';
import Button from './button';
import Link from 'next/link';
// import axios from 'axios';

const ProductList = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4001/api/data')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get('http://localhost:4001/api/data');
  //     const data = await response.json();
  //     setProducts(data);
  //   };

  //   fetchData();
  // }, []);

  console.log('products', products)

  console.log('products', products)
  // const filteredProducts = products.filter((product) => {
  //   return product.category === selectedCategory;
  // });

  const handleDelete = (productId) => {
    fetch(`http://localhost:4001/api/data/${productId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          alert("Data deleted");
          window.location.reload();
        } else {
          alert("Error");
          console.error('Error deleting product:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  };

  return (
    <>

      {/* <link to="/createProduct">Create</link> */}
      <Link href="/CreateProduct"><Button>Create </Button></Link>

      <div className="product-list flex flex-wrap -mx-2 mt-4">
        {products.map((product) => (
          <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4">
            <Card product={product} onDelete={() => handleDelete(product.id)} />
          </div>
        ))}
        {/* {
        products.filter().map((P) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            <h1 key={P.id}>{P.id}</h1>
          </div>
        ))
      } */}
      </div>
    </>
  );
};

export default ProductList;


