import { PassportConfigurator } from '@freecodecamp/loopback-component-passport';
import dedent from 'dedent';
import passport from 'passport';

import { availableLangs } from '../../../config/i18n/all-langs';
import { jwtSecret } from '../../../config/secrets';
import passportProviders from './passport-providers';
import { setAccessTokenToResponse } from './utils/getSetAccessToken';
import {
  getReturnTo,
  getPrefixedLandingPath,
  getRedirectParams,
  haveSamePath
} from './utils/redirection';
import { getUserById } from './utils/user-stats';

const passportOptions = {
  emailOptional: true,
  profileToUser: null
};

PassportConfigurator.prototype.init = function passportInit(noSession) {
  this.app.middleware('session:after', passport.initialize());

  if (noSession) {
    return;
  }

  this.app.middleware('session:after', passport.session());

  // Serialization and deserialization is only required if passport session is
  // enabled

  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser(async (id, done) => {
    const user = await getUserById(id).catch(done);
    return done(null, user);
  });
};

export function setupPassport(app) {
  const configurator = new PassportConfigurator(app);

  configurator.setupModels({
    userModel: app.models.user,
    userIdentityModel: app.models.userIdentity,
    userCredentialModel: app.models.userCredential
  });

  configurator.init();

  Object.keys(passportProviders).map(function (strategy) {
    let config = passportProviders[strategy];
    config.session = config.session !== false;

    config.customCallback = !config.useCustomCallback
      ? null
      : createPassportCallbackAuthenticator(strategy, config);

    configurator.configureProvider(strategy, {
      ...config,
      ...passportOptions
    });
  });
}

export const devSaveResponseAuthCookies = () => {
  return (req, res, next) => {
    const user = req.user;

    if (!user) {
      return res.redirect('/signin');
    }

    const { accessToken } = user;

    setAccessTokenToResponse({ accessToken }, req, res);
    return next();
  };
};

export const devLoginRedirect = () => {
  return (req, res) => {
    // this mirrors the production approach, but only validates the prefix
    let { returnTo, origin, pathPrefix } = getRedirectParams(
      req,
      ({ returnTo, origin, pathPrefix }) => {
        pathPrefix = availableLangs.client.includes(pathPrefix)
          ? pathPrefix
          : '';
        return {
          returnTo,
          origin,
          pathPrefix
        };
      }
    );

    // if returnTo has a trailing slash, we need to remove it before comparing
    // it to the prefixed landing path
    if (returnTo.slice(-1) === '/') {
      returnTo = returnTo.slice(0, -1);
    }
    const redirectBase = getPrefixedLandingPath(origin, pathPrefix);
    returnTo += haveSamePath(redirectBase, returnTo) ? '/learn' : '';
    return res.redirect(returnTo);
  };
};

export const createPassportCallbackAuthenticator =
  (strategy, config) => (req, res, next) => {
    return passport.authenticate(
      strategy,
      { session: false },
      (err, user, userInfo) => {
        if (err) {
          return next(err);
        }

        if (!user || !userInfo) {
          return res.redirect('/signin');
        }

        const { accessToken } = userInfo;
        const { provider } = config;
        if (accessToken && accessToken.id) {
          if (provider === 'auth0') {
            req.flash('success', 'flash.signin-success');
          } else if (user.email) {
            req.flash(
              'info',
              dedent`
We are moving away from social authentication for privacy reasons. Next time
we recommend using your email address: ${user.email} to sign in instead.
            `
            );
          }
          setAccessTokenToResponse({ accessToken }, req, res);
          req.login(user);
        }

        const state = req && req.query && req.query.state;
        // returnTo, origin and pathPrefix are audited by getReturnTo
        let { returnTo, origin, pathPrefix } = getReturnTo(state, jwtSecret);
        const redirectBase = getPrefixedLandingPath(origin, pathPrefix);

        // TODO: getReturnTo could return a success flag to show a flash message,
        // but currently it immediately gets overwritten by a second message. We
        // should either change the message if the flag is present or allow
        // multiple messages to appear at once.

        if (user.acceptedPrivacyTerms) {
          // if returnTo has a trailing slash, we need to remove it before comparing
          // it to the prefixed landing path
          if (returnTo.slice(-1) === '/') {
            returnTo = returnTo.slice(0, -1);
          }
          returnTo += haveSamePath(redirectBase, returnTo) ? '/learn' : '';
          return res.redirectWithFlash(returnTo);
        } else {
          return res.redirectWithFlash(`${redirectBase}/email-sign-up`);
        }
      }
    )(req, res, next);
  };
