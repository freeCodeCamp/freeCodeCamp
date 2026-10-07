'use strict';

var SameValueNonNumeric = require('./SameValueNonNumeric');
var Type = require('./Type');
var BigIntEqual = require('./BigInt/equal');
var NumberEqual = require('./Number/equal');

// https://262.ecma-international.org/13.0/#sec-isstrictlyequal

module.exports = function IsStrictlyEqual(x, y) {
	if (Type(x) !== Type(y)) {
		return false;
	}
	if (typeof x === 'number' || typeof x === 'bigint') {
		return typeof x === 'number' ? NumberEqual(x, y) : BigIntEqual(x, y);
	}
	return SameValueNonNumeric(x, y);
};
