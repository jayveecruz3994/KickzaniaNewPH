import React from 'react'
import './checkout.css'
import { IoCloseSharp } from "react-icons/io5";
import Cart from '../components/Cart';
import { CartProvider, useCart } from '../components/CartContext';
import { Link } from 'react-router-dom';
import OrderConfirmationModal from '../components/OrderConfirmationModal';
import { useState } from 'react';

const Checkout = () => {
    const { cartItems, addToCart, removeFromCart, isCartOpen, handleOnClose, calculateTotalPrice } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

 

    return (
        <div className="checkout-container">
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} isCartOpen={isCartOpen} onClose={handleOnClose} />
            <div className="checkout-header">
                <h2>Checkout</h2>
            </div>
            <div className="checkout-content">
                <div className="checkout-items">
                    {cartItems && cartItems.length > 0 ? (
                        cartItems.map((sneaker) => (
                            <li key={sneaker.id}>
                                <div className="checkout-sneaker">
                                    <img src={sneaker.mainImageURL} alt="" />
                                    <div className="sneaker-information">
                                        <span>{sneaker.brand} {sneaker.name}</span>
                                    </div>
                                    <label htmlFor="size" className='sizes'>Choose a size: </label>
                                    <select name="Size" id="size">
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="9.5">9.5</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                    <span>Price: ₱{sneaker.price}</span>
                                    <button onClick={() => removeFromCart(sneaker.id)} style={{marginLeft: '20px'}} className='removeItem'><IoCloseSharp /></button>
                                </div>

                            </li>
                        ))
                    ) : (
                        <div className='emptyMessage'style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <p className='empty' style={{ marginBottom: '20px' }}>Your cart is empty.</p>
                            <Link to="/shop"><button className='backToShopBtn'>Go back to shop.</button></Link>
                        </div>
                    )}
                    
                    {cartItems && cartItems.length > 0 ? (
                        <div>
                            <hr />
                            <div className='total-Container'>
                            <p>Subtotal:  </p>
                            <span>  ₱{calculateTotalPrice()}</span>
                        </div>
                        </div>
                    ) : ('')}
                </div>
                <div className="checkout-form">
                        <h2>Shipping Details</h2>
                        <form action="" className='shippingDetails'>
                            <input type="text" placeholder='First Name' className='shippingFirstName' required/>
                            <input type="text" placeholder='Last Name' className='shippingLastName' required/>
                            <input type="text" placeholder='Street Address' className='streetAddress' required/>
                            <input type="text" placeholder='Town / City' className='city' required/>
                            <input type="text" placeholder='Country' className='country' required/>
                            <input type="text" placeholder='Zip Code' className='zipCode' required/>
                        </form>
                        <br />
                        <h2>Payment Method</h2>
                        <h5>Credit Card Information:</h5>
                        <form action="" className='paymentMethod'>
                            <input type="text" placeholder='Card Number'  className='cardNumber' required/>
                            <input type="text" placeholder='CVV' className='cvv' required />
                            <input type="month" className='expiryDate' placeholder='Expiry Date' required />
                            <button type='submit' className='placeOrder' onClick={handleModalOpen}>Place Order</button>
                        </form>
                        {isModalOpen && <OrderConfirmationModal closeModal={handleModalClose} />}
                </div>
            </div>
        </div>
    )
}

export default Checkout