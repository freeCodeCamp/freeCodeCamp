'use strict';

var $abs = require('math-intrinsics/abs');
var $floor = require('math-intrinsics/floor');
var $pow = require('math-intrinsics/pow');

var isFinite = require('math-intrinsics/isFinite');
var isNaN = require('math-intrinsics/isNaN');
var isNegativeZero = require('math-intrinsics/isNegativeZero');

var maxFiniteFloat16 = 65504; // 2**16 - 2**5

module.exports = function valueToFloat16Bytes(value, isLittleEndian) {
	// NaN → exponent=all-ones, mantissa MSB=1 → 0x7e00
	if (isNaN(value)) {
		return isLittleEndian
			? [0x00, 0x7e]
			: [0x7e, 0x00];
	}

	var leastSig;

	// ±0 → just the sign bit
	if (value === 0) {
		leastSig = isNegativeZero(value) ? 0x80 : 0x00;
		return isLittleEndian
			? [0x00, leastSig]
			: [leastSig, 0x00];
	}

	// ±∞ → exponent=all-ones, mantissa=0 → 0x7c00 or 0xfc00
	if ($abs(value) > maxFiniteFloat16 || !isFinite(value)) {
		leastSig = value < 0 ? 0xfc : 0x7c;
		return isLittleEndian
			? [0x00, leastSig]
			: [leastSig, 0x00];
	}

	var sign = value < 0 ? 1 : 0;
	value = $abs(value); // eslint-disable-line no-param-reassign

	// normalize to [1,2)
	var exponent = 0;
	while (value >= 2) {
		exponent += 1;
		value /= 2; // eslint-disable-line no-param-reassign
	}
	while (value < 1) {
		exponent -= 1;
		value *= 2; // eslint-disable-line no-param-reassign
	}

	// build mantissa (10 bits)
	var mantissa = value - 1;
	mantissa *= $pow(2, 10) + 0.5;
	mantissa = $floor(mantissa);

	// apply bias (15) and shift into place
	exponent += 15;
	exponent <<= 10;

	// pack sign, exponent, mantissa
	var result = (sign << 15) | exponent | mantissa;

	// split into two bytes
	var byte0 = result & 0xFF;
	result >>= 8;
	var byte1 = result & 0xFF;

	return isLittleEndian
		? [byte0, byte1]
		: [byte1, byte0];
};
