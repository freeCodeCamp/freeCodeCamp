import moment from 'moment-timezone';
import sinon from 'sinon';

import { 
  prepUniqueDays,
  calcCurrentStreak,
  calcLongestStreak
} from '../../../server/utils/user-stats';

let test = require('tape');
let clock = sinon.useFakeTimers(1454526000000); // setting now to 2016-02-03T11:00:00 (PST)
const PST = 'America/Los_Angeles';

test('Prepare calendar items', function (t) {

  t.plan(5);

  t.deepEqual(prepUniqueDays([
    moment.utc("8/3/2015 2:00", "M/D/YYYY H:mm").valueOf(),
    moment.utc("8/3/2015 14:00", "M/D/YYYY H:mm").valueOf(),
    moment.utc("8/3/2015 20:00", "M/D/YYYY H:mm").valueOf()
  ]), [1438560000000], "should return correct epoch when all entries fall into one day in UTC");

  t.deepEqual(prepUniqueDays([
    moment.utc("8/3/2015 2:00", "M/D/YYYY H:mm").valueOf(),
    moment.utc("8/3/2015 2:00", "M/D/YYYY H:mm").valueOf()
  ]), [1438560000000], "should return correct epoch when given two identical dates");


  t.deepEqual(prepUniqueDays([
    moment.utc("8/3/2015 2:00", "M/D/YYYY H:mm").valueOf(), // 8/2/2015 in America/Los_Angeles
    moment.utc("8/3/2015 14:00", "M/D/YYYY H:mm").valueOf(),
    moment.utc("8/3/2015 20:00", "M/D/YYYY H:mm").valueOf()
  ], PST), [1438498800000, 1438585200000], "should return 2 epochs when dates fall into two days in PST");

  t.deepEqual(prepUniqueDays([
    moment.utc("8/1/2015 2:00", "M/D/YYYY H:mm").valueOf(),
    moment.utc("3/3/2015 14:00", "M/D/YYYY H:mm").valueOf(),
    moment.utc("9/30/2014 20:00", "M/D/YYYY H:mm").valueOf()
  ]), [1412035200000, 1425340800000, 1438387200000], "should return 3 epochs when dates fall into three days");

  t.deepEqual(prepUniqueDays([
    1438387200000, 1425340800000, 1412035200000
  ]), [1412035200000, 1425340800000, 1438387200000], "should return same but sorted array if all input dates are start of day");

});

test('Current streak calculation', function (t) {

  t.plan(11);

  t.equal(calcCurrentStreak(
    prepUniqueDays([
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf()
    ])), 1, "should return 1 day when today one challenge was completed");

  t.equal(calcCurrentStreak(
    prepUniqueDays([
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf(),
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf()
    ])), 1, "should return 1 day when today more than one challenge was completed");

  t.equal(calcCurrentStreak(
    prepUniqueDays([
      moment.utc("9/11/2015 4:00", "M/D/YYYY H:mm").valueOf()
    ])), 0, "should return 0 day when today 0 challenges were completed");

  t.equal(calcCurrentStreak(
    prepUniqueDays([
      moment.utc(moment.utc().subtract(1, 'days')).valueOf(),
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf()
    ])), 2, "should return 2 days when today and yesterday challenges were completed");

  t.equal(calcCurrentStreak(
    prepUniqueDays([
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
    ])), 3, "should return 3 when today and for two days before user was activity");

  t.equal(calcCurrentStreak(
    prepUniqueDays([
      moment.utc(moment.utc().subtract(47, 'hours')).valueOf(),
      moment.utc(moment.utc().subtract(11, 'hours')).valueOf()
    ])), 1, "should return 1 when there is 1.5 days long break and dates fall into two days separated by third");

  t.equal(calcCurrentStreak(
    prepUniqueDays([
      moment.utc(moment.utc().subtract(40, 'hours')).valueOf(),
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf()
    ])), 2, "should return 2 when the break is more than 1.5 days but dates fall into two consecutive days");

  t.equal(calcCurrentStreak(
    prepUniqueDays([
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf(),
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf()
    ]), undefined), 1, "should return correct count in default timezone UTC given 'undefined' timezone");

  t.equal(calcCurrentStreak(
    prepUniqueDays([
      moment.utc(moment.utc().subtract(1, 'days')).valueOf(),
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf()
    ], PST), PST), 2, "should return 2 days when today and yesterday challenges were completed given PST");

  t.equal(calcCurrentStreak(
    prepUniqueDays([
      1453174506164, 1453175436725, 1453252466853, 1453294968225, 1453383782844,
      1453431903117, 1453471373080, 1453594733026, 1453645014058, 1453746762747,
      1453747659197, 1453748029416, 1453818029213, 1453951796007, 1453988570615,
      1454069704441, 1454203673979, 1454294055498, 1454333545125, 1454415163903,
      1454519128123, moment.tz(PST).valueOf()
    ], PST), PST), 17, "should return 17 when there is no break in given timezone (but would be the break if in UTC)");

  t.equal(calcCurrentStreak(
    prepUniqueDays([
      1453174506164, 1453175436725, 1453252466853, 1453294968225, 1453383782844,
      1453431903117, 1453471373080, 1453594733026, 1453645014058, 1453746762747,
      1453747659197, 1453748029416, 1453818029213, 1453951796007, 1453988570615,
      1454069704441, 1454203673979, 1454294055498, 1454333545125, 1454415163903,
      1454519128123, moment.utc().valueOf()
    ])), 4, "should return 4 when there is a break in UTC (but would be no break in PST)");

});

