import React, { useState } from 'react';

const CardForm = ({ onAddCard }) => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onAddCard function to add the new card
    onAddCard(formData);
    // Clear the form fields
    setFormData({
      name: '',
      image: '',
      price: '',
      description: '',
    });
  };

  return (
    <div>
      <h2>Add a New Card</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
};

export default CardForm;
