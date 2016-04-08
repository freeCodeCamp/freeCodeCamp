import { Observable, Scheduler } from 'rx';
import { ObjectID } from 'mongodb';
import debug from 'debug';

import idMap from '../utils/bad-id-map';

const log = debug('freecc:migrate');
const challengeTypes = {
  html: 0,
  js: 1,
  video: 2,
  zipline: 3,
  basejump: 4,
  bonfire: 5,
  hikes: 6,
  step: 7,
  waypoint: 0
};

const challengeTypeReg = /^(waypoint|hike|zipline|basejump)/i;
const challengeTypeRegWithColon =
  /^(bonfire|checkpoint|waypoint|hike|zipline|basejump):\s+/i;

function updateName(challenge) {
  if (
    challenge.name &&
    challenge.challengeType === 5 &&
    challengeTypeReg.test(challenge.name)
  ) {

    challenge.name.replace(challengeTypeReg, match => {
      // find the correct type
      const type = challengeTypes[''.toLowerCase.call(match)];
      // if type found, replace current type
      //
      if (type) {
        challenge.challengeType = type;
      }

      return match;
    });

  }

  if (challenge.name) {
    challenge.oldName = challenge.name;
    challenge.name = challenge.name.replace(challengeTypeRegWithColon, '');
  }
  return challenge;
}

function updateId(challenge) {
  if (idMap.hasOwnProperty(challenge.id)) {
    challenge.id = idMap[challenge.id];
  }

  return challenge;
}

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
    .map(challenge => {
      return challenge && typeof challenge.toJSON === 'function' ?
        challenge.toJSON() :
        challenge;
    })
    .map(updateId)
    .filter(({ id, _id }) => ObjectID.isValid(id || _id))
    .map(updateName)
    .reduce((challengeMap, challenge) => {
      const id = challenge.id || challenge._id;

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
