import passport from 'passport';

import { homeLocation } from '../../../config/env';
import {
  createPassportCallbackAuthenticator,
  saveResponseAuthCookies,
  loginRedirect
} from '../component-passport';
import { ifUserRedirectTo } from '../utils/middleware';
import { wrapHandledError } from '../utils/create-handled-error.js';
import { removeCookies } from '../utils/getSetAccessToken';

const isSignUpDisabled = !!process.env.DISABLE_SIGNUP;
if (isSignUpDisabled) {
  console.log('fcc:boot:auth - Sign up is disabled');
}

module.exports = function enableAuthentication(app) {
  // enable loopback access control authentication. see:
  // loopback.io/doc/en/lb2/Authentication-authorization-and-permissions.html
  app.enableAuth();
  const ifUserRedirect = ifUserRedirectTo();
  const saveAuthCookies = saveResponseAuthCookies();
  const loginSuccessRedirect = loginRedirect();
  const api = app.loopback.Router();

  // Use a local mock strategy for signing in if we are in dev mode.
  // Otherwise we use auth0 login. We use a string for 'true' because values
  // set in the env file will always be strings and never boolean.
  if (process.env.LOCAL_MOCK_AUTH === 'true') {
    api.get(
      '/signin',
      passport.authenticate('devlogin'),
      saveAuthCookies,
      loginSuccessRedirect
    );
  } else if (process.env.LOCAL_EMAIL_AUTH === 'true') {
    api.get('/local-auth-page', ifUserRedirect, (req, res) =>
      res.render('render-local-auth-page')
    );
    api.post('/local-signin', ifUserRedirect, passport.authenticate('local'));
    api.post('/local-signup', ifUserRedirect, (req, res) => {
      console.log('Todo: Implement Signup');
      res.status(200).send();
    });
  } else {
    api.get(
      '/signin',
      ifUserRedirect,
      passport.authenticate('auth0-login', {})
    );

    api.get(
      '/auth/auth0/callback',
      createPassportCallbackAuthenticator('auth0-login', { provider: 'auth0' })
    );
  }

  api.get('/signout', (req, res) => {
    req.logout();
    req.session.destroy(err => {
      if (err) {
        throw wrapHandledError(new Error('could not destroy session'), {
          type: 'info',
          message: 'Oops, something is not right.',
          redirectTo: homeLocation
        });
      }
      removeCookies(req, res);
      res.redirect(homeLocation);
    });
  });

  app.use(api);
};
