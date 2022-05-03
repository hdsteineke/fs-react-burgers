import React from 'react';

export default function SideDropdown({ setSideId }) {
  return (
    <div className='dropdown'>Side:
      <select onChange={(e) => setSideId(e.target.value)}>
        <option value='1'>Breadsticks</option>
        <option value='2'>Spring Rolls</option>
        <option value='3'>Chips and Salsa</option>
      </select>
    </div>
  );
}
