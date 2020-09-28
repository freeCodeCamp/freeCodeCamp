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

export const saveResponseAuthCookies = () => {
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

export const loginRedirect = () => {
  return (req, res) => {
    const successRedirect = req => {
      if (!!req && req.session && req.session.returnTo) {
        delete req.session.returnTo;
        return `${homeLocation}/learn`;
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
  const returnTo =
    req && req.query && req.query.state
      ? Buffer.from(req.query.state, 'base64').toString('utf-8')
      : `${homeLocation}/learn`;
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
      const redirect = `${returnTo}`;

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
      // TODO: enable 'returnTo' for sign-up
      if (user.acceptedPrivacyTerms) {
        return res.redirectWithFlash(redirect);
      } else {
        return res.redirectWithFlash(`${homeLocation}/email-sign-up`);
      }
    }
  )(req, res, next);
};
