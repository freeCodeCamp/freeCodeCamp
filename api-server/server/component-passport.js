import passport from 'passport';
import {
  PassportConfigurator
} from '@freecodecamp/loopback-component-passport';
import url from 'url';
import jwt from 'jsonwebtoken';
import dedent from 'dedent';

import { homeLocation } from '../../config/env.json';
import { jwtSecret } from '../../config/secrets';
import passportProviders from './passport-providers';
import { createCookieConfig } from './utils/cookieConfig';

const passportOptions = {
  emailOptional: true,
  profileToUser: null
};

const fields = {
  progressTimestamps: false
};

function getCompletedCertCount(user) {
  return [
    'isApisMicroservicesCert',
    'is2018DataVisCert',
    'isFrontEndLibsCert',
    'isInfosecQaCert',
    'isJsAlgoDataStructCert',
    'isRespWebDesignCert'
  ].reduce((sum, key) => (user[key] ? sum + 1 : sum), 0);
}

function getLegacyCertCount(user) {
  return ['isFrontEndCert', 'isBackEndCert', 'isDataVisCert'].reduce(
    (sum, key) => (user[key] ? sum + 1 : sum),
    0
  );
}

PassportConfigurator.prototype.init = function passportInit(noSession) {
  this.app.middleware('session:after', passport.initialize());

  if (noSession) {
    return;
  }

  this.app.middleware('session:after', passport.session());

  // Serialization and deserialization is only required if passport session is
  // enabled

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    this.userModel.findById(id, { fields }, (err, user) => {
      if (err || !user) {
        return done(err, user);
      }

      return this.app.dataSources.db.connector
        .collection('user')
        .aggregate([
          { $match: { _id: user.id } },
          { $project: { points: { $size: '$progressTimestamps' } } }
        ])
        .get(function(err, [{ points = 1 } = {}]) {
          if (err) {
            console.error(err);
            return done(err);
          }
          user.points = points;
          let completedChallengeCount = 0;
          let completedProjectCount = 0;
          if ('completedChallenges' in user) {
            completedChallengeCount = user.completedChallenges.length;
            user.completedChallenges.forEach(item => {
              if (
                'challengeType' in item &&
                (item.challengeType === 3 || item.challengeType === 4)
              ) {
                completedProjectCount++;
              }
            });
          }
          user.completedChallengeCount = completedChallengeCount;
          user.completedProjectCount = completedProjectCount;
          user.completedCertCount = getCompletedCertCount(user);
          user.completedLegacyCertCount = getLegacyCertCount(user);
          user.completedChallenges = [];
          return done(null, user);
        });
    });
  });
};

export function setupPassport(app) {
  // NOTE(Bouncey): Not sure this is doing much now
  // Loopback complains about userCredentialModle when this
  // setup is remoed from server/server.js
  //
  // I have split the custom callback in to it's own export that we can use both
  // here and in boot:auth
  //
  // Needs more investigation...

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

export const createPassportCallbackAuthenticator = (strategy, config) => (
  req,
  res,
  next
) => {
  // https://stackoverflow.com/q/37430452
  const successRedirect = req => {
    if (!!req && req.session && req.session.returnTo) {
      delete req.session.returnTo;
      return `${homeLocation}/welcome`;
    }
    return config.successRedirect || `${homeLocation}/welcome`;
  };
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
      let redirect = url.parse(successRedirect(req), true);

      delete redirect.search;

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
        const cookieConfig = {
          ...createCookieConfig(req),
          maxAge: accessToken.ttl
        };
        const jwtAccess = jwt.sign({ accessToken }, jwtSecret);
        res.cookie('jwt_access_token', jwtAccess, cookieConfig);
        res.cookie('access_token', accessToken.id, cookieConfig);
        res.cookie('userId', accessToken.userId, cookieConfig);
        req.login(user);
      }

      redirect = url.format(redirect);
      return res.redirect(redirect);
    }
  )(req, res, next);
};
