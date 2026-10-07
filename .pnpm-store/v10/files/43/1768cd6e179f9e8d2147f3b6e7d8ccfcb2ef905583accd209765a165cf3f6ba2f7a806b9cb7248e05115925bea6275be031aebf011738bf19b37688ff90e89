'use strict';

var GetIntrinsic = require('get-intrinsic');

var $Number = GetIntrinsic('%Number%');
var $BigInt = GetIntrinsic('%BigInt%', true);

module.exports = function integerToNBytes(intValue, n, isLittleEndian) {
	var Z = typeof intValue === 'bigint' ? $BigInt : $Number;
	/*
	if (intValue >= 0) { // step 3.d
		// Let rawBytes be a List containing the n-byte binary encoding of intValue. If isLittleEndian is false, the bytes are ordered in big endian order. Otherwise, the bytes are ordered in little endian order.
	} else { // step 3.e
		// Let rawBytes be a List containing the n-byte binary 2's complement encoding of intValue. If isLittleEndian is false, the bytes are ordered in big endian order. Otherwise, the bytes are ordered in little endian order.
	}
    */
	if (intValue < 0) {
		intValue >>>= 0; // eslint-disable-line no-param-reassign
	}

	var rawBytes = [];
	for (var i = 0; i < n; i++) {
		rawBytes[isLittleEndian ? i : n - 1 - i] = $Number(intValue & Z(0xFF));
		intValue >>= Z(8); // eslint-disable-line no-param-reassign
	}

	return rawBytes; // step 4
};
