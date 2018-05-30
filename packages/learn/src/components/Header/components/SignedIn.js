/* global HOME_PATH */
import React from 'react';

function SignedIn() {
  return <a href={HOME_PATH + '/settings'}>Settings</a>;
}

SignedIn.displayName = 'SignedIn';

export default SignedIn;
