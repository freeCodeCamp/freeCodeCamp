"use strict";

// Actual implementation of the Performance class.

const clockIsAccurate = require("./clock-is-accurate");
const calculateClockOffset = require("./calculate-clock-offset");
const { hrtime, toMS } = require("./utils");

const kTimeOrigin = Symbol("time origin");
const kTimeOriginTimestamp = Symbol("time origin timestamp");

class Performance {
  constructor() {
    // Time origin.
    const timeOrigin = hrtime();
    this[kTimeOrigin] = timeOrigin;

    if (clockIsAccurate) {
      // Let |t1| be the DOMHighResTimeStamp representing the high resolution Unix time at which the global monotonic
      // clock is zero. This has to be calculated for every Performance object to account for clock drifts.
      const t1 = calculateClockOffset();

      // Let |t2| be the DOMHighResTimeStamp representing the high resolution time value of the global monotonic clock
      // at global's time origin.
      const t2 = toMS(timeOrigin);

      // Return the sum of |t1| and |t2|.
      this[kTimeOriginTimestamp] = t1 + t2;
    } else {
      // Clock isn't accurate enough. Use millisecond accuracy per spec.
      const cur = Date.now();
      this[kTimeOriginTimestamp] = cur;
    }
  }

  // The timeOrigin getter actually returns the time origin timestamp, not the raw time origin.
  get timeOrigin() {
    return this[kTimeOriginTimestamp];
  }

  now() {
    const diff = toMS(hrtime(this[kTimeOrigin]));
    return clockIsAccurate ? diff : Math.round(diff);
  }

  toJSON() {
    return {
      timeOrigin: this.timeOrigin
    };
  }
}

module.exports = { Performance };
