import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import './login.css';

function Login({ children, ...restProps }) {
  return (
    <Button
      {...restProps}
      bsStyle='default'
      className={(restProps.block ? 'btn-cta-big' : '') + ' signup-btn btn-cta'}
      href='/signin'
      target='_blank'
      >
      {children || 'Sign In'}
    </Button>
  );
}

Login.displayName = 'Login';
Login.propTypes = {
  children: PropTypes.any
};

export default Login;
