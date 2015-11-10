import{ Observable } from 'rx';
import debugFactory from 'debug';
import dedent from 'dedent';

import { observeMethod, observeQuery } from '../utils/rx';
import { getSocialProvider } from '../utils/auth';

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
            new Error(
              dedent`
  It looks like you already have an account associated with that sign in method.
  Here's what you can do: 1) Sign out of this account. 2) Use that sign in
  method to sign into your other account. 3) Delete that account.
  4) Then sign back into this account and you'll be able to link it here.
  If you need help, send us an email at team@freecodecamp.com.
              `.split('/n').join(' ')
            )
          );
        }
        identity.credentials = credentials;
        return observeQuery(identity, 'updateAttributes', {
          profile,
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
