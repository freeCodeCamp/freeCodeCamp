'use strict';

var GetIntrinsic = require('get-intrinsic');

var $String = GetIntrinsic('%String%');
var $RangeError = require('es-errors/range');
var isInteger = require('math-intrinsics/isInteger');

var StringPad = require('./StringPad');

// https://262.ecma-international.org/13.0/#sec-tozeropaddeddecimalstring

module.exports = function ToZeroPaddedDecimalString(n, minLength) {
	if (!isInteger(n) || n < 0) {
		throw new $RangeError('Assertion failed: `q` must be a non-negative integer');
	}
	var S = $String(n);
	return StringPad(S, minLength, '0', 'start');
};
