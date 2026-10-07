/* eslint no-bitwise: "off" */
// Credit: https://github.com/paulmillr/es6-shim/

"use strict";

var abs = Math.abs
  , floor = Math.floor
  , log = Math.log
  , min = Math.min
  , pow = Math.pow
  , LN2 = Math.LN2
  , roundToEven;

roundToEven = function (num) {
	var whole = floor(num), fraction = num - whole;
	if (fraction < 0.5) return whole;
	if (fraction > 0.5) return whole + 1;
	return whole % 2 ? whole + 1 : whole;
};

// eslint-disable-next-line max-statements, max-lines-per-function
module.exports = function (value, ebits, fbits) {
	var bias = (1 << (ebits - 1)) - 1, sign, e, fraction, i, bits, str, bytes;

	// Compute sign, exponent, fraction
	if (isNaN(value)) {
		// NaN
		// http://dev.w3.org/2006/webapi/WebIDL/#es-type-mapping
		e = (1 << ebits) - 1;
		fraction = pow(2, fbits - 1);
		sign = 0;
	} else if (value === Infinity || value === -Infinity) {
		e = (1 << ebits) - 1;
		fraction = 0;
		sign = value < 0 ? 1 : 0;
	} else if (value === 0) {
		e = 0;
		fraction = 0;
		sign = 1 / value === -Infinity ? 1 : 0;
	} else {
		sign = value < 0;
		value = abs(value);

		if (value >= pow(2, 1 - bias)) {
			e = min(floor(log(value) / LN2), 1023);
			fraction = roundToEven((value / pow(2, e)) * pow(2, fbits));
			if (fraction / pow(2, fbits) >= 2) {
				e += 1;
				fraction = 1;
			}
			if (e > bias) {
				// Overflow
				e = (1 << ebits) - 1;
				fraction = 0;
			} else {
				// Normal
				e += bias;
				fraction -= pow(2, fbits);
			}
		} else {
			// Subnormal
			e = 0;
			fraction = roundToEven(value / pow(2, 1 - bias - fbits));
		}
	}

	// Pack sign, exponent, fraction
	bits = [];
	for (i = fbits; i; i -= 1) {
		bits.push(fraction % 2 ? 1 : 0);
		fraction = floor(fraction / 2);
	}
	for (i = ebits; i; i -= 1) {
		bits.push(e % 2 ? 1 : 0);
		e = floor(e / 2);
	}
	bits.push(sign ? 1 : 0);
	bits.reverse();
	str = bits.join("");

	// Bits to bytes
	bytes = [];
	while (str.length) {
		bytes.push(parseInt(str.substring(0, 8), 2));
		str = str.substring(8);
	}
	return bytes;
};
