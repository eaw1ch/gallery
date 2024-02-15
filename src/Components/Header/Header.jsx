import React from 'react';
import logo from '../../assets/logo/logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="" />
      <span className="header__name">GALLERY</span>
    </header>
  );
};

export default Header;
