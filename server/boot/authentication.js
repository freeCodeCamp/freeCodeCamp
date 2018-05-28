import _ from 'lodash';
import { Observable } from 'rx';
import dedent from 'dedent';
// import debugFactory from 'debug';
import { isEmail } from 'validator';
import { check } from 'express-validator/check';

import {
  ifUserRedirectTo,
  ifNoUserRedirectTo,
  createValidatorErrorHandler
} from '../utils/middleware';
import { wrapHandledError } from '../utils/create-handled-error.js';
import { homeURL } from '../../common/utils/constantStrings.json';

const isSignUpDisabled = !!process.env.DISABLE_SIGNUP;
// const debug = debugFactory('fcc:boot:auth');
if (isSignUpDisabled) {
  console.log('fcc:boot:auth - Sign up is disabled');
}

module.exports = function enableAuthentication(app) {
  // enable loopback access control authentication. see:
  //  loopback.io/doc/en/lb2/Authentication-authorization-and-permissions.html
  app.enableAuth();
  const ifUserRedirect = ifUserRedirectTo();
  const ifNoUserRedirectHome = ifNoUserRedirectTo(homeURL);
  const router = app.loopback.Router();
  const api = app.loopback.Router();
  const { AuthToken, User } = app.models;

  router.get('/signup', (req, res) => res.redirect(301, '/signin'));
  router.get('/email-signin', (req, res) => res.redirect(301, '/signin'));
  router.get('/login', (req, res) => res.redirect(301, '/signin'));
  router.get('/logout', (req, res) => res.redirect(301, '/signout'));

  router.get('/signin',
  ifUserRedirect,
  (req, res) => res.redirect(301, '/auth/auth0'));

  router.get('/signout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  router.get(
    '/deprecated-signin',
    ifUserRedirect,
    (req, res) => res.render('account/deprecated-signin', {
      title: 'Sign in to freeCodeCamp using a Deprecated Login'
    })
  );

  router.get(
    '/accept-privacy-terms',
    ifNoUserRedirectHome,
    (req, res) => {
      const { user } = req;
      if (user && !user.acceptedPrivacyTerms) {
        return res.render('account/accept-privacy-terms', {
          title: 'Privacy Policy and Terms of Service'
        });
      }
      return res.redirect('/settings');
    }
  );

  const defaultErrorMsg = dedent`
    Oops, something is not right,
    please request a fresh link to sign in / sign up.
  `;

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

  function getPasswordlessAuth(req, res, next) {
    const {
      query: {
        email: encodedEmail,
        token: authTokenId,
        emailChange
      } = {}
    } = req;

    const email = User.decodeEmail(encodedEmail);
    if (!isEmail(email)) {
      return next(wrapHandledError(
        new TypeError('decoded email is invalid'),
        {
          type: 'info',
          message: 'The email encoded in the link is incorrectly formatted',
          redirectTo: '/signin'
        }
      ));
    }
    // first find
    return AuthToken.findOne$({ where: { id: authTokenId } })
      .flatMap(authToken => {
        if (!authToken) {
          throw wrapHandledError(
            new Error(`no token found for id: ${authTokenId}`),
            {
              type: 'info',
              message: defaultErrorMsg,
              redirectTo: '/signin'
            }
          );
        }
        // find user then validate and destroy email validation token
        // finally retun user instance
        return User.findOne$({ where: { id: authToken.userId } })
          .flatMap(user => {
            if (!user) {
              throw wrapHandledError(
                new Error(`no user found for token: ${authTokenId}`),
                {
                  type: 'info',
                  message: defaultErrorMsg,
                  redirectTo: '/signin'
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
                    redirectTo: '/signin'
                  }
                );
              }
            }
            return authToken.validate$()
              .map(isValid => {
                if (!isValid) {
                  throw wrapHandledError(
                    new Error('token is invalid'),
                    {
                      type: 'info',
                      message: `
                        Looks like the link you clicked has expired,
                        please request a fresh link, to sign in.
                      `,
                      redirectTo: '/signin'
                    }
                  );
                }
                return authToken.destroy$();
              })
              .map(() => user);
          });
      })
      // at this point token has been validated and destroyed
      // update user and log them in
      .map(user => user.loginByRequest(req, res))
      .do(() => {
        let redirectTo = '/';

        if (
          req.session &&
          req.session.returnTo
        ) {
          redirectTo = req.session.returnTo;
        }

        req.flash(
          'success',
          'Success! You have signed in to your account. Happy Coding!'
        );

        return res.redirect(redirectTo);
      })
      .subscribe(
        () => {},
        next
      );
  }

  router.get(
    '/passwordless-auth',
    ifUserRedirect,
    passwordlessGetValidators,
    createValidatorErrorHandler('errors', '/signin'),
    getPasswordlessAuth
  );

  router.get(
    '/passwordless-change',
    ifNoUserRedirectHome,
    passwordlessGetValidators,
    getPasswordlessAuth
  );

  const passwordlessPostValidators = [
    check('email')
      .isEmail()
      .withMessage('Email is not a valid email address.')
  ];
  function postPasswordlessAuth(req, res, next) {
    const { body: { email } = {} } = req;

    return User.findOne$({ where: { email } })
      .flatMap(_user => Observable.if(
          // if no user found create new user and save to db
          _.constant(_user),
          Observable.of(_user),
          User.create$({ email })
        )
        .flatMap(user => user.requestAuthEmail(!_user))
      )
      .do(msg => {
        let redirectTo = '/';

        if (
          req.session &&
          req.session.returnTo
        ) {
          redirectTo = req.session.returnTo;
        }

        req.flash('info', msg);
        return res.redirect(redirectTo);
      })
      .subscribe(_.noop, next);
  }

  api.post(
    '/passwordless-auth',
    ifUserRedirect,
    passwordlessPostValidators,
    createValidatorErrorHandler('errors', '/signin'),
    postPasswordlessAuth
  );

  app.use(router);
  app.use(api);
};
