'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');

var INVALID_NUMBER_REPRESENTATION = 'Invalid number representation';
var INVALID_RADIX = 'Invalid radix';
var $RangeError = RangeError;
var $SyntaxError = SyntaxError;
var $TypeError = TypeError;
var $parseInt = parseInt;
var pow = Math.pow;
var valid = /^[0-9a-z]+(\.[0-9a-z]+)?$/;
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var exec = uncurryThis(valid.exec);
var numberToString = uncurryThis(1.1.toString);
var stringSlice = uncurryThis(''.slice);
var split = uncurryThis(''.split);

var validDigitForRadix = function (string, R) {
  for (var i = 0; i < string.length; i++) {
    var code = charCodeAt(string, i);
    // '.' is allowed
    if (code === 0x2E) continue;
    // '0'-'9' - digit value 0-9
    if (code >= 0x30 && code <= 0x39) {
      if (code - 0x30 >= R) return false;
    // 'a'-'z' - digit value 10-35
    } else if (code >= 0x61 && code <= 0x7A) {
      if (code - 0x61 + 10 >= R) return false;
    } else return false;
  }
  return true;
};

// `Number.fromString` method
// https://github.com/tc39/proposal-number-fromstring
$({ target: 'Number', stat: true, forced: true }, {
  fromString: function fromString(string, radix) {
    var sign = 1;
    if (typeof string != 'string') throw new $TypeError(INVALID_NUMBER_REPRESENTATION);
    if (!string.length) throw new $SyntaxError(INVALID_NUMBER_REPRESENTATION);
    if (charAt(string, 0) === '-') {
      sign = -1;
      string = stringSlice(string, 1);
      if (!string.length) throw new $SyntaxError(INVALID_NUMBER_REPRESENTATION);
    }
    var R = radix === undefined ? 10 : toIntegerOrInfinity(radix);
    if (R < 2 || R > 36) throw new $RangeError(INVALID_RADIX);
    if (!exec(valid, string) || !validDigitForRadix(string, R)) throw new $SyntaxError(INVALID_NUMBER_REPRESENTATION);
    var parts = split(string, '.');
    var mathNum = $parseInt(parts[0], R);
    if (parts.length > 1) mathNum += $parseInt(parts[1], R) / pow(R, parts[1].length);
    if (R === 10) {
      var compareString = string;
      if (parts.length > 1) {
        var fraction = parts[1];
        while (fraction.length && charAt(fraction, fraction.length - 1) === '0') {
          fraction = stringSlice(fraction, 0, -1);
        }
        compareString = fraction.length ? parts[0] + '.' + fraction : parts[0];
      }
      if (numberToString(mathNum, R) !== compareString) throw new $SyntaxError(INVALID_NUMBER_REPRESENTATION);
    }
    return sign * mathNum;
  }
});
