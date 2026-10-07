import { afterEach, beforeEach } from "./test/vitest";
import { addLeadingZeros } from "./addLeadingZeros.js";
import { setDefaultOptions } from "./defaultOptions.js";
import sinon from "./test/sinon";

export function assertType(_value) {}

export function resetDefaultOptions() {
  setDefaultOptions({});
}

// This makes sure we create the consistent offsets across timezones, no matter where these tests are ran.
export function generateOffset(originalDate) {
  // Add the timezone.
  let offset = "";
  const tzOffset = originalDate.getTimezoneOffset();

  if (tzOffset !== 0) {
    const absoluteOffset = Math.abs(tzOffset);
    const hourOffset = addLeadingZeros(Math.trunc(absoluteOffset / 60), 2);
    const minuteOffset = addLeadingZeros(absoluteOffset % 60, 2);
    // If less than 0, the sign is +, because it is ahead of time.
    const sign = tzOffset < 0 ? "+" : "-";

    offset = `${sign}${hourOffset}:${minuteOffset}`;
  } else {
    offset = "Z";
  }

  return offset;
}

export function fakeDate(date) {
  let clock;

  function fakeNow(date) {
    clock?.restore();
    clock = sinon.useFakeTimers(+date);
  }

  beforeEach(() => {
    fakeNow(+date);
  });

  afterEach(() => {
    clock?.restore();
    clock = undefined;
  });

  return { fakeNow };
}
