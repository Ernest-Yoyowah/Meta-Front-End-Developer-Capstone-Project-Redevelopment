import React from 'react'

import './History.css'
import f1 from '../../assets/Mario and Adrian A.jpg';
import f2 from '../../assets/Mario and Adrian b.jpg';

const History = () => {
  return (
    <div className='about-section'>
        <div className='ab_left'>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum. ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
            quia voluptas sit aspernatur aut odit aut fugit,
            quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
        </p>
        </div>
        <div className='image-in'>
            <img src={f1} alt='m&a_img'/>
            <img src={f2} alt='m&a_img'/>
        </div>
    </div>
  )
}

export default History