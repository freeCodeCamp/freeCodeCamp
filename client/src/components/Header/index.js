import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../search/searchBar/SearchBar';

import NavigationMenu from './components/NavMenu';
import NavLogo from './components/NavLogo';
import { Link } from '../helpers';

import './header.css';

const propTypes = {
  disableSettings: PropTypes.bool,
  navigationMenu: PropTypes.element
};

function Header(props) {
  const { disableSettings, navigationMenu } = props;
  return (
    <header>
      <nav id='top-nav'>
        <Link className='home-link' to='/'>
          <NavLogo />
        </Link>
        {disableSettings ? null : <SearchBar />}
        {navigationMenu ? (
          navigationMenu
        ) : (
          <NavigationMenu disableSettings={disableSettings} />
        )}
      </nav>
    </header>
  );
}

Header.propTypes = propTypes;

export default Header;
