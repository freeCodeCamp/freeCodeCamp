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
        <a className='home-link' href='https://www.freecodecamp.org'>
          <NavLogo />
        </a>
        <FCCSearch />
        <ul id='top-right-nav'>
          <li className='nav-btn'>
            <Link to='/'>Curriculum</Link>
          </li>
          <li className='nav-btn'>
            <a href='https://forum.freecodecamp.org' target='_blank'>
              Forum
            </a>
          </li>
          <li className='nav-btn'>
            <a href='https://www.freecodecamp.org/news' target='_blank'>
              News
            </a>
          </li>
          <li className='sign-in-btn'>

            <UserState />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