test('Longest streak calculation', function (t) {
  t.plan(14);

  t.equal(calcLongestStreak(
    prepUniqueDays([
      moment.utc("9/12/2015 4:00", "M/D/YYYY H:mm").valueOf()
    ])), 1, "should return 1 when there is the only one one-day-long streak available");

  t.equal(calcLongestStreak(
    prepUniqueDays([
      moment.utc("9/11/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/12/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/13/2015 3:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/14/2015 1:00", "M/D/YYYY H:mm").valueOf()
    ])), 4, "should return 4 when there is the only one more-than-one-days-long streak available");

  t.equal(calcLongestStreak(
    prepUniqueDays([
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf()
    ])), 1, "should return 1 when there is only one one-day-long streak and it is today");

  t.equal(calcLongestStreak(
    prepUniqueDays([
      moment.utc(moment.utc().subtract(1, 'days')).valueOf(),
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf()
    ])), 2, "should return 2 when yesterday and today makes longest streak");

  t.equal(calcLongestStreak(
    prepUniqueDays([
      moment.utc("8/3/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/11/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/12/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("10/4/2015 1:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("10/5/2015 5:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("10/6/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("10/7/2015 5:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("11/3/2015 2:00", "M/D/YYYY H:mm").valueOf()
    ])), 4, "should return 4 when there is a month long break");

  t.equal(calcLongestStreak(
    prepUniqueDays([
      moment.utc("8/3/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/11/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/12/2015 15:30", "M/D/YYYY H:mm").valueOf(),
      moment.utc(moment.utc("9/12/2015 15:30", "M/D/YYYY H:mm").add(37, 'hours')).valueOf(),
      moment.utc("9/14/2015 22:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/15/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("10/3/2015 2:00", "M/D/YYYY H:mm").valueOf()
    ])), 2, "should return 2 when there is a more than 1.5 days long break of (36 hours)");

  t.equal(calcLongestStreak(
    prepUniqueDays([
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
    ])), 4, "should return 4 when the longest streak consist of several same day timestamps");

  t.equal(calcLongestStreak(
    prepUniqueDays([
      moment.utc("8/3/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/11/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/12/2015 1:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/13/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/14/2015 5:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("10/11/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("10/12/2015 1:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("10/13/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("10/14/2015 5:00", "M/D/YYYY H:mm").valueOf()
    ])), 4, "should return 4 when there are several longest streaks (same length)");

  let cals = [];
  const n = 100;
  for (var i = 0; i < n; i++) {
    cals.push(moment.utc(moment.utc().subtract(i, 'days')).valueOf());
  }
  t.equal(calcLongestStreak(prepUniqueDays(cals)), n, "should return correct longest streak when there is a very long period");

  t.equal(calcLongestStreak(
    prepUniqueDays([
      moment.utc(moment.utc().subtract(1, 'days')).valueOf(),
      moment.utc(moment.utc().subtract(1, 'hours')).valueOf()
    ]), undefined), 2, "should return correct longest streak in default timezone UTC given 'undefined' timezone");

  t.equal(calcLongestStreak(
    prepUniqueDays([
      moment.utc("9/11/2015 4:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/12/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/13/2015 3:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/14/2015 1:00", "M/D/YYYY H:mm").valueOf()
    ]), PST), 4, "should return 4 when there is the only one more-than-one-days-long streak available given PST");

  t.equal(calcLongestStreak(
    prepUniqueDays([
      moment.utc("9/11/2015 23:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/12/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/13/2015 2:00", "M/D/YYYY H:mm").valueOf(),
      moment.utc("9/14/2015 6:00", "M/D/YYYY H:mm").valueOf()
    ], PST), PST), 3, "should return 3 when longest streak is 3 in PST (but would be different in default timezone UTC)");

  t.equal(calcLongestStreak(
    prepUniqueDays([
      1453174506164, 1453175436725, 1453252466853, 1453294968225, 1453383782844,
      1453431903117, 1453471373080, 1453594733026, 1453645014058, 1453746762747,
      1453747659197, 1453748029416, 1453818029213, 1453951796007, 1453988570615,
      1454069704441, 1454203673979, 1454294055498, 1454333545125, 1454415163903,
      1454519128123, moment.tz(PST).valueOf()
    ], PST), PST), 17, "should return 17 when there is no break in PST (but would be break in UTC) and it is current");

  t.equal(calcLongestStreak(
    prepUniqueDays([
      1453174506164, 1453175436725, 1453252466853, 1453294968225, 1453383782844,
      1453431903117, 1453471373080, 1453594733026, 1453645014058, 1453746762747,
      1453747659197, 1453748029416, 1453818029213, 1453951796007, 1453988570615,
      1454069704441, 1454203673979, 1454294055498, 1454333545125, 1454415163903,
      1454519128123, moment.utc().valueOf()
    ])), 4, "should return 4 when there is a break in UTC (but no break in PST)");

});

test.onFinish(() => {
  clock.restore();
});
