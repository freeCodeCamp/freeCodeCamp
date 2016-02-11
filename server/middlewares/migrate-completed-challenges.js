import { Observable, Scheduler } from 'rx';
import { ObjectID } from 'mongodb';
import debug from 'debug';

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

const idMap = {
  "bg9997c9c79feddfaeb9bdef": "56bbb991ad1ed5201cd392ca",
  "bg9995c9c69feddfaeb9bdef": "56bbb991ad1ed5201cd392cb",
  "bg9994c9c69feddfaeb9bdef": "56bbb991ad1ed5201cd392cc",
  "bg9996c9c69feddfaeb9bdef": "56bbb991ad1ed5201cd392cd",
  "bg9997c9c69feddfaeb9bdef": "56bbb991ad1ed5201cd392ce",
  "bg9997c9c89feddfaeb9bdef": "56bbb991ad1ed5201cd392cf",
  "bg9998c9c99feddfaeb9bdef": "56bbb991ad1ed5201cd392d0",
  "bg9999c9c99feddfaeb9bdef": "56bbb991ad1ed5201cd392d1",
  "bg9999c9c99feedfaeb9bdef": "56bbb991ad1ed5201cd392d2",
  "bg9999c9c99fdddfaeb9bdef": "56bbb991ad1ed5201cd392d3",
  "bb000000000000000000001": "56bbb991ad1ed5201cd392d4",
  "bc000000000000000000001": "56bbb991ad1ed5201cd392d5",
  "bb000000000000000000002": "56bbb991ad1ed5201cd392d6",
  "bb000000000000000000003": "56bbb991ad1ed5201cd392d7",
  "bb000000000000000000004": "56bbb991ad1ed5201cd392d8",
  "bb000000000000000000005": "56bbb991ad1ed5201cd392d9",
  "bb000000000000000000006": "56bbb991ad1ed5201cd392da"
};

const challengeTypeReg = /^(waypoint|hike|zipline|basejump)/i;
const challengeTypeRegWithColon =
  /^(bonfire|checkpoint|waypoint|hike|zipline|basejump):\s+/i;

function updateName(challenge) {
  challenge = challenge && typeof challenge.toJSON === 'function' ?
    challenge.toJSON() :
    challenge;

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
  if(idMap.hasOwnProperty(challenge.id)) {
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
    .filter(({ id, _id }) => ObjectID.isValid(id || _id))
    .map(updateId)
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
