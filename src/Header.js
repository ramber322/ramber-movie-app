import React, { useState, useEffect } from 'react';
import './styles/Header.css';  
import starImage from './images/star-iconIMAGE.png'; 

function Header({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(inputValue);
  };

  return (
    <header className="header">
       <img src={starImage} alt="moses" className="star-icon" />
      <h1 className="title">MOVIES</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Search"
          className="input"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" className="button">Search</button>
      </form>
    </header>
  );
}

export default Header;
