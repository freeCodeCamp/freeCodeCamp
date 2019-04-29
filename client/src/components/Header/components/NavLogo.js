import React from 'react';
import Media from 'react-responsive';

const fCClogo = 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg';
const fCCglyph = 'https://s3.amazonaws.com/freecodecamp/FFCFire.png';

function NavLogo() {
  return (
    <>
      <Media minWidth={735}>
        <img
          alt='learn to code at freeCodeCamp logo'
          className='nav-logo logo'
          src={fCClogo}
        />
      </Media>
      <Media maxWidth={734}>
        <img
          alt='learn to code at freeCodeCamp logo'
          className='nav-logo logo-glyph'
          src={fCCglyph}
        />
      </Media>
    </>
  );
}

NavLogo.displayName = 'NavLogo';

export default NavLogo;
