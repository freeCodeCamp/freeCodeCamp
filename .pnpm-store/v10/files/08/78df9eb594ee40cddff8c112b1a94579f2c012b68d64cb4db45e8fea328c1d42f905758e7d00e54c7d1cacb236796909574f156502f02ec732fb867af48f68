/*! https://mths.be/repeat v1.0.0 by @mathias */

'use strict';

var RequireObjectCoercible = require('es-abstract/2019/RequireObjectCoercible');
var ToString = require('es-abstract/2019/ToString');
var ToInteger = require('es-abstract/2019/ToInteger');

module.exports = function repeat(count) {
	var O = RequireObjectCoercible(this);
	var string = ToString(O);
	var n = ToInteger(count);
	// Account for out-of-bounds indices
	if (n < 0 || n == Infinity) {
		throw RangeError('String.prototype.repeat argument must be greater than or equal to 0 and not be Infinity');
	}

	var result = '';
	while (n) {
		if (n % 2 == 1) {
			result += string;
		}
		if (n > 1) {
			string += string;
		}
		n >>= 1;
	}
	return result;
};
