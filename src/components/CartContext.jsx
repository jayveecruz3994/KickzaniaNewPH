import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
    
  const handleOnClose = () => {
        setIsCartOpen(false);
    }
  


  const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };
    
    const addToCart = (sneaker) => {
      setIsCartOpen(true);
      
      const existingItemIndex = cartItems.findIndex((item) => item.id === sneaker.id);

      if (existingItemIndex !== -1) {
        const updatedCart = [...existingCart, sneaker];
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;
        setCartItems(updatedCartItems);
        
      } else {
        setCartItems((prevItems) => [...prevItems, { ...sneaker, quantity: 1 }]);
        
      }
    };

    const removeFromCart = (itemId) => {
      const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedCartItems);
    };
  const clearCart = () => {
    setCartItems([]);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseInt(item.price), 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, isCartOpen, handleOnClose, calculateTotalPrice, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};