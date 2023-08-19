import React from 'react';
import Navbar from '../../components/navbar/nav';
import Footer from '../../components/footer/Footer';
import ReservationForm from './ReservationForm';

import './Reservation.css';

const Reservation = () => {
  return (
    <>
      <Navbar />
      <div className='reserve'>
        <div className='reserve-text'>
          <h2>Table reservation</h2>
        </div>
        <div className='reserve-table'>
          <ReservationForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Reservation;
