import React, { useEffect, useState } from 'react'
import './NewArrivals.css'
import { HiOutlineShoppingBag } from "react-icons/hi";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const NewArrivals = () => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from your JSON file or API endpoint
        const response = await fetch('src/assets/data/sneakersList.json');
        const data = await response.json();
        setSneakers(data);
      } catch (error) {
        console.error('Error fetching sneaker data:', error);
      }
    };

    fetchData();
  }, []);

  const featuredSneakers = sneakers.filter((sneaker) => sneaker.featured);

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides to show at a time
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className='latest-container'>
      <div className="latest-header">
        <h2>Top Picks</h2>
      </div>
      <div className="featured-content-container">
        <div className="featured-content-container">
          <Slider {...settings}>
          {featuredSneakers.map((sneaker) => (
            <div className='sneaker-card' key={sneaker.id}>
            <div className="card-image">
              <img src={sneaker.mainImageURL} alt="" />
            </div>
            <div className="card-body">
              <span className="sneakerName">
                {sneaker.name}
              </span><br />
              <span className='sneakerBrand'>
                {sneaker.brandName}
              </span><br /><br />
              <span className="sneakerPrice">
                Price: {sneaker.price}
              </span>
              <button className='addToCartBtn' onClick={() => {addToBag(sneakers.name)}}> <HiOutlineShoppingBag /> Add to Bag</button>
            </div>
          </div>
          )
        )}
          </Slider>
        </div>
        <div className="viewShop-container">
          <a href="/shop"><button className='viewShop'>View Full Shop &#8594;</button></a>
        </div>
      </div>
    </div>
  )
}

export default NewArrivals