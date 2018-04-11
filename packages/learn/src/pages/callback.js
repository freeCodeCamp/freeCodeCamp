import React from 'react';
import Auth from '../auth';

function AuthCallBack() {
  const auth = new Auth();
  auth.handleAuthentication();
  return <h2>One moment please...</h2>;
}

AuthCallBack.displayName = 'AuthCallBack';

export default AuthCallBack;
