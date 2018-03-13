import React from 'react';
import PropTypes from 'prop-types';
import { NavbarBrand } from 'react-bootstrap';
import Media from 'react-media';

const fCClogo = 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg';
// TODO @freecodecamp-team: place this glyph in S3 like above, PR in /assets
const fCCglyph = 'https://raw.githubusercontent.com/freeCodeCamp/assets/' +
'3b9cafc312802199ebba8b31fb1ed9b466a3efbb/assets/logos/FFCFire.png';

const propTypes = {
  clickOnLogo: PropTypes.func.isRequired
};

function NavLogo({ clickOnLogo }) {
  return (
    <NavbarBrand>
      <a
        href='/challenges/current-challenge'
        onClick={ clickOnLogo }
        >
        <Media query='(min-width: 735px)'>
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
