import React from 'react';
import PropTypes from 'prop-types';
import FCCSearch from 'react-freecodecamp-search';

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
        {disableSettings ? null : <FCCSearch />}
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
