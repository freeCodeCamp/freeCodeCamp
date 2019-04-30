import React from 'react';

const fCClogo = 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg';

function NavLogo() {
  return (
    <img
      alt='learn to code at freeCodeCamp logo'
      className='nav-logo logo'
      src={fCClogo}
    />
  );
}

NavLogo.displayName = 'NavLogo';

export default NavLogo;
