import React from 'react';

export default function OrderNameInput({ handleNameChange }) {
  return (
    <div>
        Name:
      <input onChange={handleNameChange} />
    </div>
  );
}
