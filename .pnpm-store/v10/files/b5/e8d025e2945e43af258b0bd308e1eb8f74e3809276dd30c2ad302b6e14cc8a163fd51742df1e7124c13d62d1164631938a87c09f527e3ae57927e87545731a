'use strict';

var $TypeError = require('es-errors/type');

var IsArray = require('./IsArray');

var isByteValue = require('../helpers/isByteValue');

// https://262.ecma-international.org/12.0/#sec-bytelistequal

module.exports = function ByteListEqual(xBytes, yBytes) {
	if (!IsArray(xBytes) || !IsArray(yBytes)) {
		throw new $TypeError('Assertion failed: `xBytes` and `yBytes` must be sequences of byte values (an integer 0-255, inclusive)');
	}

	if (xBytes.length !== yBytes.length) {
		return false;
	}

	for (var i = 0; i < xBytes.length; i += 1) {
		var xByte = xBytes[i];
		var yByte = yBytes[i];
		if (!isByteValue(xByte) || !isByteValue(yByte)) {
			throw new $TypeError('Assertion failed: `xBytes` and `yBytes` must be sequences of byte values (an integer 0-255, inclusive)');
		}
		if (xByte !== yByte) {
			return false;
		}
	}
	return true;
};
