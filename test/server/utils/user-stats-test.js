import moment from 'moment-timezone';

import { calcCurrentStreak, calcLongestStreak } from '../../../server/utils/user-stats';

let test = require('tape');

test('Current streak calculation', function (t) {
  t.plan(9);

  t.equal(calcCurrentStreak([
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf()
    ]), 1, "should return 1 day when today one challenge was completed");

  t.equal(calcCurrentStreak([
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf(),
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf()
    ]), 1, "should return 1 day when today more than one challenge was completed");

  t.equal(calcCurrentStreak([
      moment.utc("9/11/2015 4:00", "M/D/YYYY H:mm").valueOf()
    ]), 0, "should return 0 day when today 0 challenges were completed");

  t.equal(calcCurrentStreak([
      moment.utc(moment.utc().subtract(1, 'days')).valueOf(),
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf()
    ]), 2, "should return 2 days when today and yesterday challenges were completed");

  t.equal(calcCurrentStreak([
      moment.utc("8/3/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/11/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/12/2015 1:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/12/2015 1:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/12/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/12/2015 3:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/13/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/14/2015 5:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc(moment.utc().subtract(2, 'days')).valueOf(),
      moment.utc(moment.utc().subtract(1, 'days')).valueOf(),
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf()
    ]), 3, "should return 3 when today and for two days before user was activity");

  t.equal(calcCurrentStreak([
      moment.utc(moment.utc().subtract(37, 'hours')).valueOf(),
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf()
    ]), 1, "should return 1 when between todays challenge completion and yesterdays there is a 1.5 day (36 hours) long break");  

  t.ok(calcCurrentStreak([
      moment.utc(moment.utc().subtract(35, 'hours')).valueOf(),
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf()
    ]) >= 2, "should return not less than 2 days when between todays challenge completion and yesterdays there is less than 1.5 day (36 hours) long break");  

    t.equal(calcCurrentStreak([
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf(),
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf()
    ], undefined), 1, "should return correct count in default timezone UTC given 'undefined' timezone");
    
  t.equal(calcCurrentStreak([
      moment.utc(moment.utc().subtract(1, 'days')).valueOf(),
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf()
    ], 'America/Los_Angeles'), 2, "should return 2 days when today and yesterday challenges were completed given 'America/Los_Angeles' timezone");

});

test('Longest streak calculation', function (t) {
  t.plan(12);

  t.equal(calcLongestStreak([
      moment.utc("9/12/2015 4:00", "M/D/YYYY H:mm").valueOf()
    ]), 1, "should return 1 when there is the only one one-day-long streak available");

  t.equal(calcLongestStreak([
      moment.utc("9/11/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/12/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/13/2015 3:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/14/2015 1:00", "M/D/YYYY H:mm").valueOf()
    ]), 4, "should return 4 when there is the only one more-than-one-days-long streak available");

  t.equal(calcLongestStreak([
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf()
    ]), 1, "should return 1 when there is only one one-day-long streak and it is today");

  t.equal(calcLongestStreak([
      moment.utc(moment.utc().subtract(1, 'days')).valueOf(),
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf()
    ]), 2, "should return 2 when yesterday and today makes longest streak");

  t.equal(calcLongestStreak([
      moment.utc("8/3/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/11/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/12/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("10/4/2015 1:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("10/5/2015 5:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("10/6/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("10/7/2015 5:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("11/3/2015 2:00", "M/D/YYYY H:mm").valueOf()
    ]), 4, "should return 4 when there is a month long break");

   t.equal(calcLongestStreak([
      moment.utc("8/3/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/11/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/12/2015 1:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc(moment.utc("9/12/2015 1:00", "M/D/YYYY H:mm").add(37, 'hours')).valueOf(),
      moment.utc("9/14/2015 22:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/15/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("10/3/2015 2:00", "M/D/YYYY H:mm").valueOf()
    ]), 3, "should return 3 when there is a more than 1.5 days long break of (36 hours)");

   t.equal(calcLongestStreak([
      moment.utc("8/3/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/11/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/12/2015 1:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/12/2015 1:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/12/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/12/2015 3:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/13/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/14/2015 5:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc(moment.utc().subtract(2, 'days')).valueOf(),
      moment.utc(moment.utc().subtract(1, 'days')).valueOf(),
      moment.utc().valueOf()
    ]), 4, "should return 4 when the longest streak consist of several same day timestamps");

  t.equal(calcLongestStreak([
      moment.utc("8/3/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/11/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/12/2015 1:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/13/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/14/2015 5:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("10/11/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("10/12/2015 1:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("10/13/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("10/14/2015 5:00", "M/D/YYYY H:mm").valueOf()
    ]), 4, "should return 4 when there are several longest streaks (same length)");

  let cals = [];
  const n = 100;
  for (var i = 0; i < n; i++) {
    cals.push(moment.utc(moment.utc().subtract(i, 'days')).valueOf());
  }
  cals.sort();
  t.equal(calcLongestStreak(cals), n, "should return correct longest streak when there is a very long period");

  t.equal(calcLongestStreak([
      moment.utc(moment.utc().subtract(1, 'days')).valueOf(),
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf()
    ], undefined), 2, "should return correct longest streak in default timezone UTC given 'undefined' timezone");

  t.equal(calcLongestStreak([
      moment.utc("9/11/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/12/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/13/2015 3:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/14/2015 1:00", "M/D/YYYY H:mm").valueOf()
    ], 'America/Los_Angeles'), 4, "should return 4 when there is the only one more-than-one-days-long streak available given 'America/Los_Angeles' timezone");

  t.equal(calcLongestStreak([
      moment.utc("9/11/2015 23:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/12/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/13/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/14/2015 1:00", "M/D/YYYY H:mm").valueOf()
    ], 'America/Los_Angeles'), 3, "should return 3 when longest streak is 3 in given 'America/Los_Angeles' timezone (but would be different in default timezone UTC)");
});
