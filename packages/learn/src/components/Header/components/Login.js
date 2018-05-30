/* global HOME_PATH */
import React from 'react';

function Login() {
  return (
    <a href={HOME_PATH + '/signin'} target='_blank'>
      Login
    </a>
  );
}

Login.displayName = 'Login';

export default Login;
