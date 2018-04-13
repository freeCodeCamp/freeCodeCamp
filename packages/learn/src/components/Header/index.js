import React from 'react';
import Link from 'gatsby-link';

import './header.css';

function Header() {
  return (
    <header id='top-nav'>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960
        }}
        >
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
      </div>
    </header>
  );
}

export default Header;
