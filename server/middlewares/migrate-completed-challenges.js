import { Observable, Scheduler } from 'rx';
import debug from 'debug';

const log = debug('freecc:migrate');

// buildChallengeMap(
//  userId: String,
//  completedChallenges: Object[],
//  User: User
// ) => Observable
function buildChallengeMap(userId, completedChallenges = [], User) {
  return Observable.from(
    completedChallenges,
    null,
    null,
    Scheduler.default
  )
    .reduce((challengeMap, challenge) => {
      const id = challenge.id || challenge._id;
      challenge = challenge && typeof challenge.toJSON === 'function' ?
        challenge.toJSON() :
        challenge;

      challengeMap[id] = challenge;
      return challengeMap;
    }, {})
    .flatMap(challengeMap => {
      const updateData = {
        '$set': {
          challengeMap,
          isChallengeMapMigrated: true
        }
      };
      return Observable.fromNodeCallback(User.updateAll, User)(
        { id: userId },
        updateData,
        { allowExtendedOperators: true }
      );
    });
}

export default function migrateCompletedChallenges() {
  return ({ user, app }, res, next) => {
    const User = app.models.User;
    if (!user || user.isChallengeMapMigrated) {
      return next();
    }
    return buildChallengeMap(
      user.id.toString(),
      user.completedChallenges,
      User
    )
      .subscribe(
        count => log('documents update', count),
        // errors go here
        next,
        next
      );
  };
}
