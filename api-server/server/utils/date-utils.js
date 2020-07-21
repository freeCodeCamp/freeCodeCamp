import moment from 'moment-timezone';
import getTimezonesOrDefault from '../../../client/src/utils/get-timezones';

const isGetDefault = true;
// day count between two epochs (inclusive)
export function dayCount(
  [head, tail],
  timezone = getTimezonesOrDefault(isGetDefault)
) {
  const tzAbbr = timezone.abbreviation;
  return Math.ceil(
    moment(
      moment(head)
        .tz(tzAbbr)
        .endOf('day')
    ).diff(
      moment(tail)
        .tz(tzAbbr)
        .startOf('day'),
      'days',
      true
    )
  );
}
