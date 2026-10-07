'use strict';

var GetIntrinsic = require('get-intrinsic');

var $Date = GetIntrinsic('%Date%');
var $TypeError = require('es-errors/type');

var isNaN = require('math-intrinsics/isNaN');

var callBound = require('call-bound');

var $indexOf = callBound('String.prototype.indexOf');
var $slice = callBound('String.prototype.slice');
var $toTimeString = callBound('Date.prototype.toTimeString');

// https://262.ecma-international.org/9.0/#sec-timezoneestring

module.exports = function TimeZoneString(tv) {
	if (typeof tv !== 'number' || isNaN(tv)) {
		throw new $TypeError('Assertion failed: `tv` must be a non-NaN Number'); // steps 1 - 2
	}

	// 3. Let offset be LocalTZA(tv, true).
	// 4. If offset ≥ 0, let offsetSign be "+"; otherwise, let offsetSign be "-".
	// 5. Let offsetMin be the String representation of MinFromTime(abs(offset)), formatted as a two-digit decimal number, padded to the left with a zero if necessary.
	// 6. Let offsetHour be the String representation of HourFromTime(abs(offset)), formatted as a two-digit decimal number, padded to the left with a zero if necessary.
	// 7. Let tzName be an implementation-defined string that is either the empty string or the string-concatenation of the code unit 0x0020 (SPACE), the code unit 0x0028 (LEFT PARENTHESIS), an implementation-dependent timezone name, and the code unit 0x0029 (RIGHT PARENTHESIS).
	// 8. Return the string-concatenation of offsetSign, offsetHour, offsetMin, and tzName.

	// hack until LocalTZA, and "implementation-defined string" are available
	var ts = $toTimeString(new $Date(tv));
	return $slice(ts, $indexOf(ts, '(') + 1, $indexOf(ts, ')'));
};
