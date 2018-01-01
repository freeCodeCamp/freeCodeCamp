import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from 'react-bootstrap';

import { Link } from '../Router';
import { onRouteSettings } from '../routes/Settings/redux';

const propTypes = {
  showLoading: PropTypes.bool,
  showSignUp: PropTypes.bool
};

export default function SignUpButton({ showLoading, showSignUp }) {
  if (showLoading) {
    return null;
  }
  if (showSignUp) {
    return (
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
