import React from 'react'
import './HeroSection.css'
import logoWhite from '../assets/images/logoWhite.png'
import offwhite from '../assets/images/offwhite.png'
import nmd from '../assets/images/nmd.png'
import freeShipping from '../assets/images/free-delivery.png'
import hundred from '../assets/images/100-percent.png'
import secured from '../assets/images/verified.png'
import support from '../assets/images/support.png'
import offers from '../assets/images/price-tag.png'
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <div className="hero-main">
                    <img src={logoWhite} alt="" />
                    <h2>Your one-stop shop for all your sneaker needs.</h2>
                    <Link to="/shop"><button className='hero-shop-now'>Shop Now</button></Link>
                </div>
                <div className="hero-sub-1">
                    <div class="ribbon ribbon-top-left"><span>Featured</span></div>
                    <div className="left">
                        <h2>Nike Jordan 1 Retro High OG x OFF-WHITE UNC</h2>
                        <p>PHP 90,000</p>
                        <button>View Sneaker</button>
                    </div>
                    <div className="right">
                        <img src={offwhite} alt="" />
                    </div>
                </div>
                <div className="hero-sub-2">
                    <div class="ribbon ribbon-top-left"><span>Featured</span></div>
                    <div className="left">
                        <h2>Adidas NMD R1</h2>
                        <p>PHP 90,000</p>
                        <button>View Sneaker</button>
                    </div>
                    <div className="right">
                        <img src={nmd} />
                    </div>
                </div>
                <div className="iconography-1">
                    <div className="icon-left">
                        <img src={freeShipping} alt="" />
                    </div>
                    <div className="icon-right">
                        <h3>Free Shipping</h3>
                        <p>For all orders worth over 20,000</p>
                    </div>
                </div>
                <div className="iconography-2">
                    <div className="icon-left">
                        <img src={hundred} alt="" />
                    </div>
                    <div className="icon-right">
                        <h3>Legit Only</h3>
                        <p>We only sell 100% authentic products </p>
                    </div>
                </div>
                <div className="iconography-3">
                    <div className="icon-left">
                        <img src={secured} alt="" />
                    </div>
                    <div className="icon-right">
                        <h3>Secured Payment</h3>
                        <p>Guaranteed 100% Secured Payment</p>
                    </div>
                </div>
                <div className="iconography-4">
                    <div className="icon-left">
                        <img src={support} alt="" />
                    </div>
                    <div className="icon-right">
                        <h3>24/7 Support</h3>
                        <p>Anytime, anywhere, you can contact us</p>
                    </div>
                </div>
                <div className="iconography-5">
                    <div className="icon-left">
                        <img src={offers} alt="" />
                    </div>
                    <div className="icon-right">
                        <h3>Daily Offers</h3>
                        <p>Up to 50% discount on selected pairs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection