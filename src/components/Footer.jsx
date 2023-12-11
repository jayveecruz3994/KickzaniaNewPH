import React from 'react'
import '../components/footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import whiteLogo from '../assets/images/logowhite.png'





const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-content">
            <div className="footer-pages">
                <ul>
                    <li>
                        <a href="">HOME</a>
                    </li>
                    <li>
                        <a href="">SHOP</a>
                    </li>
                    <li>
                        <a href="">CONTACT US</a>
                    </li>
                    <li>
                        <a href="">STORE INFORMATION</a>
                    </li>
                </ul>
            </div>
            <div className="footer-sub-pages">
                <ul>
                    <li>
                        <a href="">FAQ's</a>
                    </li>
                    <li>
                        <a href="">LOCATION</a>
                    </li>
                    <li>
                        <a href="">TRACK ORDER</a>
                    </li>
                    <li>
                        <a href="">BRANDS</a>
                    </li>
                </ul>
            </div>
            <div className="footer-icons">
                <h5>Follow us on:</h5>
                <ul>
                    <li>
                        <a href=""><i><FaFacebookSquare /></i></a>
                    </li>
                    <li>
                        <a href=""><i><IoLogoYoutube /></i></a>
                    </li>
                    <li>
                        <a href=""><i><FaInstagramSquare /></i></a>
                    </li>
                    <li>
                        <a href=""><i><SiTiktok /></i></a>
                    </li>
                </ul>
            </div>
            <div className="footer-others">
                <img src={whiteLogo} alt="" />
                <span className='rights'>© 2023 All Rights Reserved</span>
            </div>
        </div>
    </div>
  )
}

export default Footer