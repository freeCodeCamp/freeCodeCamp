import addLeadingZeros from "../addLeadingZeros/index.js";
import { setDefaultOptions } from "../defaultOptions/index.js";
export function assertType(_) {}
export function resetDefaultOptions() {
  setDefaultOptions({});
}

// This makes sure we create the consistent offsets across timezones, no matter where these tests are ran.
export function generateOffset(originalDate) {
  // Add the timezone.
  var offset = '';
  var tzOffset = originalDate.getTimezoneOffset();
  if (tzOffset !== 0) {
    var absoluteOffset = Math.abs(tzOffset);
    var hourOffset = addLeadingZeros(Math.floor(absoluteOffset / 60), 2);
    var minuteOffset = addLeadingZeros(absoluteOffset % 60, 2);
    // If less than 0, the sign is +, because it is ahead of time.
    var sign = tzOffset < 0 ? '+' : '-';
    offset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
  } else {
    offset = 'Z';
  }
  return offset;
}