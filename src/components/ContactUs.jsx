import React from 'react'
import './contactUs.css'
import { IoMdSend } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";




const ContactUs = () => {
    return (
        <div className='contact-us-container'>
            <div className="contact-us-header">
                <h2>Contact Us</h2>
            </div>
            <div className="contact-us-content">
                <div className="contact-us-form">
                    <h2>Send us a message!</h2>
                    <form action="" id="contactForm">
                        <label htmlFor="fullName">Your Name: </label><br />
                        <input type="text" id="fullName" /><br />
                        <label htmlFor="email">Email: </label><br />
                        <input type="email" id="email" /><br />
                        <label htmlFor="phoneNumber">Phone Number: </label><br />
                        <input type="text" id="phoneNumber" />
                        <label htmlFor="message">Your Message:</label>
                        <input type="text" name="message" id="message" placeholder />
                        <div className="btn-container">
                            <button type='submit' className='sendBtn'>SEND <i><IoMdSend /></i></button>
                        </div>
                    </form>
                </div>
                <div className="contact-information">
                    <h2>Store Information</h2>
                    <ul>
                        <li>
                            <IoLocationOutline /> 19-21 1st street, Gilmore Ave, Quezon City
                        </li>
                        <li>
                            <FaPhoneVolume /> +63-999-99-99
                        </li>
                        <li>
                            <HiOutlineMailOpen /> kickzaniaph@gmail.com
                        </li>
                    </ul>
                    <div className="socmed-icons">
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
                </div>
            </div>
        </div>
    )
}

export default ContactUs