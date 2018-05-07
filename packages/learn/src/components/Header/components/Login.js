import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';

const propTypes = {
  login: PropTypes.func.isRequired
};

function Login({ login }) {
  return (
    <Button bsStyle='default' onClick={login}>
      Login
    </Button>
  );
}

Login.displayName = 'Login';
Login.propTypes = propTypes;

export default Login;
