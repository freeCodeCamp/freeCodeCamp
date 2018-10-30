"use strict";

const { hrtime, toMS } = require("./utils");

// Returns the DOMHighResTimeStamp representing the high resolution time value of the global monotonic clock.
function getGlobalMonotonicClockMS() {
  return toMS(hrtime());
}

module.exports = { getGlobalMonotonicClockMS };
