'use strict';

var $TypeError = require('es-errors/type');
var isFinite = require('math-intrinsics/isFinite');

var isNaN = require('../../helpers/isNaN');

// https://262.ecma-international.org/12.0/#sec-numeric-types-number-remainder

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

	// In the remaining cases, where neither an infinity, nor a zero, nor NaN is involved…
	return n % d;
};
