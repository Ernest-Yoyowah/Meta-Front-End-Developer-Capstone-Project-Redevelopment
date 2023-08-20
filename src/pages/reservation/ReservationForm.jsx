import React from 'react';

import './Reservation.css';

const ReservationForm = () => {
  return (
    <div className='Fmain'>
    <form className='FM'>
      <label htmlFor="res-date" className='fm'>Date</label>
      <input type="date" id="res-date" className='fm'/>
      <label htmlFor="res-time" className='fm'>Time</label>
      <select id="res-time" className='fm'>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests" className='fm'>Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" className='fm'/>
      <label htmlFor="occasion" className='fm'>Occasion</label>
      <select id="occasion" className='fm'>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
    </div>
  );
};

export default ReservationForm;
