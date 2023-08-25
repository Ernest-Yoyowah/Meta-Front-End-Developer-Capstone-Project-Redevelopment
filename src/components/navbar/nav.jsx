import React, { useState}  from 'react';
import { BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {Home, About, Menu, Notpage, Order, Reservation, Login} from '../../pages';
import './nav.css'
import logo from '../../assets/logo.png';

const nav = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleMenu = () => {
    setIsClicked(isClicked);
  };

  return (
    <nav className='app__nav'>
        <div className='app__nav-logo'>
            <a href='/'>
             <img src={logo} alt='logo' style={{ width: "15rem" }} />
            </a>
        </div>
        <div className='app__nav-left'>
          <div className='app__nav-links'>
            <NavLink to='/home' >Home</NavLink>
            <NavLink to='/about' >about</NavLink>
            <NavLink to='/menu' >Menu</NavLink>
            <NavLink to='/reservation' >Reservation</NavLink>
            <NavLink to='/order' >Order Online</NavLink>
            <NavLink to='/login' >Login</NavLink>
          </div>
        </div>

        <div className='nav-mobile' >
          <div className='app__nav-mobile'>
            <button className='app__nav-toggle' onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} className='hamburger-icon' />
                <div className={`app__nav-links ${isClicked ? 'open' : ''}`}>
                  <NavLink to='/home' >Home</NavLink>
                  <NavLink to='/about' >about</NavLink>
                  <NavLink to='/menu' >Menu</NavLink>
                  <NavLink to='/reservation' >Reservation</NavLink>
                  <NavLink to='/order' >Order Online</NavLink>
                  <NavLink to='/login' >Login</NavLink>
                </div>
            </button>
          </div>
        </div>
    </nav>
  )
}

export default nav