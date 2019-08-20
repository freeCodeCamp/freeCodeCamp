import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function SignedIn() {
  return (
    <Link className='top-right-nav-link' to='/settings'>
      Settings
    </Link>
  );
}

SignedIn.displayName = 'SignedIn';
SignedIn.propTypes = {
  picture: PropTypes.string
};

export default SignedIn;
