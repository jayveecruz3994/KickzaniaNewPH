import React from 'react';
import { useCart } from './CartContext';

const CartCounter = () => {
  const { cartItems } = useCart();

  return (
    <div>
      {cartItems.length > 0 && (
        <span>{cartItems.length}</span>
      )}
    </div>
  );
};

export default CartCounter;
