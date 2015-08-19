import{ Observable } from 'rx';
import { observeMethod, observeQuery } from '../utils/rx';
import { getSocialProvider } from '../utils/auth';
import debugFactory from 'debug';

const debug = debugFactory('fcc:userIdent');

export default function({ models }) {
  const { User, UserIdentity, UserCredential } = models;
  const findUserById = observeMethod(User, 'findById');
  const findIdent = observeMethod(UserIdentity, 'findOne');

  UserIdentity.link = function(
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
    const user$ = findUserById(userId);
    const query = {
      where: {
        provider: getSocialProvider(provider),
        externalId: profile.id
      }
    };

    debug('link identity query', query);
    findIdent(query)
      .flatMap(identity => {
        const modified = new Date();
        if (!identity) {
          return observeQuery(UserIdentity, 'create', {
            provider: getSocialProvider(provider),
            externalId: profile.id,
            authScheme,
            profile,
            credentials,
            userId,
            created: modified,
            modified
          });
        }
        if (identity.userId.toString() !== userId.toString()) {
          return Observable.throw(
            new Error('An account is already linked to that profile')
          );
        }
        identity.credentials = credentials;
        return observeQuery(identity, 'updateAttributes', {
          profile: getSocialProvider(provider),
          credentials,
          modified
        });
      })
      .withLatestFrom(user$, (identity, user) => ({ identity, user }))
      .subscribe(
        ({ identity, user }) => {
          cb(null, user, identity);
        },
        cb
      );
  };

  UserCredential.link = UserIdentity.link.bind(UserIdentity);
}
