import loopback from 'loopback';
import debugFactory from 'debug';

import {
  setProfileFromGithub,
  getFirstImageFromProfile,
  getUsernameFromProvider,
  getSocialProvider
} from '../../server/utils/auth';
import { defaultProfileImage } from '../utils/constantStrings.json';

const githubRegex = (/github/i);
const debug = debugFactory('fcc:models:userIdent');

export default function(UserIdent) {
  // original source
  // github.com/strongloop/loopback-component-passport
  const createAccountMessage =
    'Accounts can only be created using GitHub or though email';
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
    const userIdentityModel = UserIdent;
    profile.id = profile.id || profile.openid;
    const filter = {
      where: {
        provider: getSocialProvider(provider),
        externalId: profile.id
      }
    };
    return userIdentityModel.findOne(filter)
      .then(identity => {
        // identity already exists
        // find user and log them in
        if (identity) {
          identity.credentials = credentials;
          const options = {
            profile: profile,
            credentials: credentials,
            modified: new Date()
          };
          return identity.updateAttributes(options)
            // grab user associated with identity
            .then(() => identity.user())
            .then(user => {
              // Create access token for user
              const options = {
                created: new Date(),
                ttl: user.constructor.settings.ttl
              };
              return user.accessTokens.create(options)
                .then(token => ({ user, token }));
            })
            .then(({ token, user })=> {
              cb(null, user, identity, token);
            })
            .catch(err => cb(err));
        }
        // Find the user model
        const userModel = userIdentityModel.relations.user &&
          userIdentityModel.relations.user.modelTo ||
          loopback.getModelByType(loopback.User);

        const userObj = options.profileToUser(provider, profile, options);
        if (getSocialProvider(provider) !== 'github') {
          const err = new Error(createAccountMessage);
          err.userMessage = createAccountMessage;
          err.messageType = 'info';
          err.redirectTo = '/signin';
          return process.nextTick(() => cb(err));
        }

        let query;
        if (userObj.email) {
          query = { or: [
            { username: userObj.username },
            { email: userObj.email }
          ]};
        } else {
          query = { username: userObj.username };
        }
        return userModel.findOrCreate({ where: query }, userObj)
          .then(([ user ]) => {
            const promises = [
              userIdentityModel.create({
                provider: getSocialProvider(provider),
                externalId: profile.id,
                authScheme: authScheme,
                profile: profile,
                credentials: credentials,
                userId: user.id,
                created: new Date(),
                modified: new Date()
              }),
              user.accessTokens.create({
                created: new Date(),
                ttl: user.constructor.settings.ttl
              })
            ];
            return Promise.all(promises)
              .then(([ identity, token ]) => ({ user, identity, token }));
          })
          .then(({ user, token, identity }) => cb(null, user, identity, token))
          .catch(err => cb(err));
      });
  };

  UserIdent.observe('before save', function(ctx, next) {
    const userIdent = ctx.currentInstance || ctx.instance;
    if (!userIdent) {
      debug('no user identity instance found');
      return next();
    }
    return userIdent.user(function(err, user) {
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

      if (!githubRegex.test(provider) && profile) {
        user[provider] = getUsernameFromProvider(provider, profile);
        userChanged = true;
      }

      // if user signed in with github refresh their info
      if (githubRegex.test(provider) && profile && profile._json) {
        debug("user isn't github cool or username from github is different");
        setProfileFromGithub(user, profile, profile._json);
        userChanged = true;
      }


      if (userChanged) {
        return user.save(function(err) {
          if (err) { return next(err); }
          return next();
        });
      }
      debug('exiting after user identity before save');
      return next();
  });
 });
}
