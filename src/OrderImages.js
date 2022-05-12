import React from 'react';

export default function OrderImages({ foodId, sideId, drinkId }) {
  return (
    <div className="order-images">
      <h3>Your Order:</h3>
      <img src={`food-${foodId}.PNG`} />
      <img src={`side-${sideId}.PNG`} />
      <img src={`drink-${drinkId}.PNG`} />
    </div>
  );
}
