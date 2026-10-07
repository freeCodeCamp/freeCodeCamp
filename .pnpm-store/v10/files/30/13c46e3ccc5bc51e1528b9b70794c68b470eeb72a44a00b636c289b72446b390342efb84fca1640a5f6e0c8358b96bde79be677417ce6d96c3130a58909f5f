'use strict';

var GetIntrinsic = require('get-intrinsic');

var $Date = GetIntrinsic('%Date%');
var $TypeError = require('es-errors/type');
var callBound = require('call-bound');
var isInteger = require('math-intrinsics/isInteger');

var $indexOf = callBound('String.prototype.indexOf');
var $slice = callBound('String.prototype.slice');
var $toTimeString = callBound('Date.prototype.toTimeString');

// https://262.ecma-international.org/14.0/#sec-timezoneestring

module.exports = function TimeZoneString(tv) {
	if (!isInteger(tv)) {
		throw new $TypeError('Assertion failed: `tv` must be an integral Number');
	}

	// 1. Let localTimeZone be DefaultTimeZone().
	// 2. If IsTimeZoneOffsetString(localTimeZone) is true, then
	//   a. Let offsetNs be ParseTimeZoneOffsetString(localTimeZone).
	// 3. Else,
	//   a. Let offsetNs be GetNamedTimeZoneOffsetNanoseconds(localTimeZone, ℤ(ℝ(tv) × 106)).
	// 4. Let offset be 𝔽(truncate(offsetNs / 106)).
	// 5. If offset is +0𝔽 or offset > +0𝔽, then
	//   a. Let offsetSign be "+".
	//   b. Let absOffset be offset.
	// 6. Else,
	//   a. Let offsetSign be "-".
	//   b. Let absOffset be -offset.
	// 7. Let offsetMin be ToZeroPaddedDecimalString(ℝ(MinFromTime(absOffset)), 2).
	// 8. Let offsetHour be ToZeroPaddedDecimalString(ℝ(HourFromTime(absOffset)), 2).
	// 9. Let tzName be an implementation-defined string that is either the empty String or the string-concatenation of the code unit 0x0020 (SPACE), the code unit 0x0028 (LEFT PARENTHESIS), an implementation-defined timezone name, and the code unit 0x0029 (RIGHT PARENTHESIS).
	// 10. Return the string-concatenation of offsetSign, offsetHour, offsetMin, and tzName.

	// hack until DefaultTimeZone, IsTimeZoneOffsetString, ParseTimeZoneOffsetString, GetNamedTimeZoneOffsetNanoseconds, and "implementation-defined string" are available
	var ts = $toTimeString(new $Date(tv));
	return $slice(ts, $indexOf(ts, '(') + 1, $indexOf(ts, ')'));
};
