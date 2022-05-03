import React from 'react';

export default function DrinkDropdown({ setDrinkId }) {
  return (
    <div>Beverage:
      <select onChange={(e) => setDrinkId(e.target.value)}>
        <option value='1'>Sparkling Water</option>
        <option value='2'>Coke</option>
        <option value='3'>Green Tea</option>
      </select>
    </div>
  );
}
