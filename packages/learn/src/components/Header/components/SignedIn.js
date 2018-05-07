import React from 'react';
import PropTypes from 'prop-types';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

const propTypes = {
  email: PropTypes.string,
  logout: PropTypes.func.isRequired,
  name: PropTypes.string
};

function SignedIn({ email, name, logout }) {
  return (
    <DropdownButton
      bsStyle='default'
      id='signedin-dropdown-button'
      title={name ? name : email}
      >
      <MenuItem onClick={logout}>Log Out</MenuItem>
    </DropdownButton>
  );
}

SignedIn.displayName = 'SignedIn';
SignedIn.propTypes = propTypes;

export default SignedIn;
