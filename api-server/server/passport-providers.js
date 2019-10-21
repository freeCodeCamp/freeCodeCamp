import { auth0 } from '../../config/secrets';
import { homeLocation, apiLocation } from '../../config/env';

const { clientID, clientSecret, domain } = auth0;

const successRedirect = `${homeLocation}/learn`;
const failureRedirect = `${homeLocation}/signin`;

export default {
  devlogin: {
    authScheme: 'mock',
    provider: 'dev',
    module: 'passport-mock-strategy'
  },
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
    cookieDomain: process.env.COOKIE_DOMAIN || 'localhost',
    callbackURL: `${apiLocation}/auth/auth0/callback`,
    authPath: '/auth/auth0',
    callbackPath: '/auth/auth0/callback',
    useCustomCallback: true,
    passReqToCallback: true,
    state: false,
    successRedirect: successRedirect,
    failureRedirect: failureRedirect,
    scope: ['openid profile email'],
    failureFlash: true
  }
};
