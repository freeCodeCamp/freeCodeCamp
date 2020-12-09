import passport from 'passport';
import { check } from 'express-validator';
import { isEmail } from 'validator';
import jwt from 'jsonwebtoken';

import { i18n } from '../i18n';
import { homeLocation } from '../../../config/env';
import { jwtSecret } from '../../../config/secrets';

import {
  createPassportCallbackAuthenticator,
  devSaveResponseAuthCookies,
  devLoginRedirect
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
  const devSaveAuthCookies = devSaveResponseAuthCookies();
  const devLoginSuccessRedirect = devLoginRedirect();
  const api = app.loopback.Router();

  // Use a local mock strategy for signing in if we are in dev mode.
  // Otherwise we use auth0 login. We use a string for 'true' because values
  // set in the env file will always be strings and never boolean.
  if (process.env.LOCAL_MOCK_AUTH === 'true') {
    api.get(
      '/signin',
      passport.authenticate('devlogin'),
      devSaveAuthCookies,
      devLoginSuccessRedirect
    );
  } else {
    api.get('/signin', ifUserRedirect, (req, res, next) => {
      const state = jwt.sign({ returnTo: req.query.returnTo }, jwtSecret);
      return passport.authenticate('auth0-login', { state })(req, res, next);
    });

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
          message: i18n.__('msg-11'),
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
          message: i18n.__('msg-12'),
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
                message: i18n.__('msg-13'),
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
                    message: i18n.__('msg-13'),
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
                      message: i18n.__('msg-13'),
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
                      message: i18n.__('msg-14'),
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
          req.flash('success', i18n.__('msg-15'));
          return res.redirectWithFlash(`${homeLocation}/learn`);
        })
        .subscribe(() => {}, next)
    );
  };
}
