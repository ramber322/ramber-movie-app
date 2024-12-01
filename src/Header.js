import React, { useState } from 'react';
import './styles/Header.css';  

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
      <h1 className="title" onSubmit={handleFormSubmit}>MOVIES</h1>
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
