import passport from 'passport';
import { PassportConfigurator } from 'loopback-component-passport';
import passportProviders from './passport-providers';
import uuid from 'node-uuid';
import { generateKey } from 'loopback-component-passport/lib/models/utils';

import {
  setProfileFromGithub,
  getSocialProvider,
  getUsernameFromProvider
} from './utils/auth';

const passportOptions = {
  emailOptional: true,
  profileToUser(provider, profile) {
    var emails = profile.emails;
    // NOTE(berks): get email or set to null.
    // MongoDB indexs email but can be sparse(blank)
    var email = emails && emails[0] && emails[0].value ?
      emails[0].value :
      null;

    // create random username
    // username will be assigned when camper signups for Github
    var username = 'fcc' + uuid.v4().slice(0, 8);
    var password = generateKey('password');
    var userObj = {
      username: username,
      password: password
    };

    if (email) {
      userObj.email = email;
    }

    if (!(/github/).test(provider)) {
      userObj[getSocialProvider(provider)] = getUsernameFromProvider(
        getSocialProvider(provider),
        profile
      );
    }

    if (/github/.test(provider)) {
      setProfileFromGithub(userObj, profile, profile._json);
    }
    return userObj;
  }
};

const fields = {
  progressTimestamps: false,
  completedChallenges: false,
  challengeMap: false
};

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
      this.app.dataSources.db.connector
        .collection('user')
        .aggregate([
          { $match: { _id: user.id } },
          { $project: { points: { $size: '$progressTimestamps' } } }
        ], function(err, { points = 1 } = {}) {
          if (err) { return done(err); }
          user.points = points;
          done(null, user);
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
    var config = passportProviders[strategy];
    config.session = config.session !== false;
    configurator.configureProvider(
      strategy,
      {
        ...config,
        ...passportOptions
      }
    );
  });
}
