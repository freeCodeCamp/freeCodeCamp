import React from 'react';

const fCClogo = 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg';
const fCCglyph = 'https://s3.amazonaws.com/freecodecamp/FFCFire.png';

function NavLogo() {
  return (
    <picture>
      <source media='(max-width: 734px)' srcSet={fCCglyph} />
      <source media='(min-width: 735px)' srcSet={fCClogo} />
      <img
        alt='learn to code at freeCodeCamp logo'
        className='nav-logo'
        src={fCCglyph}
      />
    </picture>
  );
}

NavLogo.displayName = 'NavLogo';

export default NavLogo;
