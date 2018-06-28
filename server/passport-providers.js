const successRedirect = '/';
const failureRedirect = '/';

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
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    domain: process.env.AUTH0_DOMAIN,
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
