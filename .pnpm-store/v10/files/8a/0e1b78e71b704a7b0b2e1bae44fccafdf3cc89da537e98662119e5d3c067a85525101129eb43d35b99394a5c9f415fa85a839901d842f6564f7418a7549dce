'use strict';

var $RangeError = require('es-errors/range');

var ToInteger = require('./ToInteger');
var ToLength = require('./ToLength');
var SameValueZero = require('./SameValueZero');

// https://262.ecma-international.org/8.0/#sec-toindex

module.exports = function ToIndex(value) {
	if (typeof value === 'undefined') {
		return 0;
	}
	var integerIndex = ToInteger(value);
	if (integerIndex < 0) {
		throw new $RangeError('index must be >= 0');
	}
	var index = ToLength(integerIndex);
	if (!SameValueZero(integerIndex, index)) {
		throw new $RangeError('index must be >= 0 and < 2 ** 53 - 1');
	}
	return index;
};
