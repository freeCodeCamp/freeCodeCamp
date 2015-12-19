import moment from 'moment';

// day count between two epochs (inclusive)
export function dayCount([head, tail]) {
  return Math.ceil(
    moment(moment(head).endOf('day')).diff(
      moment(tail).startOf('day'), 
      'days', 
      true)
    );
}
