import moment from 'moment-timezone';
import { dayCount } from '../utils/date-utils';

const daysBetween = 1.5;

export function calcCurrentStreak(cals, timezone = 'UTC') {
  const revCals = cals.slice().reverse();

  if (dayCount([moment().tz(timezone), revCals[0]], timezone) > daysBetween) {
    return 0;
  }

  let streakBroken = false;
  const lastDayInStreak = revCals
    .reduce((current, cal, index) => {
      const before = revCals[index === 0 ? 0 : index - 1];
      if (
        !streakBroken &&
        moment(before).tz(timezone).diff(cal, 'days', true) < daysBetween
        ) {
        return index;
      }
      streakBroken = true;
      return current;
    }, 0);

  const lastTimestamp = revCals[lastDayInStreak];
  return dayCount([moment().tz(timezone), lastTimestamp], timezone);
}

export function calcLongestStreak(cals, timezone = 'UTC') {
  let tail = cals[0];
  const longest = cals.reduce((longest, head, index) => {
    const last = cals[index === 0 ? 0 : index - 1];
    // is streak broken
    if (moment(head).tz(timezone).diff(last, 'days', true) > daysBetween) {
      tail = head;
    }
    if (dayCount(longest, timezone) < dayCount([head, tail], timezone)) {
      return [head, tail];
    }
    return longest;
  }, [cals[0], cals[0]]);

  return dayCount(longest, timezone);
}
