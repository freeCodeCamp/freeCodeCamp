'use strict';

var isFinite = require('math-intrinsics/isFinite');
var isObject = require('es-object-atoms/isObject');

var IsStrictlyEqual = require('./IsStrictlyEqual');
var StringToBigInt = require('./StringToBigInt');
var ToNumber = require('./ToNumber');
var ToPrimitive = require('./ToPrimitive');

var isSameType = require('../helpers/isSameType');

// https://262.ecma-international.org/13.0/#sec-islooselyequal

module.exports = function IsLooselyEqual(x, y) {
	if (isSameType(x, y)) {
		return IsStrictlyEqual(x, y);
	}
	if (x == null && y == null) {
		return true;
	}
	if (typeof x === 'number' && typeof y === 'string') {
		return IsLooselyEqual(x, ToNumber(y));
	}
	if (typeof x === 'string' && typeof y === 'number') {
		return IsLooselyEqual(ToNumber(x), y);
	}
	if (typeof x === 'bigint' && typeof y === 'string') {
		var n = StringToBigInt(y);
		if (typeof n === 'undefined') {
			return false;
		}
		return IsLooselyEqual(x, n);
	}
	if (typeof x === 'string' && typeof y === 'bigint') {
		return IsLooselyEqual(y, x);
	}
	if (typeof x === 'boolean') {
		return IsLooselyEqual(ToNumber(x), y);
	}
	if (typeof y === 'boolean') {
		return IsLooselyEqual(x, ToNumber(y));
	}
	if ((typeof x === 'string' || typeof x === 'number' || typeof x === 'symbol' || typeof x === 'bigint') && isObject(y)) {
		return IsLooselyEqual(x, ToPrimitive(y));
	}
	if (isObject(x) && (typeof y === 'string' || typeof y === 'number' || typeof y === 'symbol' || typeof y === 'bigint')) {
		return IsLooselyEqual(ToPrimitive(x), y);
	}
	if ((typeof x === 'bigint' && typeof y === 'number') || (typeof x === 'number' && typeof y === 'bigint')) {
		if (!isFinite(x) || !isFinite(y)) {
			return false;
		}
		// eslint-disable-next-line eqeqeq
		return x == y; // shortcut for step 13.b.
	}
	return false;
};
