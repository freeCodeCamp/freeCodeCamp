import moment from 'moment-timezone';

// day count between two epochs (inclusive)
export function dayCount([head, tail], timezone = 'UTC') {
  return Math.ceil(
    moment(moment(head).tz(timezone).endOf('day')).diff(
      moment(tail).tz(timezone).startOf('day'),
      'days',
      true
    )
  );
}
