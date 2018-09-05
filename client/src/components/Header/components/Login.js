import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@freecodecamp/react-bootstrap';
import { Link } from 'gatsby';

import './login.css';

function Login({ children, ...restProps }) {
  return (
    <Link to='/signin'>
      <Button
        {...restProps}
        bsStyle='default'
        className={
          (restProps.block ? 'btn-cta-big' : '') + ' signup-btn btn-cta'
        }
        >
        {children || 'Sign In'}
      </Button>
    </Link>
  );
}

Login.displayName = 'Login';
Login.propTypes = {
  children: PropTypes.any
};

export default Login;
