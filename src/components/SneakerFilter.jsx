// SneakerFilter.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SneakerFilter.css'

const SneakerFilter = ({ onFilterChange }) => {
  const [sneakers, setSneakers] = useState([]);
  const [uniqueBrands, setUniqueBrands] = useState([]);
  const [uniqueColors, setUniqueColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    // Fetch data from JSON file
    axios.get('src/assets/data/sneakersList.json').then((response) => {
      const sneakersData = response.data;
      setSneakers(sneakersData);

      // Extract unique brands and colors
      const brands = [...new Set(sneakersData.map((sneaker) => sneaker.brand))];
      const colors = [...new Set(sneakersData.map((sneaker) => sneaker.color))];

      setUniqueBrands(brands);
      setUniqueColors(colors);
    });
  }, []);

  const handleFilterChange = () => {
    // Pass selected filters to the parent component
    onFilterChange({
      brands: selectedBrands,
      colors: selectedColors,
      minPrice,
      maxPrice,
    });
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prevBrands) =>
      prevBrands.includes(brand)
        ? prevBrands.filter((prevBrand) => prevBrand !== brand)
        : [...prevBrands, brand]
    );
    handleFilterChange(); // Automatically apply filters when brand changes
  };

  const handleColorChange = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((prevColor) => prevColor !== color)
        : [...prevColors, color]
    );
    handleFilterChange(); // Automatically apply filters when color changes
  };

  return (
    <div>
      <h2>Filter</h2>
      <div className='brand-filter-container'>
        <hr />
        <label className='brand-header'>
          Brands:
          <br />
          {uniqueBrands.map((brand) => (
            <label key={brand}>
              <input
                type="checkbox"
                value={brand}
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              {brand}
            </label>
          ))}
          <hr />
        </label>
      </div>
      <div className='color-filter-container'>
        <label>
          Colors:
          <br />
          {uniqueColors.map((color) => (
            <label key={color}>
              <input
                type="checkbox"
                value={color}
                checked={selectedColors.includes(color)}
                onClick={() => handleColorChange(color)}
                className='color-input'
              />
              {color}
            </label>
          ))}
          <hr />
        </label>
      </div>
      <div className='price-filter-container'>
        <label>
          Price Range:
          <br />
          <label htmlFor="">Min:</label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <label htmlFor="">Max:</label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </label>
        <hr />
      </div>
      <div className="apply-filter-button-container">
        <button onClick={handleFilterChange} className='apply-filter-button'>Apply Filters</button>
      </div>
    </div>
  );
};

export default SneakerFilter;
