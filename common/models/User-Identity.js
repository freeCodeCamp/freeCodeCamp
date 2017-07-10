import debugFactory from 'debug';
import dedent from 'dedent';
import { Observable } from 'rx';

import {
  setProfileFromGithub,
  getFirstImageFromProfile,
  getUsernameFromProvider,
  getSocialProvider
} from '../../server/utils/auth';
import { defaultProfileImage } from '../utils/constantStrings.json';
import { observeMethod, observeQuery } from '../../server/utils/rx';
import { wrapHandledError } from '../../server/utils/create-handled-error.js';

const githubRegex = (/github/i);
const debug = debugFactory('fcc:models:userIdent');

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
    const userIdentityModel = UserIdent;
    profile.id = profile.id || profile.openid;
    const query = {
      where: {
        provider: getSocialProvider(provider),
        externalId: profile.id
      }
    };
    return userIdentityModel.findOne(query)
      .then(identity => {
        if (!identity) {
          throw wrapHandledError(
            new Error('user identity account not found'),
            {
              message: dedent`
                New accounts can only be created using an email address.
                Please create an account below
              `,
              type: 'info',
              redirectTo: '/signup'
            }
          );
        }
        // identity already exists
        // find user and log them in
        identity.credentials = credentials;
        const options = {
          // we no longer want to keep the profile
          // this is information we do not need or use
          profile: null,
          credentials: credentials,
          modified: new Date()
        };
        return identity.updateAttributes(options)
          // grab user associated with identity
          .then(identity => {
            const user = identity.user();
            // Create access token for user
            const options = {
              created: new Date(),
              ttl: user.constructor.settings.ttl
            };
            return user.accessTokens.create(options)
              .then(token => cb(null, user, identity, token));
          });
      })
      .catch(cb);
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

  UserIdent.link = function(
    userId,
    provider,
    authScheme,
    profile,
    credentials,
    options = {},
    cb
  ) {
    if (typeof options === 'function' && !cb) {
      cb = options;
      options = {};
    }
    const findIdent = observeMethod(UserIdent, 'findOne');
    const createIdent = observeMethod(UserIdent, 'create');
    const query = {
      where: {
        provider: getSocialProvider(provider),
        externalId: profile.id
      }
    };

    debug('link identity query', query);
    return findIdent(query)
      .flatMap(identity => {
        const modified = new Date();
        if (!identity) {
          return createIdent({
            provider: getSocialProvider(provider),
            externalId: profile.id,
            authScheme,
            // we no longer want to keep the profile
            // this is information we do not need or use
            profile: null,
            credentials,
            userId,
            created: modified,
            modified
          });
        }
        if (identity.userId.toString() !== userId.toString()) {
          return Observable.throw(
            new Error(
              dedent`
Your GitHub is already associated with another account.
You may have accidentally created a duplicate account.
No worries, though. We can fix this real quick.
Please email us with your GitHub username: team@freecodecamp.com.
              `.split('/n').join(' ')
            )
          );
        }
        identity.credentials = credentials;
        return Observable.combineLatest(
          observeQuery(
            identity,
            'updateAttributes',
            {
              profile,
              credentials,
              modified
            }
          ),
          Observable.fromPromise(identity.user()),
          (identity, user ) => ({ identity, user })
        );
      })
      .subscribe(
        ({ identity, user }) => {
          cb(null, user, identity);
        },
        cb
      );
  };
  UserIdent.getApp((_, app) => {
    const UserCredential = app.models.UserCredential;
    UserCredential.link = UserIdent.link.bind(UserIdent);
  });
}
