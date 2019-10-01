import React from 'react';

const fCClogo = 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg';

function NavLogo() {
  return (
    <picture>
      <img
        alt='learn to code at freeCodeCamp logo'
        className='nav-logo'
        src={fCClogo}
      />
    </picture>
  );
}

NavLogo.displayName = 'NavLogo';
export default NavLogo;
