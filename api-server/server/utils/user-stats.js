import loopback from 'loopback';
import compose from 'lodash/fp/compose';
import map from 'lodash/fp/map';
import sortBy from 'lodash/fp/sortBy';
import trans from 'lodash/fp/transform';
import last from 'lodash/fp/last';
import forEachRight from 'lodash/fp/forEachRight';
import { isEmpty } from 'lodash';
import moment from 'moment-timezone';

import { dayCount } from '../utils/date-utils';
import getTimezonesOrDefault from '../../../client/src/utils/get-timezones';

const transform = trans.convert({ cap: false });

const hoursBetween = 24;
const hoursDay = 24;
const isGetDefault = true;

export function prepUniqueDaysByHours(
  cals,
  tz = getTimezonesOrDefault(isGetDefault)
) {
  let prev = null;
  const tzAbbr = tz.areas[0];

  // compose goes bottom to top (map > sortBy > transform)
  return compose(
    transform((data, cur, i) => {
      if (i < 1) {
        data.push(cur);
        prev = cur;
      } else if (
        moment(cur)
          .tz(tzAbbr)
          .diff(
            moment(prev)
              .tz(tzAbbr)
              .startOf('day'),
            'hours'
          ) >= hoursDay
      ) {
        data.push(cur);
        prev = cur;
      }
    }, []),
    sortBy(e => e),
    map(ts =>
      moment(ts)
        .tz(tzAbbr)
        .startOf('hours')
        .valueOf()
    )
  )(cals);
}

export function calcCurrentStreak(
  cals,
  tz = getTimezonesOrDefault(isGetDefault)
) {
  let prev = last(cals);
  const tzAbbr = tz.areas[0];
  if (
    moment()
      .tz(tzAbbr)
      .startOf('day')
      .diff(moment(prev).tz(tzAbbr), 'hours') > hoursBetween
  ) {
    return 0;
  }
  let currentStreak = 0;
  let streakContinues = true;
  forEachRight(cur => {
    if (
      moment(prev)
        .tz(tzAbbr)
        .startOf('day')
        .diff(moment(cur).tz(tzAbbr), 'hours') <= hoursBetween
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

export function calcLongestStreak(
  cals,
  tz = getTimezonesOrDefault(isGetDefault)
) {
  let tail = cals[0];
  const tzAbbr = tz.areas[0];
  const longest = cals.reduce(
    (longest, head, index) => {
      const last = cals[index === 0 ? 0 : index - 1];
      // is streak broken
      if (
        moment(head)
          .tz(tzAbbr)
          .startOf('day')
          .diff(moment(last).tz(tzAbbr), 'hours') > hoursBetween
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

export function getUserById(id, User = loopback.getModelByType('User')) {
  return new Promise((resolve, reject) =>
    User.findById(id, (err, instance) => {
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
        (instance.progressTimestamps && instance.progressTimestamps.length) ||
        1;
      return resolve(instance);
    })
  );
}

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
    'isMachineLearningPyCertV7'
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
