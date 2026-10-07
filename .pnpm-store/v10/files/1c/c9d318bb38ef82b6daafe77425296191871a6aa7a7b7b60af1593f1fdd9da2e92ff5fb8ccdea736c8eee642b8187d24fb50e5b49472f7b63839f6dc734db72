'use strict';

var $TypeError = require('es-errors/type');
var isNaN = require('math-intrinsics/isNaN');
var isFinite = require('math-intrinsics/isFinite');

var truncate = require('../truncate');

// https://262.ecma-international.org/14.0/#sec-numeric-types-number-remainder

module.exports = function NumberRemainder(n, d) {
	if (typeof n !== 'number' || typeof d !== 'number') {
		throw new $TypeError('Assertion failed: `n` and `d` arguments must be Numbers');
	}

	// If either operand is NaN, the result is NaN.
	// If the dividend is an infinity, or the divisor is a zero, or both, the result is NaN.
	if (isNaN(n) || isNaN(d) || !isFinite(n) || d === 0) {
		return NaN;
	}

	// If the dividend is finite and the divisor is an infinity, the result equals the dividend.
	// If the dividend is a zero and the divisor is nonzero and finite, the result is the same as the dividend.
	if (!isFinite(d) || n === 0) {
		return n;
	}

	if (!isFinite(n) || !isFinite(d) || n === 0 || d === 0) {
		throw new $TypeError('Assertion failed: `n` and `d` arguments must be finite and nonzero');
	}
	var quotient = n / d;
	var q = truncate(quotient);
	var r = n - (d * q);
	if (r === 0 && n < 0) {
		return -0;
	}
	return r;
};
