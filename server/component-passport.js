import passport from 'passport';
import { PassportConfigurator } from
 '@freecodecamp/loopback-component-passport';
import passportProviders from './passport-providers';
import url from 'url';

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
  ].reduce((sum, key) => user[key] ? sum + 1 : sum, 0);
}

function getLegacyCertCount(user) {
  return [
    'isFrontEndCert',
    'isBackEndCert',
    'isDataVisCert'
  ].reduce((sum, key) => user[key] ? sum + 1 : sum, 0);
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
        ], function(err, [{ points = 1 } = {}]) {
          if (err) { return done(err); }
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

export default function setupPassport(app) {
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

    // https://stackoverflow.com/q/37430452
    let successRedirect = (req) => {
      if (!!req && req.session && req.session.returnTo) {
        let returnTo = req.session.returnTo;
        delete req.session.returnTo;
        return returnTo;
      }
      return config.successRedirect || '';
    };

    config.customCallback = !config.useCustomCallback
      ? null
      : (req, res, next) => {

        passport.authenticate(
          strategy,
          { session: false },
          (err, user, userInfo) => {

            if (err) {
              return next(err);
            }

            if (!user || !userInfo) {
              return res.redirect(config.failureRedirect);
            }
            let redirect = url.parse(successRedirect(req), true);

            delete redirect.search;

            const { accessToken } = userInfo;
            if (accessToken && accessToken.id) {
              req.flash(
                'success',
                'Success! You have signed in to your account. Happy Coding!'
              );
              const cookieConfig = {
                signed: !!req.signedCookies,
                maxAge: accessToken.ttl
              };
              res.cookie('access_token', accessToken.id, cookieConfig);
              res.cookie('userId', accessToken.userId, cookieConfig);
              req.login(user);
            }

            redirect = url.format(redirect);
            return res.redirect(redirect);
          }
        )(req, res, next);
    };

    configurator.configureProvider(
      strategy,
      {
        ...config,
        ...passportOptions
      }
    );
  });
}
