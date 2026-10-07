'use strict';

var StrictEqualityComparison = require('./StrictEqualityComparison');
var StringToBigInt = require('./StringToBigInt');
var ToNumber = require('./ToNumber');
var ToPrimitive = require('./ToPrimitive');

var isNaN = require('math-intrinsics/isNaN');
var isObject = require('es-object-atoms/isObject');
var isSameType = require('../helpers/isSameType');

// https://262.ecma-international.org/11.0/#sec-abstract-equality-comparison

module.exports = function AbstractEqualityComparison(x, y) {
	if (isSameType(x, y)) {
		return StrictEqualityComparison(x, y);
	}
	if (x == null && y == null) {
		return true;
	}
	if (typeof x === 'number' && typeof y === 'string') {
		return AbstractEqualityComparison(x, ToNumber(y));
	}
	if (typeof x === 'string' && typeof y === 'number') {
		return AbstractEqualityComparison(ToNumber(x), y);
	}
	if (typeof x === 'bigint' && typeof y === 'string') {
		var n = StringToBigInt(y);
		if (isNaN(n)) {
			return false;
		}
		return AbstractEqualityComparison(x, n);
	}
	if (typeof x === 'string' && typeof y === 'bigint') {
		return AbstractEqualityComparison(y, x);
	}
	if (typeof x === 'boolean') {
		return AbstractEqualityComparison(ToNumber(x), y);
	}
	if (typeof y === 'boolean') {
		return AbstractEqualityComparison(x, ToNumber(y));
	}
	if ((typeof x === 'string' || typeof x === 'number' || typeof x === 'bigint' || typeof x === 'symbol') && isObject(y)) {
		return AbstractEqualityComparison(x, ToPrimitive(y));
	}
	if (isObject(x) && (typeof y === 'string' || typeof y === 'number' || typeof y === 'bigint' || typeof y === 'symbol')) {
		return AbstractEqualityComparison(ToPrimitive(x), y);
	}
	if ((typeof x === 'bigint' && typeof y === 'number') || (typeof x === 'number' && typeof y === 'bigint')) {
		if (isNaN(x) || isNaN(y) || x === Infinity || y === Infinity || x === -Infinity || y === -Infinity) {
			return false;
		}
		return x == y; // eslint-disable-line eqeqeq
	}
	return false;
};
