'use strict';

var $pow = require('math-intrinsics/pow');

module.exports = function bytesAsFloat64(rawBytes) {
	// return new $Float64Array(new $Uint8Array(rawBytes).buffer)[0];

	/*
    Let value be the byte elements of rawBytes concatenated and interpreted as a little-endian bit string encoding of an IEEE 754-2008 binary64 value.
If value is an IEEE 754-2008 binary64 NaN value, return the NaN Number value.
Return the Number value that corresponds to value.
    */
	var sign = rawBytes[7] & 0x80 ? -1 : 1; // first bit
	var exponent = ((rawBytes[7] & 0x7F) << 4) // 7 bits from index 7
        | ((rawBytes[6] & 0xF0) >> 4); // 4 bits from index 6
	var mantissa = ((rawBytes[6] & 0x0F) * 0x1000000000000) // 4 bits from index 6
        + (rawBytes[5] * 0x10000000000) // 8 bits from index 5
        + (rawBytes[4] * 0x100000000) // 8 bits from index 4
        + (rawBytes[3] * 0x1000000) // 8 bits from index 3
        + (rawBytes[2] * 0x10000) // 8 bits from index 2
        + (rawBytes[1] * 0x100) // 8 bits from index 1
        + rawBytes[0]; // 8 bits from index 0

	if (exponent === 0 && mantissa === 0) {
		return sign * 0;
	}
	if (exponent === 0x7FF && mantissa !== 0) {
		return NaN;
	}
	if (exponent === 0x7FF && mantissa === 0) {
		return sign * Infinity;
	}

	exponent -= 1023; // subtract the bias

	// Handle subnormal numbers
	if (exponent === -1023) {
		return sign * mantissa * 5e-324; // $pow(2, -1022 - 52)
	}

	return sign * (1 + (mantissa / 0x10000000000000)) * $pow(2, exponent);
};
