import _ from 'lodash';
import moment from 'moment-timezone';
import { dayCount } from '../utils/date-utils';

const daysBetween = 1.5;

export function prepUniqueDays(cals, tz = 'UTC') {

  return _(cals)
    .map(ts => moment(ts).tz(tz).startOf('day').valueOf())
    .uniq()
    .sort()
    .value();
}

export function calcCurrentStreak(cals, tz = 'UTC') {

  let prev = _.last(cals);
  if (moment().tz(tz).startOf('day').diff(prev, 'days') > daysBetween) {
    return 0;
  }
  let currentStreak = 0;
  let streakContinues = true;
  _.forEachRight(cals, cur => {
    if (moment(prev).diff(cur, 'days') < daysBetween) {
      prev = cur;
      currentStreak++;
    } else {
      // current streak found
      streakContinues = false;
    }
    return streakContinues;
  });

  return currentStreak;
}

export function calcLongestStreak(cals, tz = 'UTC') {

  let tail = cals[0];
  const longest = cals.reduce((longest, head, index) => {
    const last = cals[index === 0 ? 0 : index - 1];
    // is streak broken
    if (moment(head).tz(tz).diff(moment(last).tz(tz), 'days') > daysBetween) {
      tail = head;
    }
    if (dayCount(longest, tz) < dayCount([head, tail], tz)) {
      return [head, tail];
    }
    return longest;
  }, [cals[0], cals[0]]);

  return dayCount(longest, tz);
}
