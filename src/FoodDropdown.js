import React from 'react';

export default function FoodDropdown({ setFoodId }) {
  return (
    <div>Entree: 
      <select onChange={(e) => setFoodId(e.target.value)}>
        <option value='1'>Pizza</option>
        <option value='2'>Tacos</option>
        <option value='3'>Pork Buns</option>
      </select>

    </div>
  );
}
