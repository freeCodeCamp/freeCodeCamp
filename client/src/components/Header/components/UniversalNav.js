import React from 'react';
import { Link } from '../../helpers';
import NavLogo from './NavLogo';
import SearchBar from '../../search/searchBar/SearchBar';
import NavLinks from './NavLinks';
import './universalNav.css';

export function UniversalNav() {
  return (
    <nav className={'universal-nav nav-padding'} id='universal-nav'>
      <div className={'universal-nav-left'}>
        <SearchBar />
      </div>
      <div className='universal-nav-middle'>
        <Link className='universal-nav-logo' to='/'>
          <NavLogo />
        </Link>
      </div>
      <div className='universal-nav-right main-nav'>
        <NavLinks />
      </div>
    </nav>
  );
}

UniversalNav.displayName = 'UniversalNav';
export default UniversalNav;
