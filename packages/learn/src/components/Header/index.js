import React from 'react';
import Link from 'gatsby-link';
import FCCSearch from 'react-freecodecamp-search';

import NavLogo from './components/NavLogo';
import UserState from './components/UserState';

import './header.css';

function Header() {
  return (
    <header>
      <nav id='top-nav'>
        <Link className='home-link' to='/'>
          <NavLogo />
        </Link>
        <FCCSearch />
        <ul id='top-right-nav'>
          <li>
            <Link to='/'>Curriculum</Link>
          </li>
          <li>
            <a href='https://forum.freecodecamp.org'>Forum</a>
          </li>
          <li>
            <UserState />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
