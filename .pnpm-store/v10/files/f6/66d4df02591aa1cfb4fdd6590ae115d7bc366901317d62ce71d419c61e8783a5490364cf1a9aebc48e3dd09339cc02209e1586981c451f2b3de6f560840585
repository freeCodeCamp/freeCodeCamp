"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertType = assertType;
exports.generateOffset = generateOffset;
exports.resetDefaultOptions = resetDefaultOptions;
var _index = _interopRequireDefault(require("../addLeadingZeros/index.js"));
var _index2 = require("../defaultOptions/index.js");
function assertType(_) {}
function resetDefaultOptions() {
  (0, _index2.setDefaultOptions)({});
}

// This makes sure we create the consistent offsets across timezones, no matter where these tests are ran.
function generateOffset(originalDate) {
  // Add the timezone.
  var offset = '';
  var tzOffset = originalDate.getTimezoneOffset();
  if (tzOffset !== 0) {
    var absoluteOffset = Math.abs(tzOffset);
    var hourOffset = (0, _index.default)(Math.floor(absoluteOffset / 60), 2);
    var minuteOffset = (0, _index.default)(absoluteOffset % 60, 2);
    // If less than 0, the sign is +, because it is ahead of time.
    var sign = tzOffset < 0 ? '+' : '-';
    offset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
  } else {
    offset = 'Z';
  }
  return offset;
}