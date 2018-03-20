import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, NavItem } from 'react-bootstrap';

import { Link } from '../../Router';
import { onRouteSettings } from '../../routes/Settings/redux';

const propTypes = {
  isInDropDown: PropTypes.bool,
  showLoading: PropTypes.bool,
  showSignUp: PropTypes.bool
};

function SignUpButton({ isInDropDown, showLoading, showSignUp }) {
  if (showLoading) {
    return null;
  }
  if (showSignUp) {
    return isInDropDown ? (
      <MenuItem
        href='/signup'
        key='signup'
        >
        Sign Up
      </MenuItem>
      ) : (
      <NavItem
        href='/signup'
        key='signup'
        >
        Sign Up
      </NavItem>
    );
  }
  return (
    <li
      className='nav-avatar'
      key='user'
      >
      <Link to={ onRouteSettings() }>
        Settings
      </Link>
    </li>
  );
}

SignUpButton.displayName = 'SignUpButton';
SignUpButton.propTypes = propTypes;

export default SignUpButton;
