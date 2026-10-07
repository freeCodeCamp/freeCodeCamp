"use strict";

// This files implements the calculation of the offset between the global monotonic clock and UNIX time. This value is
// known as |t1| in the calculation of "time origin timestamp" in the spec. This value needs to be calculated once and
// can be used in all subsequent Performance instances.
//
// However, if the clock is not fast enough, the export is undefined to signify that we should use Date.now() to get the
// time origin timestamp with millisecond accuracy, per spec.

const { getGlobalMonotonicClockMS } = require("./global-monotonic-clock");
const clockIsAccurate = require("./clock-is-accurate");

// This function assumes the clock is accurate.
function calculateClockOffset() {
  const start = Date.now();
  let cur = start;
  // Limit the iterations, just in case we're running in an environment where Date.now() has been mocked and is
  // constant.
  for (let i = 0; i < 1e6 && cur === start; i++) {
    cur = Date.now();
  }

  // At this point |cur| "just" became equal to the next millisecond -- the unseen digits after |cur| are approximately
  // all 0, and |cur| is the closest to the actual value of the UNIX time. Now, get the current global monotonic clock
  // value and do the remaining calculations.

  return cur - getGlobalMonotonicClockMS();
}

if (clockIsAccurate) {
  // Warm up the function.
  calculateClockOffset();
  calculateClockOffset();
  calculateClockOffset();

  module.exports = calculateClockOffset;
} else {
  module.exports = undefined;
}
