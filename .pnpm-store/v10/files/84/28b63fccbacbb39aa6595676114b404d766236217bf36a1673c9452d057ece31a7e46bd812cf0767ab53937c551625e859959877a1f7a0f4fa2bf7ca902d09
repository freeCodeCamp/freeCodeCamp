'use strict';

var CodePointAt = require('./CodePointAt');

var $TypeError = require('es-errors/type');
var isInteger = require('math-intrinsics/isInteger');
var MAX_SAFE_INTEGER = require('math-intrinsics/constants/maxSafeInteger');

// https://262.ecma-international.org/12.0/#sec-advancestringindex

module.exports = function AdvanceStringIndex(S, index, unicode) {
	if (typeof S !== 'string') {
		throw new $TypeError('Assertion failed: `S` must be a String');
	}
	if (!isInteger(index) || index < 0 || index > MAX_SAFE_INTEGER) {
		throw new $TypeError('Assertion failed: `length` must be an integer >= 0 and <= 2**53');
	}
	if (typeof unicode !== 'boolean') {
		throw new $TypeError('Assertion failed: `unicode` must be a Boolean');
	}
	if (!unicode) {
		return index + 1;
	}
	var length = S.length;
	if ((index + 1) >= length) {
		return index + 1;
	}
	var cp = CodePointAt(S, index);
	return index + cp['[[CodeUnitCount]]'];
};
