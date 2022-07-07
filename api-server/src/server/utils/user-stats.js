import { isEmpty } from 'lodash';
import compose from 'lodash/fp/compose';
import forEachRight from 'lodash/fp/forEachRight';
import last from 'lodash/fp/last';
import map from 'lodash/fp/map';
import sortBy from 'lodash/fp/sortBy';
import trans from 'lodash/fp/transform';
import loopback from 'loopback';
import moment from 'moment-timezone';

import { dayCount } from '../utils/date-utils';

const transform = trans.convert({ cap: false });

const hoursBetween = 24;
const hoursDay = 24;

export function prepUniqueDaysByHours(cals, tz = 'UTC') {
  let prev = null;

  // compose goes bottom to top (map > sortBy > transform)
  return compose(
    transform((data, cur, i) => {
      if (i < 1) {
        data.push(cur);
        prev = cur;
      } else if (
        moment(cur).tz(tz).diff(moment(prev).tz(tz).startOf('day'), 'hours') >=
        hoursDay
      ) {
        data.push(cur);
        prev = cur;
      }
    }, []),
    sortBy(e => e),
    map(ts => moment(ts).tz(tz).startOf('hours').valueOf())
  )(cals);
}

export function calcCurrentStreak(cals, tz = 'UTC') {
  let prev = last(cals);
  if (
    moment().tz(tz).startOf('day').diff(moment(prev).tz(tz), 'hours') >
    hoursBetween
  ) {
    return 0;
  }
  let currentStreak = 0;
  let streakContinues = true;
  forEachRight(cur => {
    if (
      moment(prev).tz(tz).startOf('day').diff(moment(cur).tz(tz), 'hours') <=
      hoursBetween
    ) {
      prev = cur;
      currentStreak++;
    } else {
      // current streak found
      streakContinues = false;
    }
    return streakContinues;
  })(cals);

  return currentStreak;
}

export function calcLongestStreak(cals, tz = 'UTC') {
  let tail = cals[0];
  const longest = cals.reduce(
    (longest, head, index) => {
      const last = cals[index === 0 ? 0 : index - 1];
      // is streak broken
      if (
        moment(head).tz(tz).startOf('day').diff(moment(last).tz(tz), 'hours') >
        hoursBetween
      ) {
        tail = head;
      }
      if (dayCount(longest, tz) < dayCount([head, tail], tz)) {
        return [head, tail];
      }
      return longest;
    },
    [cals[0], cals[0]]
  );

  return dayCount(longest, tz);
}

// BEGIN TOPCODER:

// we need to create a user and set its external ID if a valid token isn't found
export function createUserByEmail(
  email,
  User = loopback.getModelByType('User')
) {
  return new Promise((resolve, reject) => {
    return (
      User.create$({ email })
        .toPromise()
        .then(user => resolve(user))
        .catch(err => reject(err || 'error creating new user')),
      (err, user) =>
        err || !user ? reject(err || 'error creating new user') : resolve(user)
    );
  });
}

export function setExternalId(user, externalId) {
  return new Promise((resolve, reject) =>
    user.updateAttributes({ externalId }, err =>
      err ? reject(err) : resolve()
    )
  );
}

// we need to use the external ID to get the user
// instead of the internal ID
export function getUserByExternalId(
  externalId,
  User = loopback.getModelByType('User')
) {
  return new Promise((resolve, reject) =>
    User.find({ where: { externalId } }, (err, results) =>
      handleUserResult(resolve, reject, err, results[0])
    )
  );
}

export function getUserById(id, User = loopback.getModelByType('User')) {
  return new Promise((resolve, reject) =>
    User.findById(id, (err, instance) => {
      return handleUserResult(resolve, reject, err, instance);
    })
  );
}

function handleUserResult(resolve, reject, err, instance) {
  if (err || isEmpty(instance)) {
    return reject(err || 'No user instance found');
  }

  let completedChallengeCount = 0;
  let completedProjectCount = 0;
  if ('completedChallenges' in instance) {
    completedChallengeCount = instance.completedChallenges.length;
    instance.completedChallenges.forEach(item => {
      if (
        'challengeType' in item &&
        (item.challengeType === 3 || item.challengeType === 4)
      ) {
        completedProjectCount++;
      }
    });
  }

  instance.completedChallengeCount = completedChallengeCount;
  instance.completedProjectCount = completedProjectCount;
  instance.completedCertCount = getCompletedCertCount(instance);
  instance.completedLegacyCertCount = getLegacyCertCount(instance);
  instance.points =
    (instance.progressTimestamps && instance.progressTimestamps.length) || 1;
  return resolve(instance);
}
// END TOPCODER

function getCompletedCertCount(user) {
  return [
    'isApisMicroservicesCert',
    'is2018DataVisCert',
    'isFrontEndLibsCert',
    'isQaCertV7',
    'isInfosecCertV7',
    'isJsAlgoDataStructCert',
    'isRespWebDesignCert',
    'isSciCompPyCertV7',
    'isDataAnalysisPyCertV7',
    'isMachineLearningPyCertV7',
    'isRelationalDatabaseCertV8'
  ].reduce((sum, key) => (user[key] ? sum + 1 : sum), 0);
}

function getLegacyCertCount(user) {
  return [
    'isFrontEndCert',
    'isBackEndCert',
    'isDataVisCert',
    'isInfosecQaCert'
  ].reduce((sum, key) => (user[key] ? sum + 1 : sum), 0);
}
