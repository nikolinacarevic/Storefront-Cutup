'use client';
import React, { useState } from 'react';

const QuantitySelector = ({ initialQuantity = 1, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    if (onQuantityChange) {
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div>
      <label htmlFor="quantity">Quantity: </label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        value={quantity}
        min="1"
        onChange={handleQuantityChange}
      />
    </div>
  );
};

export default QuantitySelector;