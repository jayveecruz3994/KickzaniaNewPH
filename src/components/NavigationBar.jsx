import React from 'react'
import logoblue from '../assets/images/logoblue.png'
import './NavigationBar.css'
import { useState, useEffect } from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../config/firebase'
import { FaCaretDown } from "react-icons/fa";
import CartCounter from './CartCounter';
import { CartProvider } from './CartContext';
import { useCart } from '../components/CartContext';
import { Link } from 'react-router-dom';




const NavigationBar = () => {
    const [isDropDownOpen, setIsDropDrownOpen] = useState(false);
    const [user, setUser] = useState(null);
    const {toggleCart} = useCart();
    const [isSignOutOpen, setSignOutOpen] = useState(false);
    const { cartItems, calculateTotalPrice } = useCart();

    const toggleSignOut = () => {
        setSignOutOpen(!isSignOutOpen)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            setUser(authUser);
        });

        return () => unsubscribe();
    }, []);

   


    const toggleDropdown = () => {
        setIsDropDrownOpen(!isDropDownOpen);
    };
    const handleMouseEnter = () => {
        setIsDropDrownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropDrownOpen(false);
    };

    const handleSignOut = async () => {
        await signOut(auth);
        window.location.href = '/'

    }
    


    return (
        
        <div className="navbar-container">
            <div className="nav-bar">
                <div className="logo-container">
                    <a href="/"><img src={logoblue} alt="" /></a>
                </div>
                <div className="nav-menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <span id="menu-icon">
                        <button className="menuBtn"> &#9776; Menu</button>
                    </span>
                    {isDropDownOpen && (
                        <ul className="dropdown-menu">
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/shop">SHOP</Link></li>
                            <li>Store Location</li>
                            <li>Contact Us</li>
                        </ul>
                    )}
                </div>
                <div className="searchbox-container">
                    <input type="text" name="searchBox" id="" placeholder='Search sneakers here...' />
                    <button className='searchIcon'><IoMdSearch style={{ fontSize: '30px' }} /></button>
                </div>
                <div className="account-container">
                    <div className="account-icon">
                        <FaRegUser style={{ color: '#1141BE', fontSize: '30px' }} />
                    </div>
                    <div className="account-content">
                        <p>Account</p>
                        {user ? (
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <button className='user-account'>{user.email}</button>
                                <div><button onClick={handleSignOut} className='SignOut'>Sign Out</button></div>
                            </div>
                            
                        ) : (
                            <Link to = "/login">Log in</Link>
                        )}
                    </div>
                </div>
                <div className="cart-icon-container">
                    <div className="cart-icon">
                        <button className='cartToggler' onClick={toggleCart}><TiShoppingCart style={{ color: '#1141BE', fontSize: '30px' }} /></button>
                        <CartCounter/>
                    </div>
                    <div className="cart-content">
                        <p>Cart</p>
                        <span>₱{calculateTotalPrice()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar