"use strict";

const { hrtime } = require("./utils");

// The HR-TIME spec calls for 5-μs accuracy. Check that we have that in both hrtime() and Date.now().

function testClockAccuracy() {
  // Test hrtime() first. The check is simpler and more stable, and we use hrtime() to measure Date.now()'s performance.
  const roundTrip = hrtime(hrtime());
  if (roundTrip[0] > 1 || roundTrip[1] > 5e3 * 2) {
    return false;
  }

  // Test Date.now() twice: first with a looser bound (10 μs) but with a smaller run time to filter out very bad
  // Date.now() performance, and then with a tighter bound (5 μs) to check we have the accuracy we need.
  let times;
  // eslint-disable-next-line no-unused-vars
  let cur;
  let start;
  let end;

  times = 100;
  start = hrtime();
  while (times-- > 0) {
    cur = Date.now();
  }
  end = hrtime(start);
  if ((end[0] * 1e9 + end[1]) > 1000000) {
    return false;
  }

  times = 10000;
  start = hrtime();
  while (times-- > 0) {
    cur = Date.now();
  }
  end = hrtime(start);
  if ((end[0] * 1e9 + end[1]) > 50000000) {
    return false;
  }

  return true;
}

// Warm up the function.
testClockAccuracy();
testClockAccuracy();
testClockAccuracy();

const TIMES = 5;
const THRESHOLD = 0.6 * TIMES;
let accurates = 0;
for (let i = 0; i < TIMES; i++) {
  if (testClockAccuracy()) {
    accurates++;
  }
}

const isAccurate = accurates >= THRESHOLD;

module.exports = isAccurate;
