'use strict';

var SameValueNonNumber = require('./SameValueNonNumber');
var NumberEqual = require('./Number/equal');
var SameType = require('./SameType');

// https://262.ecma-international.org/16.0/#sec-isstrictlyequal

module.exports = function IsStrictlyEqual(x, y) {
	if (!SameType(x, y)) {
		return false;
	}
	return typeof x === 'number' ? NumberEqual(x, y) : SameValueNonNumber(x, y);
};
