import React from 'react'
import './Home.css'
import HeroSection from '../components/HeroSection'
import HottestPairs from '../components/HottestPairs'
import BrandSlider from '../components/BrandSlider'
import { CartProvider, useCart } from '../components/CartContext';
import Cart from '../components/Cart';

const Home = () => {
  const { cartItems, addToCart, removeFromCart, isCartOpen, handleOnClose } = useCart();
  
  return (
    <>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} isCartOpen={isCartOpen} onClose={handleOnClose}/>
      <HeroSection />
      <HottestPairs />
      <BrandSlider />
    </>

  )
}

export default Home