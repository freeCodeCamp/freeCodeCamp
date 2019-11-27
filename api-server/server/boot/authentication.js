import passport from 'passport';
import dedent from 'dedent';
import { check } from 'express-validator/check';
import { isEmail } from 'validator';

import { homeLocation } from '../../../config/env';
import {
  createPassportCallbackAuthenticator,
  saveResponseAuthCookies,
  loginRedirect
} from '../component-passport';
import { ifUserRedirectTo, ifNoUserRedirectTo } from '../utils/middleware';
import { wrapHandledError } from '../utils/create-handled-error.js';
import { removeCookies } from '../utils/getSetAccessToken';
import { decodeEmail } from '../../common/utils';

const isSignUpDisabled = !!process.env.DISABLE_SIGNUP;
if (isSignUpDisabled) {
  console.log('fcc:boot:auth - Sign up is disabled');
}

const passwordlessGetValidators = [
  check('email')
    .isBase64()
    .withMessage('Email should be a base64 encoded string.'),
  check('token')
    .exists()
    .withMessage('Token should exist.')
    // based on strongloop/loopback/common/models/access-token.js#L15
    .isLength({ min: 64, max: 64 })
    .withMessage('Token is not the right length.')
];

module.exports = function enableAuthentication(app) {
  // enable loopback access control authentication. see:
  // loopback.io/doc/en/lb2/Authentication-authorization-and-permissions.html
  app.enableAuth();
  const ifUserRedirect = ifUserRedirectTo();
  const ifNoUserRedirectHome = ifNoUserRedirectTo(homeLocation);
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
  } else {
    api.get(
      '/signin',
      (req, res, next) => {
        if (req && req.query && req.query.returnTo) {
          req.query.returnTo = `${homeLocation}/${req.query.returnTo}`;
        }
        return next();
      },
      ifUserRedirect,
      (req, res, next) => {
        const state = req.query.returnTo
          ? Buffer.from(req.query.returnTo).toString('base64')
          : null;
        return passport.authenticate('auth0-login', { state })(req, res, next);
      }
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
          message: 'We could not log you out, please try again in a moment.',
          redirectTo: homeLocation
        });
      }
      removeCookies(req, res);
      res.redirect(homeLocation);
    });
  });

  api.get(
    '/confirm-email',
    ifNoUserRedirectHome,
    passwordlessGetValidators,
    createGetPasswordlessAuth(app)
  );

  app.use(api);
};

const defaultErrorMsg = dedent`
    Oops, something is not right,
    please request a fresh link to sign in / sign up.
  `;

function createGetPasswordlessAuth(app) {
  const {
    models: { AuthToken, User }
  } = app;
  return function getPasswordlessAuth(req, res, next) {
    const {
      query: { email: encodedEmail, token: authTokenId, emailChange } = {}
    } = req;

    const email = decodeEmail(encodedEmail);
    if (!isEmail(email)) {
      return next(
        wrapHandledError(new TypeError('decoded email is invalid'), {
          type: 'info',
          message: 'The email encoded in the link is incorrectly formatted',
          redirectTo: `${homeLocation}/signin`
        })
      );
    }
    // first find
    return (
      AuthToken.findOne$({ where: { id: authTokenId } })
        .flatMap(authToken => {
          if (!authToken) {
            throw wrapHandledError(
              new Error(`no token found for id: ${authTokenId}`),
              {
                type: 'info',
                message: defaultErrorMsg,
                redirectTo: `${homeLocation}/signin`
              }
            );
          }
          // find user then validate and destroy email validation token
          // finally retun user instance
          return User.findOne$({ where: { id: authToken.userId } }).flatMap(
            user => {
              if (!user) {
                throw wrapHandledError(
                  new Error(`no user found for token: ${authTokenId}`),
                  {
                    type: 'info',
                    message: defaultErrorMsg,
                    redirectTo: `${homeLocation}/signin`
                  }
                );
              }
              if (user.email !== email) {
                if (!emailChange || (emailChange && user.newEmail !== email)) {
                  throw wrapHandledError(
                    new Error('user email does not match'),
                    {
                      type: 'info',
                      message: defaultErrorMsg,
                      redirectTo: `${homeLocation}/signin`
                    }
                  );
                }
              }
              return authToken
                .validate$()
                .map(isValid => {
                  if (!isValid) {
                    throw wrapHandledError(new Error('token is invalid'), {
                      type: 'info',
                      message: `
                        Looks like the link you clicked has expired,
                        please request a fresh link, to sign in.
                      `,
                      redirectTo: `${homeLocation}/signin`
                    });
                  }
                  return authToken.destroy$();
                })
                .map(() => user);
            }
          );
        })
        // at this point token has been validated and destroyed
        // update user and log them in
        .map(user => user.loginByRequest(req, res))
        .do(() => {
          req.flash(
            'success',
            'Success! You have signed in to your account. Happy Coding!'
          );
          return res.redirectWithFlash(`${homeLocation}/learn`);
        })
        .subscribe(() => {}, next)
    );
  };
}
