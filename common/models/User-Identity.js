import { Observable } from 'rx';
// import debug from 'debug';
import dedent from 'dedent';

import {
  getSocialProvider,
  getUsernameFromProvider
} from '../../server/utils/auth';
import { observeMethod, observeQuery } from '../../server/utils/rx';
import { wrapHandledError } from '../../server/utils/create-handled-error.js';

// const log = debug('fcc:models:userIdent');

export default function(UserIdent) {
  UserIdent.on('dataSourceAttached', () => {
    UserIdent.findOne$ = observeMethod(UserIdent, 'findOne');
  });
  // original source
  // github.com/strongloop/loopback-component-passport
  // find identity if it exist
  // if not redirect to email signup
  // if yes and github
  //   update profile
  //   update username
  //   update picture
  UserIdent.login = function(
    _provider,
    authScheme,
    profile,
    credentials,
    options,
    cb
  ) {
    const User = UserIdent.app.models.User;
    const AccessToken = UserIdent.app.models.AccessToken;
    const provider = getSocialProvider(_provider);
    options = options || {};
    if (typeof options === 'function' && !cb) {
      cb = options;
      options = {};
    }
    profile.id = profile.id || profile.openid;
    const query = {
      where: {
        provider: provider,
        externalId: profile.id
      },
      include: 'user'
    };

    if (provider === 'auth0') {

      const email = profile.emails[0].value;
      return User.findOne$({ where: { email } })
        .flatMap(user => {
          return user ?
            Observable.of(user) :
            User.create$({ email }).toPromise();
        })
        .flatMap(user => {
          if (!user) {
            throw wrapHandledError(
              new Error('could not find or create a user'),
              {
                message: dedent`
                  Oops... something is not right. We could not find or create a
                  user with that email.
                `,
                type: 'info',
                redirectTo: '/'
              }
            );
          }
          const createToken = observeQuery(
            AccessToken,
            'create',
            {
              userId: user.id,
              created: new Date(),
              ttl: user.constructor.settings.ttl
            }
          );
          const updateUser = user.update$({
            emailVerified: true,
            emailAuthLinkTTL: null,
            emailVerifyTTL: null
          });
          return Observable.combineLatest(
            Observable.of(user),
            createToken,
            updateUser,
            (user, token) => ({user, token})
          );
        })
        .subscribe(
          ({ user, token }) => cb(null, user, null, token),
          cb
        );

    } else {

      return UserIdent.findOne$(query)
        .flatMap(identity => {
          if (!identity) {
            throw wrapHandledError(
              new Error('user identity account not found'),
              {
                message: dedent`
                  New accounts can only be created using an email address.
                `,
                type: 'info',
                redirectTo: '/'
              }
            );
          }
          const modified = new Date();
          const user = identity.user();
          if (!user) {
            const username = getUsernameFromProvider(provider, profile);
            return observeQuery(
              identity,
              'updateAttributes',
              {
                isOrphaned: username || true
              }
            )
              .do(() => {
                throw wrapHandledError(
                  new Error('user identity is not associated with a user'),
                  {
                    type: 'info',
                    redirectTo: '/',
                    message: dedent`
    The user account associated with the ${provider} user ${username || 'Anon'}
    no longer exists.
                    `
                  }
                );
              });
          }

          // identity already exists
          // find user and log them in
          identity.credentials = credentials;
          const attributes = {
            // we no longer want to keep the profile
            // this is information we do not need or use
            profile: null,
            credentials: credentials,
            modified
          };
          const updateIdentity = observeQuery(
            identity,
            'updateAttributes',
            attributes
          );
          const createToken = observeQuery(
            AccessToken,
            'create',
            {
              userId: user.id,
              created: new Date(),
              ttl: user.constructor.settings.ttl
            }
          );
          return Observable.combineLatest(
            Observable.of(user),
            updateIdentity,
            createToken,
            (user, identity, token) => ({ user, identity, token })
          );
        })
        .subscribe(
          ({ user, identity, token }) => cb(null, user, identity, token),
          cb
        );
    }
  };
}
