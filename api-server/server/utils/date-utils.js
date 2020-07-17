import moment from 'moment-timezone';
import getTimezonesOrDefault from '../../../client/src/utils/get-timezones';

const isGetDefault = true;
// day count between two epochs (inclusive)
export function dayCount(
  [head, tail],
  timezone = getTimezonesOrDefault(isGetDefault)
) {
  return Math.ceil(
    moment(
      moment(head)
        .tz(timezone.abbreviation)
        .endOf('day')
    ).diff(
      moment(tail)
        .tz(timezone.abbreviation)
        .startOf('day'),
      'days',
      true
    )
  );
}
