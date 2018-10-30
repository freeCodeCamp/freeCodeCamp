/* eslint no-bitwise: "off" */
// Credit: https://github.com/paulmillr/es6-shim/

"use strict";

var pow = Math.pow;

module.exports = function (bytes, ebits, fbits) {
	// Bytes to bits
	var bits = [], i, j, bit, str, bias, sign, e, fraction;

	for (i = bytes.length; i; i -= 1) {
		bit = bytes[i - 1];
		for (j = 8; j; j -= 1) {
			bits.push(bit % 2 ? 1 : 0);
			bit >>= 1;
		}
	}
	bits.reverse();
	str = bits.join("");

	// Unpack sign, exponent, fraction
	bias = (1 << (ebits - 1)) - 1;
	sign = parseInt(str.substring(0, 1), 2) ? -1 : 1;
	e = parseInt(str.substring(1, 1 + ebits), 2);
	fraction = parseInt(str.substring(1 + ebits), 2);

	// Produce number
	if (e === (1 << ebits) - 1) return fraction === 0 ? sign * Infinity : NaN;
	if (e > 0) return sign * pow(2, e - bias) * (1 + fraction / pow(2, fbits));
	if (fraction !== 0) return sign * pow(2, -(bias - 1)) * (fraction / pow(2, fbits));
	return sign < 0 ? -0 : 0;
};
