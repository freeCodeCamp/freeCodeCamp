import _ from 'lodash';
import moment from 'moment';
import { dayCount } from '../utils/date-utils';

const daysBetween = 1.5;

export function prepUniqueDays(cals) {

  return _(cals)
    .map(ts => moment(ts).startOf('day').valueOf())
    .uniq()
    .sort()
    .value();
}

export function calcCurrentStreak(cals) {

  let prev = _.last(cals);
  if (moment().startOf('day').diff(prev, 'days') > daysBetween) {
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

export function calcLongestStreak(cals) {

  let tail = cals[0];
  const longest = cals.reduce((longest, head, index) => {
    const last = cals[index === 0 ? 0 : index - 1];
    // is streak broken
    if (moment(head).diff(moment(last), 'days') > daysBetween) {
      tail = head;
    }
    if (dayCount(longest) < dayCount([head, tail])) {
      return [head, tail];
    }
    return longest;
  }, [cals[0], cals[0]]);

  return dayCount(longest);
}
