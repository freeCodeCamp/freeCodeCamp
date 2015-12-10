import moment from 'moment';

import { calcCurrentStreak, calcLongestStreak } from '../../../server/utils/user-stats';

let test = require('tape');

test('Current streak calculation', function (t) {
  t.plan(7);

  t.equal(calcCurrentStreak([
      moment(moment().subtract(1, 'hours')).valueOf()
    ]), 1, "should return 1 day when today one challenge was completed");

  t.equal(calcCurrentStreak([
      moment(moment().subtract(2, 'hours')).valueOf(),
      moment(moment().subtract(1, 'hours')).valueOf()
    ]), 1, "should return 1 day when today more than one challenge were completed");

  t.equal(calcCurrentStreak([
      moment("9/11/2015 4:00", "M/D/YYYY H:mm").valueOf()
    ]), 0, "should return 0 day when today 0 challenges were completed");

  t.equal(calcCurrentStreak([
      moment(moment().subtract(1, 'days')).valueOf(),
      moment(moment().subtract(1, 'hours')).valueOf()
    ]), 2, "should return 2 days when today and yesterday challenges were completed");

  t.equal(calcCurrentStreak([
      moment("8/3/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/11/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/12/2015 1:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/12/2015 1:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/12/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/12/2015 3:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/13/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/14/2015 5:00", "M/D/YYYY H:mm").valueOf(),
      moment(moment().subtract(2, 'days')).valueOf(),
      moment(moment().subtract(1, 'days')).valueOf(),
      moment(moment().subtract(1, 'hours')).valueOf()
    ]), 3, "should return 3 when today and for two days before user was activity");

  t.equal(calcCurrentStreak([
      moment(moment().subtract(37, 'hours')).valueOf(),
      moment(moment().subtract(1, 'hours')).valueOf()
    ]), 1, "should return 1 when between todays challenge completion and yesterdays there is a 1.5 day (36 hours) long break");  

  t.equal(calcCurrentStreak([
      moment(moment().subtract(35, 'hours')).valueOf(),
      moment(moment().subtract(1, 'hours')).valueOf()
    ]), 2, "should return 2 days when between todays challenge completion and yesterdays there is less than 1.5 day (36 hours) long break");  

});

test('Longest streak calculation', function (t) {
  t.plan(9);

  t.equal(calcLongestStreak([
      moment("9/12/2015 4:00", "M/D/YYYY H:mm").valueOf()
    ]), 1, "should return 1 when there is the only one one-day-long streak available");

  t.equal(calcLongestStreak([
      moment("9/11/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/12/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/13/2015 3:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/14/2015 1:00", "M/D/YYYY H:mm").valueOf()
    ]), 4, "should return 4 when there is the only one more-than-one-days-long streak available");

  t.equal(calcLongestStreak([
      moment(moment().subtract(1, 'hours')).valueOf()
    ]), 1, "should return 1 when there is only one one-day-long streak and it is today");

  t.equal(calcLongestStreak([
      moment(moment().subtract(1, 'days')).valueOf(),
      moment(moment().subtract(1, 'hours')).valueOf()
    ]), 2, "should return 2 when yesterday and today makes longest streak");

  t.equal(calcLongestStreak([
      moment("8/3/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/11/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/12/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment("10/4/2015 1:00", "M/D/YYYY H:mm").valueOf(),
      moment("10/5/2015 5:00", "M/D/YYYY H:mm").valueOf(),
      moment("10/6/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment("10/7/2015 5:00", "M/D/YYYY H:mm").valueOf(),
      moment("11/3/2015 2:00", "M/D/YYYY H:mm").valueOf()
    ]), 4, "should return 4 when there is a month long break");

   t.equal(calcLongestStreak([
      moment("8/3/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/11/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/12/2015 1:00", "M/D/YYYY H:mm").valueOf(),
      moment(moment("9/12/2015 1:00", "M/D/YYYY H:mm").add(37, 'hours')).valueOf(),
      moment("9/14/2015 22:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/15/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment("10/3/2015 2:00", "M/D/YYYY H:mm").valueOf()
    ]), 3, "should return 3 when there is a more than 1.5 days long break of (36 hours)");

   t.equal(calcLongestStreak([
      moment("8/3/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/11/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/12/2015 1:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/12/2015 1:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/12/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/12/2015 3:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/13/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/14/2015 5:00", "M/D/YYYY H:mm").valueOf(),
      moment(moment().subtract(2, 'days')).valueOf(),
      moment(moment().subtract(1, 'days')).valueOf(),
      moment().valueOf()
    ]), 4, "should return 4 when the longest streak consist of several same day timestamps");

  t.equal(calcLongestStreak([
      moment("8/3/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/11/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/12/2015 1:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/13/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment("9/14/2015 5:00", "M/D/YYYY H:mm").valueOf(),
      moment("10/11/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment("10/12/2015 1:00", "M/D/YYYY H:mm").valueOf(),
      moment("10/13/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment("10/14/2015 5:00", "M/D/YYYY H:mm").valueOf()
    ]), 4, "should return 4 when there are several longest streaks (same length)");

  let cals = [];
  const n = 100;
  for (var i = 0; i < n; i++) {
    cals.push(moment(moment().subtract(i, 'days')).valueOf());
  }
  cals.sort();
  t.equal(calcLongestStreak(cals), n, "should return correct longest streak when there is a very long period");
   
});
