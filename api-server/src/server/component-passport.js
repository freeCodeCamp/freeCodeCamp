import passport from 'passport';
// eslint-disable-next-line
import {
  // prettier ignore
  PassportConfigurator
} from '@freecodecamp/loopback-component-passport';
import url from 'url';
import dedent from 'dedent';

import { getUserById } from './utils/user-stats';
import { homeLocation } from '../../config/env';
import passportProviders from './passport-providers';
import { setAccessTokenToResponse } from './utils/getSetAccessToken';
import { jwtSecret } from '../../config/secrets';
import getReturnTo from './utils/get-return-to';

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

  Object.keys(passportProviders).map(function(strategy) {
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
    const successRedirect = req => {
      if (req && req.query && req.query.returnTo) {
        return req.query.returnTo;
      }
      return `${homeLocation}/learn`;
    };

    let redirect = url.parse(successRedirect(req), true);
    delete redirect.search;

    redirect = url.format(redirect);
    return res.redirect(redirect);
  };
};

export const createPassportCallbackAuthenticator = (strategy, config) => (
  req,
  res,
  next
) => {
  const state = req && req.query && req.query.state;
  const { returnTo } = getReturnTo(state, jwtSecret);

  // TODO: getReturnTo returns a {returnTo, success} object, so we can use
  // 'success' to show a flash message, but currently it immediately gets
  // overwritten by a second message. We should either change the message if
  // !success or allow multiple messages to appear at once.

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
          req.flash(
            'success',
            dedent`
              Success! You have signed in to your account. Happy Coding!
            `
          );
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
      // TODO: handle returning to /email-sign-up without relying on
      // homeLocation
      if (user.acceptedPrivacyTerms) {
        return res.redirectWithFlash(returnTo);
      } else {
        return res.redirectWithFlash(`${homeLocation}/email-sign-up`);
      }
    }
  )(req, res, next);
};
