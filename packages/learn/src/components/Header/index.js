import React from 'react';
import Link from 'gatsby-link';

import './header.css';
import UserState from './components/UserState';

function Header() {
  return (
    <header id='top-nav'>
      <div className='top-nav-container'>
        <Link
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
          to='/'
          >
          <img
            alt='Logo - freeCodeCamp | Learn to code'
            src={'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg'}
            title='freeCodeCamp | Learn to code'
          />
        </Link>
        <UserState />
      </div>
    </header>
  );
}

export default Header;
