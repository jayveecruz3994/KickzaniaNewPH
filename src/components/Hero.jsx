import React from 'react'
import heroImage from '../assets/images/offwhite2.jpg'
import './Hero.css'
import logoWhite from '../assets/images/logoWhite.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
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
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const sneakers = [
    {
      imageUrl: 'https://i.ytimg.com/vi/W2X0Fl7hBWA/maxresdefault.jpg',
      name: '',
      ctaText: 'Shop Now',
      ctaLink: '/shop/sneaker1',
    },
    {
      imageUrl: 'https://jdsportsusablog.s3.amazonaws.com/wp-content/uploads/2021/09/210828_TraeYoung01_SM-0488FINAL_Icee.jpg',
      name: 'Sneaker 2',
      ctaText: 'Shop Now',
      ctaLink: '/shop/sneaker2',
    },
    {
      imageUrl: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2014%2F07%2Fa-closer-look-at-the-nike-kd7-easy-money-1.jpg?cbr=1&q=90'
    }
  ];

  
  
  
  
  return (
    <div className='hero-container'>
      
      <Slider {...settings}>
      {sneakers.map((sneaker, index) => (
        <div key={index} className="carousel-slide">
          <img src={sneaker.imageUrl} alt={`Sneaker ${index + 1}`} />
          <div className="carousel-content">
          </div>
        </div>
      ))}
    </Slider>
    </div>
  )
}

export default Hero