import React from 'react';
import PropTypes from 'prop-types';
import { NavbarBrand } from 'react-bootstrap';
import Media from 'react-media';

const fCClogo =
  'https://www.dropbox.com/s/4552naguuj98xpw/spiraladder-logo-150x25.png?raw=1';
const fCCglyph = 'https://www.dropbox.com/s/n29l7rkjpuq22tb/spiraladder-icon-transparent-300x300.png?raw=1';

const propTypes = {
  clickOnLogo: PropTypes.func.isRequired
};

function NavLogo({ clickOnLogo }) {
  return (
    <NavbarBrand>
      <a
        href='/'
        onClick={ clickOnLogo }
        >
        <Media query='(min-width: 735px)'>
          {
            matches => matches ? (
              <img
                alt='learn to code javascript at Spiraladder logo'
                className='nav-logo logo'
                src={ fCClogo }
              />
            ) : (
              <img
                alt='learn to code javascript at Spiraladder logo'
                className='nav-logo logo'
                src={ fCCglyph }
              />
            )
          }
        </Media>
      </a>
    </NavbarBrand>
  );
}

NavLogo.displayName = 'NavLogo';
NavLogo.propTypes = propTypes;

export default NavLogo;
