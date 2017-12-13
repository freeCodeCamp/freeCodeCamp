import _ from 'lodash';
import { Observable, Scheduler } from 'rx';
import { ObjectID } from 'mongodb';
import debug from 'debug';

import idMap from '../utils/bad-id-map';

const log = debug('fcc:migrate');
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
function buildChallengeMap(user, completedChallenges = []) {
  completedChallenges = typeof completedChallenges.toJSON === 'function' ?
    completedChallenges.toJSON() :
    completedChallenges;
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
    .flatMap(challengeMap => user.update$({
      challengeMap,
      isChallengeMapMigrated: true
    }));
}

export default function migrateCompletedChallenges() {
  return ({ user, app }, res, next) => {
    const User = app.models.User;
    if (!user || user.isChallengeMapMigrated) {
      return next();
    }
    const id = user.id.toString();
    return User.findOne$({
      where: { id },
      fields: {
        challengeMap: true,
        completedChallenges: true
      }
    })
      .flatMap(({ challengeMap = {}, completedChallenges = [] } = {}) => {
        return Observable.if(
          () => !_.isEmpty(challengeMap) || _.isEmpty(completedChallenges),
          user.update$({ isChallengeMapMigrated: true }),
          buildChallengeMap(
            user,
            completedChallenges
          )
        );
      })
      .subscribe(
        count => log('documents update', count),
        // errors go here
        next,
        next
      );
  };
}
