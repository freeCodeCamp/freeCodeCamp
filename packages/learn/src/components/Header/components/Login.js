/* global HOME_PATH */
import React from 'react';
import { Button } from 'react-bootstrap';

function Login() {
  return (
    <li className='sign-in-btn'>
      <Button
        bsStyle='default'
        className='btn-cta sign-in-btn'
        href={HOME_PATH + '/signin'}
        target='_blank'
        >
        Sign In
      </Button>
    </li>
  );
}

Login.displayName = 'Login';

export default Login;
