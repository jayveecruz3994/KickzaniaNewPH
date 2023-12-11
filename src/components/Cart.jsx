import React from 'react'
import './Cart.css'
import { useState, useEffect} from 'react';
import Navbar from './Navbar';
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';




const Cart = ({ isCartOpen, onClose, cartItems, removeFromCart }) => {
  


  return (
    <div className={`cart ${isCartOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button onClick={onClose}>Close</button>
      </div>
      <ul>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((sneaker) => (
            <li key={sneaker.id}>
              <div className="cart-item-container container">
                  <div className="cart-item-image">
                    <img src={sneaker.mainImageURL} alt="" />
                  </div>
                  <div className="cart-item-details-container container">
                    <p>{sneaker.name}</p>
                    <p className='sneakerBrand'>{sneaker.brand}</p><br />
                    <p>PHP {sneaker.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(sneaker.id)} className='removeBtn'><IoCloseSharp /></button>
              </div>
              <hr />
            </li>
          ))
        ) : (
          <p className='empty'>Your cart is empty.</p>
        )}
      </ul>
      <div className="check-out-button-container">
        <Link to ="/checkout"><button className='checkout-button'>Checkout</button></Link>
      </div>
    </div>
  );
};
export default Cart