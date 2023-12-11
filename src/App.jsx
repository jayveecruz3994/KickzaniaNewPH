import React, { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './login/Login'
import NavigationBar from './components/NavigationBar'
import { CartProvider } from './components/CartContext'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <CartProvider>
        <NavigationBar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
        <Outlet isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
        <Footer />
      </CartProvider>
    </>
  )
}

export default App
