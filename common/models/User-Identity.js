import loopback from 'loopback';
import debugFactory from 'debug';

import {
  setProfileFromGithub,
  getFirstImageFromProfile,
  getSocialProvider
} from '../../server/utils/auth';

const debug = debugFactory('freecc:models:userIdent');

const { defaultProfileImage } = require('../utils/constantStrings.json');

function createAccessToken(user, ttl, cb) {
  if (arguments.length === 2 && typeof ttl === 'function') {
    cb = ttl;
    ttl = 0;
  }
  user.accessTokens.create({
    created: new Date(),
    ttl: Math.min(ttl || user.constructor.settings.ttl,
      user.constructor.settings.maxTTL)
  }, cb);
}

export default function(UserIdent) {
  // original source
  // github.com/strongloop/loopback-component-passport
  UserIdent.login = function(
    provider,
    authScheme,
    profile,
    credentials,
    options,
    cb
  ) {
    options = options || {};
    if (typeof options === 'function' && !cb) {
      cb = options;
      options = {};
    }
    var autoLogin = options.autoLogin || !options.autoLogin;
    var userIdentityModel = UserIdent;
    profile.id = profile.id || profile.openid;
    userIdentityModel.findOne({
      where: {
        provider: getSocialProvider(provider),
        externalId: profile.id
      }
    }, function(err, identity) {
      if (err) {
        return cb(err);
      }
      if (identity) {
        identity.credentials = credentials;
        return identity.updateAttributes({
          profile: profile,
          credentials: credentials,
          modified: new Date()
        }, function(err) {
          if (err) {
            return cb(err);
          }
          // Find the user for the given identity
          return identity.user(function(err, user) {
            // Create access token if the autoLogin flag is set to true
            if (!err && user && autoLogin) {
              return (options.createAccessToken || createAccessToken)(
                user,
                function(err, token) {
                  cb(err, user, identity, token);
                }
              );
            }
            cb(err, user, identity);
          });
        });
      }
      // Find the user model
      var userModel = userIdentityModel.relations.user &&
        userIdentityModel.relations.user.modelTo ||
        loopback.getModelByType(loopback.User);

      var userObj = options.profileToUser(provider, profile, options);

      if (!userObj.email && !options.emailOptional) {
        process.nextTick(function() {
          return cb('email is missing from the user profile');
        });
      }

      var query;
      if (userObj.email) {
        query = { or: [
          { username: userObj.username },
          { email: userObj.email }
        ]};
      } else {
        query = { username: userObj.username };
      }
      userModel.findOrCreate({ where: query }, userObj, function(err, user) {
        if (err) {
          return cb(err);
        }
        var date = new Date();
        userIdentityModel.create({
          provider: getSocialProvider(provider),
          externalId: profile.id,
          authScheme: authScheme,
          profile: profile,
          credentials: credentials,
          userId: user.id,
          created: date,
          modified: date
        }, function(err, identity) {
          if (!err && user && autoLogin) {
            return (options.createAccessToken || createAccessToken)(
              user,
              function(err, token) {
                cb(err, user, identity, token);
              }
            );
          }
          cb(err, user, identity);
        });
      });
    });
  };

  UserIdent.observe('before save', function(ctx, next) {
    var userIdent = ctx.currentInstance || ctx.instance;
    if (!userIdent) {
      debug('no user identity instance found');
      return next();
    }
    userIdent.user(function(err, user) {
      let userChanged = false;
      if (err) { return next(err); }
      if (!user) {
        debug('no user attached to identity!');
        return next();
      }

      const { profile, provider } = userIdent;
      const picture = getFirstImageFromProfile(profile);

      debug('picture', picture, user.picture);
      // check if picture was found
      // check if user has no picture
      // check if user has default picture
      // set user.picture from oauth provider
      if (
        picture &&
        (!user.picture || user.picture === defaultProfileImage)
      ) {
        debug('setting user picture');
        user.picture = picture;
        userChanged = true;
      }

      if (!(/github/).test(provider)) {
        debug('setting social', provider, (/github/g).test(provider));
        debug('profile username', profile.username);
        user[provider] = profile.username;
      }

      // if user signed in with github refresh their info
      if (/github/.test(provider)) {
        debug("user isn't github cool or username from github is different");
        setProfileFromGithub(user, profile, profile._json);
        userChanged = true;
      }


      if (userChanged) {
        return user.save(function(err) {
          if (err) { return next(err); }
          next();
        });
      }
      debug('exiting after user identity before save');
      next();
  });
 });
}
