import { auth0 } from '../../config/secrets';
import { homeLocation } from '../../config/env.json';

const { clientID, clientSecret, domain } = auth0;

const successRedirect = `${homeLocation}/welcome`;
const failureRedirect = '/signin';

export default {
  local: {
    provider: 'local',
    module: 'passport-local',
    usernameField: 'email',
    passwordField: 'password',
    authPath: '/auth/local',
    successRedirect: successRedirect,
    failureRedirect: failureRedirect,
    session: true,
    failureFlash: true
  },
  'auth0-login': {
    provider: 'auth0',
    module: 'passport-auth0',
    clientID,
    clientSecret,
    domain,
    cookieDomain: 'freeCodeCamp.org',
    callbackURL: '/auth/auth0/callback',
    authPath: '/auth/auth0',
    callbackPath: '/auth/auth0/callback',
    useCustomCallback: true,
    successRedirect: successRedirect,
    failureRedirect: failureRedirect,
    scope: ['openid profile email'],
    failureFlash: true
  }
};
