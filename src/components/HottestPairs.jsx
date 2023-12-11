import React, { useState } from 'react'
import './HottestPairs.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';


const HottestPairs = () => {
    const sneakers = [
        { id: 1, brand: 'Adidas', name: 'Trae Young 1 Ice 1', price: 'PHP 9,000', image: 'https://sa.kickscrew.com/cdn/shop/products/main-square_e1d1e776-7246-46a3-bfc5-870f8f597849_540x.jpg?v=1695116079' },
        { id: 7, brand: 'Jordan', name: 'Jordan 13 Retro (PS)', price: 'PHP 12,000', image: 'https://sneakerpolitics.com/cdn/shop/files/Sneaker-Politics-Jordan-13Purple-FD4649-501-WB-1.jpg?v=1698155593&width=1140' },
        { id: 8, brand: "New Balance", name: 'New Balance 580', price: 'PHP 14,500', image: 'https://sneakerpolitics.com/cdn/shop/files/Sneaker-Politics-NB-580GreenYellow-131-112832-WB-1.jpg?v=1693432680&width=1440' },
        { id: 9, brand: 'Vans', name: 'Vans Vault OG Authentic LX', price: 'PHP 5,000', image: 'https://sneakerpolitics.com/cdn/shop/products/Sneaker-Politics-Vans-OGClassicLXSand-131-111306-WB-1.jpg?v=1680033505' },
        { id: 6, brand: 'Puma', name: 'Puma MB.02 Be You', price: 'PHP 5,000', image: 'https://titan22.com/cdn/shop/files/37828301-A_1082x.png?v=1686190635' },
        { id: 4, brand: 'Jordan', name: 'Air Jordan 13 FIBA', price: 'PHP 11,500', image: 'https://sneakerpolitics.com/cdn/shop/files/AURORA_FN7481-100_PHSLH000-2000.jpg?v=1693249211&width=1140' },
        { id: 3, brand: 'Nike', name: 'Nike KD 16 EP Ms. Wanda', price: 'PHP 11,000', image: 'https://titan22.com/cdn/shop/files/DV2916-301-A_1082x.png?v=1700110632' }
    ];

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="custom-arrow next-arrow" onClick={onClick}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="custom-arrow prev-arrow" onClick={onClick}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
        );
    };
    const [isHovered, setIsHovered] = useState(false);

    const onMouseHover = () => {
        setIsHovered(true);
    };

    const onHoverLeave = () => {
        setIsHovered(false);
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="hottest-pairs-container">
            <h2>Hottest Pairs</h2>
            <div className="sneaker-slider">
                <Slider {...settings}>
                    {sneakers.map((sneaker) => (
                        <div key={sneaker.id} className={`sneaker-card ${isHovered ? 'hovered' : ''}`} onMouseEnter={onMouseHover} onMouseLeave={onHoverLeave}>
                            {isHovered &&
                                <i className='wishlistIcon'><FaHeart /></i>
                            }
                            <div className="sneaker-card-image">
                                <img src={sneaker.image} alt="" />
                            </div>
                            <div className="sneaker-details">
                                <p className='sneakerName'>{sneaker.name}</p>
                                <p className="sneakerBrand">{sneaker.brand}</p>
                                <p className="sneakerPrice">{sneaker.price}</p>
                                <button className='viewSneakerBtn'>View Details</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default HottestPairs