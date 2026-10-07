'use strict';

var isObject = require('es-object-atoms/isObject');

var Get = require('./Get');
var ToIndex = require('./ToIndex');

// https://262.ecma-international.org/15.0/#sec-getarraybuffermaxbytelengthoption

module.exports = function GetArrayBufferMaxByteLengthOption(options) {
	if (!isObject(options)) {
		return 'EMPTY'; // step 1
	}

	var maxByteLength = Get(options, 'maxByteLength'); // step 2

	if (typeof maxByteLength === 'undefined') {
		return 'EMPTY'; // step 3
	}

	return ToIndex(maxByteLength); // step 4
};
