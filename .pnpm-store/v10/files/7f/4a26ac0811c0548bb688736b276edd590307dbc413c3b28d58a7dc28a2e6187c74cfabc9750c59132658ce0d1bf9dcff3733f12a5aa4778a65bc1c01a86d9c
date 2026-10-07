'use strict';

var $pow = require('math-intrinsics/pow');

module.exports = function bytesAsFloat32(rawBytes) {
	// return new $Float32Array(new $Uint8Array(rawBytes).buffer)[0];

	/*
        Let value be the byte elements of rawBytes concatenated and interpreted as a little-endian bit string encoding of an IEEE 754-2008 binary32 value.
If value is an IEEE 754-2008 binary32 NaN value, return the NaN Number value.
Return the Number value that corresponds to value.
        */
	var sign = rawBytes[3] & 0x80 ? -1 : 1; // Check the sign bit
	var exponent = ((rawBytes[3] & 0x7F) << 1)
		| (rawBytes[2] >> 7); // Combine bits for exponent
	var mantissa = ((rawBytes[2] & 0x7F) << 16)
		| (rawBytes[1] << 8)
		| rawBytes[0]; // Combine bits for mantissa

	if (exponent === 0 && mantissa === 0) {
		return sign === 1 ? 0 : -0;
	}
	if (exponent === 0xFF && mantissa === 0) {
		return sign === 1 ? Infinity : -Infinity;
	}
	if (exponent === 0xFF && mantissa !== 0) {
		return NaN;
	}

	exponent -= 127; // subtract the bias

	if (exponent === -127) {
		return sign * mantissa * $pow(2, -126 - 23);
	}
	return sign * (1 + (mantissa * $pow(2, -23))) * $pow(2, exponent);
};
