import { observeMethod, observeQuery } from '../utils/rx';

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
    console.log('provider', provider);
    console.log('id', profile.id);
    findIdent({
      provider: provider,
      externalId: profile.id
    })
      .flatMap(identity => {
        const modified = new Date();
        if (!identity || identity.externalId !== profile.id) {
          return observeQuery(UserIdentity, 'create', {
            provider,
            externalId: profile.id,
            authScheme,
            profile,
            credentials,
            userId,
            created: modified,
            modified
          });
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
