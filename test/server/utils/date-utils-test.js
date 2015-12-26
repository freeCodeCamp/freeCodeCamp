import moment from 'moment';

import { dayCount } from '../../../server/utils/date-utils';

let test = require('tape');

test('Day count between two epochs (inclusive) calculation', function (t) {
  t.plan(5);

  t.equal(dayCount([
    moment("8/3/2015 3:00", "M/D/YYYY H:mm").valueOf(),
    moment("8/3/2015 2:00", "M/D/YYYY H:mm").valueOf()
  ]), 1, "should return 1 day given epochs of the same day");

  t.equal(dayCount([
    moment("8/3/2015 2:00", "M/D/YYYY H:mm").valueOf(),
    moment("8/3/2015 2:00", "M/D/YYYY H:mm").valueOf()
  ]), 1, "should return 1 day given same epochs");

  t.equal(dayCount([
    moment("8/4/2015 2:00", "M/D/YYYY H:mm").valueOf(),
    moment("8/3/2015 2:00", "M/D/YYYY H:mm").valueOf()
  ]), 2, "should return 2 days when there is a 24 hours difference between given dates");

  t.equal(dayCount([
    moment("8/4/2015 1:00", "M/D/YYYY H:mm").valueOf(),
    moment("8/3/2015 23:00", "M/D/YYYY H:mm").valueOf()
  ]), 2, "should return 2 days when the diff is less than 24h but days of the month are different");

  t.equal(dayCount([
    moment("10/27/2015 1:00", "M/D/YYYY H:mm").valueOf(),
    moment("5/12/1982 1:00", "M/D/YYYY H:mm").valueOf()
  ]), 12222, "should return correct count when there is very big period");
});
