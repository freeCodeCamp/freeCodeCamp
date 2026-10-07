'use strict';

var $pow = require('math-intrinsics/pow');

module.exports = function bytesAsFloat32(rawBytes) {
	// return new $Float16Array(new $Uint8Array(rawBytes).buffer)[0];
	/*
        Let value be the byte elements of rawBytes concatenated and interpreted as a little-endian bit string encoding of an IEEE 754-2019 binary16 value.
        If value is a NaN, return NaN.
        Return the Number value that corresponds to value.
    */

	var bits = (rawBytes[1] << 8) | rawBytes[0];

	// extract sign, exponent, mantissa
	var sign = bits & 0x8000 ? -1 : 1;
	var exponent = (bits & 0x7C00) >> 10;
	var mantissa = bits & 0x03FF;

	// zero (±0)
	if (exponent === 0 && mantissa === 0) {
		return sign === 1 ? 0 : -0;
	}

	// infinities
	if (exponent === 0x1F && mantissa === 0) {
		return sign === 1 ? Infinity : -Infinity;
	}

	// NaN
	if (exponent === 0x1F && mantissa !== 0) {
		return NaN;
	}

	// remove bias (15)
	exponent -= 15;

	// subnormals
	if (exponent === -15) {
		// value = sign * (mantissa) * 2^(1-bias-10) = mantissa * 2^(-14-10)
		return sign * mantissa * $pow(2, -24);
	}

	// normals
	// value = sign * (1 + mantissa/2^10) * 2^exponent
	return sign * (1 + (mantissa * $pow(2, -10))) * $pow(2, exponent);
};
