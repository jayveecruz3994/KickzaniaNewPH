import React from 'react'
import logo from '../assets/images/logo.png'
import './Navbar.css'
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Cart from './Cart';
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { auth } from '../config/firebase'
import { FcGoogle } from "react-icons/fc";
import { signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Login from '../login/Login';



const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState({signedIn})
    const handleOnClose = () => {
        setIsCartOpen(false);
    }

    const handleSignOut = async () => {
        await signOut(auth);
        window.location.href = '/'
        setLoggedIn(false);
        
    }
    console.log(isLoggedIn);

    const toggleCart = () => {

        setIsCartOpen(!isCartOpen);
    };
    
    return (
        <div className="nav-container container">
            <Cart isCartOpen={isCartOpen} onClose={handleOnClose} />
            <div className='nav-top'>
                <div className="nav-top-buttons">
                    {isLoggedIn ? (
                        <div>
                            <button className='nav-top-login' onClick={handleSignOut}>SIGN OUT</button>
                        </div>
                    ) : (
                        <div>
                            <a href="/login"><button className='nav-top-login'>SIGN IN</button></a>
                            <a href="/signup"><button className='nav-top-signup'>CREATE ACCOUNT</button></a>
                        </div>
                    )}
                </div>
            </div>
            <div className="nav-bot">
                <div className="nav-bot-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-links-container container">
                    <ul className='nav-links-ul'>
                        <li>
                            <div className="nav-links">
                                <a href="/">HOME</a>
                            </div>
                        </li>
                        <li>
                            <div className="nav-links">
                                <a href="/shop">SHOP</a>
                            </div>
                        </li>
                        <li>
                            <div className="nav-links">
                                <a href="">STORE INFORMATION</a>
                            </div>
                        </li>
                        <li>
                            <div className="nav-links">
                                <a href="">CONTACT US</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="nav-icons-container container">
                    <ul className='nav-icons-ul'>
                        <li>
                            <a href=""><FaSearch /></a>
                        </li>
                        <li>
                            <a href=""><i><FaUser /></i></a>
                        </li>
                        <li>
                            <a href=""><i><FaHeart /></i></a>
                        </li>
                        <li>
                            <a onClick={toggleCart}><i><FaShoppingBag /></i></a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

    )
}

export default Navbar