'use strict';

var ToNumber = require('./ToNumber');
var ToPrimitive = require('./ToPrimitive');

var isSameType = require('../helpers/isSameType');

var isObject = require('es-object-atoms/isObject');

// https://262.ecma-international.org/6.0/#sec-abstract-equality-comparison

module.exports = function AbstractEqualityComparison(x, y) {
	if (isSameType(x, y)) {
		return x === y; // ES6+ specified this shortcut anyways.
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
	if (typeof x === 'boolean') {
		return AbstractEqualityComparison(ToNumber(x), y);
	}
	if (typeof y === 'boolean') {
		return AbstractEqualityComparison(x, ToNumber(y));
	}
	if ((typeof x === 'string' || typeof x === 'number' || typeof x === 'symbol') && isObject(y)) {
		return AbstractEqualityComparison(x, ToPrimitive(y));
	}
	if (isObject(x) && (typeof y === 'string' || typeof y === 'number' || typeof y === 'symbol')) {
		return AbstractEqualityComparison(ToPrimitive(x), y);
	}
	return false;
};
