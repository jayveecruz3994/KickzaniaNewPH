import React from 'react'
import './BrandSlider.css'
import nike from '../assets/images/svg/nike-11.svg'
import adidas from '../assets/images/svg/adidas-8.svg'
import converse from '../assets/images/svg/converse-logo-1.svg'
import newBalance from '../assets/images/svg/new-balance-2.svg'
import reebok from '../assets/images/svg/reebok-2019-logo.svg'
import offWhiteLogo from '../assets/images/svg/off-white-words.svg'
import puma from '../assets/images/svg/puma-logo.svg'
import vans from '../assets/images/svg/vans-3.svg'
import jordan from '../assets/images/svg/jordan-2.svg'


const BrandSlider = () => {
  return (
    <div className="brand-container">
        <h2>Our Brands</h2>
        <div className="logos">
        <div className="logo-slide">
            <img src={nike} alt="" />
            <img src={adidas} alt="" />
            <img src={converse} alt="" />
            <img src={newBalance} alt="" />
            <img src={reebok} alt="" />
            <img src={offWhiteLogo} alt="" />
            <img src={puma} alt="" />
            <img src={vans} alt="" />
            <img src={jordan} alt="" />
        </div>
        <div className="logo-slide">
            <img src={nike} alt="" />
            <img src={adidas} alt="" />
            <img src={converse} alt="" />
            <img src={newBalance} alt="" />
            <img src={reebok} alt="" />
            <img src={offWhiteLogo} alt="" />
            <img src={puma} alt="" />
            <img src={vans} alt="" />
            <img src={jordan} alt="" />
        </div>
    </div>
    </div>
    
  )
}

export default BrandSlider