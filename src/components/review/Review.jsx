import React from 'react';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import ts1 from '../../assets/t1.png';
import ts2 from '../../assets/t2.png';
import ts3 from '../../assets/t3.png';
import ts4 from '../../assets/t4.png';

const Review = () => {
  return (
    <div className="test-section">
      <div className='test-top'>
        <h2>What people say about us!</h2>
      </div>

      <div className='hold-test'>
      <div className='w-container'>
      <div className='test-card'>
        <div className='test-card-img'>
            <img src={ts4} alt='ts4'/>
        </div>
        <h4>Ben Johnson</h4>
        <span>
          {[1, 2, 3, 4 ].map((ratingPoint, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              size="xs"
            />
          ))}
        </span>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
      </div>
      </div>

      <div className='w-container'>
      <div className='test-card'>
        <div className='test-card-img'>
            <img src={ts1} alt='ts1'/>
        </div>
        <h4>Henry Addison</h4>
        <span>
          {[1, 2, 3, 4, 5].map((ratingPoint, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              size="xs"
            />
          ))}
        </span>
        <p>"Lorem ipsum sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
      </div>
      </div>

      <div className='w-container'>
      <div className='test-card'>
        <div className='test-card-img'>
            <img src={ts2} alt='ts2'/>
        </div>
        <h4>Alison James</h4>
        <span>
          {[1, 2, 3, 4, 5].map((ratingPoint, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              size="xs"
            />
          ))}
        </span>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
      </div>
      </div>

    <div className='w-container'>
      <div className='test-card'>
        <div className='test-card-img'>
            <img src={ts3} alt='ts3'/>
        </div>
        <h4>Charles Dazie</h4>
        <span>
          {[1, 2, 3, 4, 5].map((ratingPoint, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              size="xs"
            />
          ))}
        </span>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
      </div>
      </div>
      </div>

      </div>
  );
}

export default Review;
