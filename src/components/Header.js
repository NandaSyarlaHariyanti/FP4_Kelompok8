import React from 'react';
import Search from './Search'; 
import '../App.css';

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <h1>Movie App</h1>
      <Search onSearch={onSearch} /> { }
    </header>
  );
};

export default Header;
