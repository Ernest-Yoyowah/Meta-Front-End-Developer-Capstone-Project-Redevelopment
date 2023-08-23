import React, { useState } from 'react';
import './Reservation.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ReservationForm = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsConfirmed(true);
  }

  return (
    <div className='Fmain'>
      {!isConfirmed ? (
        <form className='FM' onSubmit={handleFormSubmit}>
          <label htmlFor="res-date" className='fm'>Date</label>
          <input type="date" id="res-date" className='fm' required />
          <label htmlFor="res-time" className='fm'>Time</label>
          <select id="res-time" className='fm' required>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          <label htmlFor="guests" className='fm'>Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" className='fm'required />
          <label htmlFor="occasion" className='fm'>Occasion</label>
          <select id="occasion" className='fm' required >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input type="submit" value="Make Your reservation" />
        </form>
      ) : (
        <div className="confirmation">
          <FontAwesomeIcon icon={faCheckCircle} className="done-icon" size='3x'/>
          <h2>Your reservation has been confirmed.</h2>
          <p>You will receive an email with all the details.</p>
        </div>
      )}
    </div>
  );
};

export default ReservationForm;
