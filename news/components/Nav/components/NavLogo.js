import React from 'react';
import { NavbarBrand } from 'react-bootstrap';
import Media from 'react-media';

const fCClogo = 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg';
const fCCglyph = 'https://s3.amazonaws.com/freecodecamp/FFCFire.png';

const propTypes = {};

function NavLogo() {
  return (
    <NavbarBrand>
      <a
        href='/'
        >
        <Media query='(min-width: 350px)'>
          {
            matches => matches ? (
              <img
                alt='learn to code javascript at freeCodeCamp logo'
                className='nav-logo logo'
                src={ fCClogo }
              />
            ) : (
              <img
                alt='learn to code javascript at freeCodeCamp logo'
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
