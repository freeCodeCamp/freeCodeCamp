/* global HOME_PATH */
import React from 'react';
import { Button } from 'react-bootstrap';

function Login() {
  return (
    <Button
      bsStyle='default'
      className='btn-cta'
      href={HOME_PATH + '/signin'}
      target='_blank'
      >
      Sign In
    </Button>
  );
}

Login.displayName = 'Login';

export default Login;
