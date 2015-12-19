import moment from 'moment';
import { dayCount } from '../utils/date-utils';

const daysBetween = 1.5;

export function calcCurrentStreak(cals) {
  const revCals = cals.slice().reverse();

  if (dayCount([moment(), revCals[0]]) > daysBetween) {
    return 0;
  }

  let streakBroken = false;
  const lastDayInStreak = revCals
    .reduce((current, cal, index) => {
      const before = revCals[index === 0 ? 0 : index - 1];
      if (
        !streakBroken &&
        moment(before).diff(cal, 'days', true) < daysBetween
        ) {
        return index;
      }
      streakBroken = true;
      return current;
    }, 0);

  const lastTimestamp = revCals[lastDayInStreak];
  return dayCount([moment(), lastTimestamp]);
}

export function calcLongestStreak(cals) {
  let tail = cals[0];
  const longest = cals.reduce((longest, head, index) => {
    const last = cals[index === 0 ? 0 : index - 1];
    // is streak broken
    if (moment(head).diff(last, 'days', true) > daysBetween) {
      tail = head;
    }
    if (dayCount(longest) < dayCount([head, tail])) {
      return [head, tail];
    }
    return longest;
  }, [cals[0], cals[0]]);

  return dayCount(longest);
}
