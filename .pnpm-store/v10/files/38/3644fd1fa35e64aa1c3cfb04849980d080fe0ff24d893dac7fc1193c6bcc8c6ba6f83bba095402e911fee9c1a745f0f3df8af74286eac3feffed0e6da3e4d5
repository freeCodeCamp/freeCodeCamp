"use strict";
exports.assertType = assertType;
exports.fakeDate = fakeDate;
exports.generateOffset = generateOffset;
exports.resetDefaultOptions = resetDefaultOptions;
var _vitest = require("./test/vitest");
var _index = require("./addLeadingZeros.cjs");
var _index2 = require("./defaultOptions.cjs");
var _sinon = require("./test/sinon");

function assertType(_value) {}

function resetDefaultOptions() {
  (0, _index2.setDefaultOptions)({});
}

// This makes sure we create the consistent offsets across timezones, no matter where these tests are ran.
function generateOffset(originalDate) {
  // Add the timezone.
  let offset = "";
  const tzOffset = originalDate.getTimezoneOffset();

  if (tzOffset !== 0) {
    const absoluteOffset = Math.abs(tzOffset);
    const hourOffset = (0, _index.addLeadingZeros)(
      Math.trunc(absoluteOffset / 60),
      2,
    );
    const minuteOffset = (0, _index.addLeadingZeros)(absoluteOffset % 60, 2);
    // If less than 0, the sign is +, because it is ahead of time.
    const sign = tzOffset < 0 ? "+" : "-";

    offset = `${sign}${hourOffset}:${minuteOffset}`;
  } else {
    offset = "Z";
  }

  return offset;
}

function fakeDate(date) {
  let clock;

  function fakeNow(date) {
    clock?.restore();
    clock = _sinon.default.useFakeTimers(+date);
  }

  (0, _vitest.beforeEach)(() => {
    fakeNow(+date);
  });

  (0, _vitest.afterEach)(() => {
    clock?.restore();
    clock = undefined;
  });

  return { fakeNow };
}
