import React from 'react';
import logo from '../images/logo.svg'

import "./Header.css"

const Header = ({ handleInputChange }) => (
  <div className="header">
    <img src={logo} alt="Timescale" />
    <input type="search" name="search" id="search" placeholder="Search for a movie" onChange={({ target }) => handleInputChange(target.value)} />
  </div>
)

export default Header;