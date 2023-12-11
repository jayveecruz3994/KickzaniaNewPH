import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import './ResponsiveNavbar.css'

const ResponsiveNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className={`responsive-navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="logo">Logo</div>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/shop" onClick={toggleMenu}>
          Shop
        </Link>
        <Link to="/about" onClick={toggleMenu}>
          About Us
        </Link>
        <Link to="/contact" onClick={toggleMenu}>
          Contact Us
        </Link>
      </div>
      <div className={`user-actions ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/profile" onClick={toggleMenu}>
          Profile
        </Link>
        <Link to="/favorites" onClick={toggleMenu}>
          Favorites
        </Link>
        <Link to="/cart" onClick={toggleMenu}>
          Cart
        </Link>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

  

export default ResponsiveNavbar