import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import './nav.css';

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleMenu = () => {
    setIsClicked(!isClicked); // Toggle the value of isClicked
  };

  return (
    <nav className='app__nav'>
      <div className='app__nav-logo'>
        <a href='/'>
          <img src={logo} alt='logo' className='logoNav' />
        </a>
      </div>

      <div className='app__nav-left'>
        <div className='app__nav-links'>
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/menu'>Menu</NavLink>
          <NavLink to='/reservation'>Reservation</NavLink>
          <NavLink to='/order'>Order Online</NavLink>
          <NavLink to='/login'>Login</NavLink>
        </div>
      </div>

      <div className='nav-mobile'>
        <div className='app__nav-mobile'>
          <button className='app__nav-toggle' onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className='hamburger-icon' />
            <FontAwesomeIcon  />
          </button>
          <div className={`app__nav-links ${isClicked ? 'open' : ''}`}>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/menu'>Menu</NavLink>
            <NavLink to='/reservation'>Reservation</NavLink>
            <NavLink to='/order'>Order Online</NavLink>
            <NavLink to='/login'>Login</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
