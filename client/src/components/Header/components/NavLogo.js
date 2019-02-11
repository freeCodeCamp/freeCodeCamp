import React from 'react';
import Media from 'react-media';

const fCClogo = 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg';
const fCCglyph = 'https://s3.amazonaws.com/freecodecamp/FFCFire.png';

function NavLogo() {
  return (
    <Media query='(min-width: 735px)'>
      {matches =>
        matches ? (
          <img
            alt='learn to code at freeCodeCamp logo'
            className='nav-logo logo'
            src={fCClogo}
          />
        ) : (
          <img
            alt='learn to code at freeCodeCamp logo'
            className='nav-logo logo-glyph'
            src={fCCglyph}
          />
        )
      }
    </Media>
  );
}

NavLogo.displayName = 'NavLogo';

export default NavLogo;
