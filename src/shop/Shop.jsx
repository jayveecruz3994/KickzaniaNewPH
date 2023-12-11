import React, { useState, useEffect } from 'react';
import SneakerFilter from '../components/SneakerFilter';
import './shop.css'
import axios from 'axios';
import { HiOutlineShoppingBag } from "react-icons/hi";
import Cart from '../components/Cart';
import Navbar from '../components/Navbar';
import { CartProvider } from '../components/CartContext';
import { useCart } from '../components/CartContext';
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Shop = () => {
  const [sneakers, setSneakers] = useState([]);
  const [filteredSneakers, setFilteredSneakers] = useState([]);
  const { cartItems, addToCart, removeFromCart, isCartOpen, handleOnClose } = useCart();
  console.log(cartItems);



  <Navbar cartItems={cartItems} removeFromCart={removeFromCart} />

  React.useEffect(() => {
    axios.get('src/assets/data/sneakersList.json').then((response) => {
      setSneakers(response.data);
      setFilteredSneakers(response.data);
    });
  }, []);

  const handleFilterChange = (filters) => {
    // Update the displayed sneakers based on the applied filters
    const filteredData = sneakers.filter((sneaker) => {
      const filterBrand = filters.brands.length === 0 || filters.brands.includes(sneaker.brand);
      const filterColor = filters.colors.length === 0 || filters.colors.includes(sneaker.color);
      const filterMinPrice = filters.minPrice === '' || sneaker.price >= parseFloat(filters.minPrice);
      const filterMaxPrice = filters.maxPrice === '' || sneaker.price <= parseFloat(filters.maxPrice);

      return filterBrand && filterColor && filterMinPrice && filterMaxPrice;
    });

    setFilteredSneakers(filteredData);
  };
  return (

    <div className='shop-container'>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} isCartOpen={isCartOpen} onClose={handleOnClose} />
      <div className="shop-header">
        <h2>SHOP</h2>
      </div>
      <div className="shop-content-container">
        <div className="filter-container">
          <SneakerFilter onFilterChange={handleFilterChange} />
        </div>
        <div className="shop-content">

          <ul>
            {filteredSneakers.map((sneaker) => (
              <li key={sneaker.id}>
                <div className='sneaker-card'>
                  <div className="card-image">
                    <img src={sneaker.mainImageURL} alt="" />
                  </div>
                  <div className="card-body">
                    <span className="sneakerName">
                      {sneaker.name}
                    </span><br />
                    <span className='sneakerBrand'>
                      {sneaker.brand}
                    </span><br /><br />
                    <span className="sneakerPrice">
                      Price: {sneaker.price}
                    </span>
                    <button className='addToCartBtn' onClick={() => { addToCart(sneaker) }}> <TiShoppingCart style={{ fontSize: '1.2rem' }} /> Add to Cart</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

        </div>

      </div>
    </div>
  );
}

export default Shop