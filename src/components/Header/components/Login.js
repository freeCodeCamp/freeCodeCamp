import React from 'react';
import { Button } from 'react-bootstrap';

function Login() {
  return (
    <Button
      bsStyle='default'
      className='btn-cta'
      href='https://www.freecodecamp.org/signin'
      target='_blank'
      >
      Sign In
    </Button>
  );
}

Login.displayName = 'Login';

export default Login;
