import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './home/Home.jsx'
import Shop from './shop/Shop.jsx'
import SignUp from './login/SignUp.jsx'
import Login from './login/Login.jsx'
import { CartProvider } from './components/CartContext'
import Checkout from './Checkout/Checkout.jsx'
import sneakersData from './assets/data/sneakersList.json'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <CartProvider>
        <App />
      </CartProvider>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop />, },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/checkout", element: <Checkout /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
