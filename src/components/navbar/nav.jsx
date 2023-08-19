import React from 'react';
import { BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';

import {Home, About, Menu, Notpage, Order, Reservation, Login} from '../../pages';
import './nav.css'
import logo from '../../assets/logo.png';

const nav = () => {
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
    </nav>
  )
}

export default nav