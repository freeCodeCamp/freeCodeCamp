'use strict';

var GetIntrinsic = require('get-intrinsic');

var $Date = GetIntrinsic('%Date%');
var $TypeError = require('es-errors/type');

var isNaN = require('math-intrinsics/isNaN');

var callBound = require('call-bound');

var $indexOf = callBound('String.prototype.indexOf');
var $slice = callBound('String.prototype.slice');
var $toTimeString = callBound('Date.prototype.toTimeString');

// https://262.ecma-international.org/12.0/#sec-timezoneestring

module.exports = function TimeZoneString(tv) {
	if (typeof tv !== 'number' || isNaN(tv)) {
		throw new $TypeError('Assertion failed: `tv` must be a non-NaN Number'); // steps 1 - 2
	}

	// 3. Let offset be LocalTZA(tv, true).
	// 4. If offset ≥ +0𝔽, then
	//   a. Let offsetSign be "+".
	//   b. Let absOffset be offset.
	// 5. Else,
	//   a. Let offsetSign be "-".
	//   b. Let absOffset be -offset.
	// 6. Let offsetMin be the String representation of MinFromTime(absOffset), formatted as a two-digit decimal number, padded to the left with the code unit 0x0030 (DIGIT ZERO) if necessary.
	// 7. Let offsetHour be the String representation of HourFromTime(absOffset), formatted as a two-digit decimal number, padded to the left with the code unit 0x0030 (DIGIT ZERO) if necessary.
	// 8. Let tzName be an implementation-defined string that is either the empty String or the string-concatenation of the code unit 0x0020 (SPACE), the code unit 0x0028 (LEFT PARENTHESIS), an implementation-defined timezone name, and the code unit 0x0029 (RIGHT PARENTHESIS).
	// 9. Return the string-concatenation of offsetSign, offsetHour, offsetMin, and tzName.

	// hack until LocalTZA, and "implementation-defined string" are available
	var ts = $toTimeString(new $Date(tv));
	return $slice(ts, $indexOf(ts, '(') + 1, $indexOf(ts, ')'));
};
