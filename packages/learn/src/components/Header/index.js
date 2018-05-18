import React from 'react';
import Link from 'gatsby-link';

import './header.css';

function Header() {
  return (
    <header>
      <nav id='top-nav'>
        <Link className='home-link' to='/'>
          <img
            alt='Logo - freeCodeCamp | Learn to code'
            src='https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg'
            title='freeCodeCamp | Learn to code'
          />
        </Link>
        <ul id='top-right-nav'>
          <li>
            <a href='https://learn.freecodecamp.org'>Learn</a>
          </li>
          <li>
            <a href='https://forum.freecodecamp.org'>Forum</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
