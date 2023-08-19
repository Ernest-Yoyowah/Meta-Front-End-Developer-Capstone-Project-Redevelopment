import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import {Home, About, Menu, Notpage, Order, Reservation, Login} from './pages';
import Header from './components/Header';


import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/reservation' element={<Reservation />} />
      <Route path='/order' element={<Order />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Notpage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;