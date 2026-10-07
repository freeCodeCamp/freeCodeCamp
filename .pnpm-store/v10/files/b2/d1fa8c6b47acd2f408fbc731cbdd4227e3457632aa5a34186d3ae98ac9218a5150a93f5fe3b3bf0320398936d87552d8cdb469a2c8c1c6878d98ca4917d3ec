'use strict';

var $TypeError = require('es-errors/type');

var Call = require('./Call');
var SameValue = require('./SameValue');
var ToNumber = require('./ToNumber');

var isNaN = require('math-intrinsics/isNaN');

// https://262.ecma-international.org/14.0/#sec-comparetypedarrayelements

module.exports = function CompareTypedArrayElements(x, y, compareFn) {
	if ((typeof x !== 'number' && typeof x !== 'bigint') || typeof x !== typeof y) {
		throw new $TypeError('Assertion failed: `x` and `y` must be either a BigInt or a Number, and both must be the same type');
	}
	if (typeof compareFn !== 'function' && typeof compareFn !== 'undefined') {
		throw new $TypeError('Assertion failed: `compareFn` must be a function or undefined');
	}

	if (typeof compareFn !== 'undefined') { // step 2
		var v = ToNumber(Call(compareFn, void undefined, [x, y])); // step 2.a
		if (isNaN(v)) {
			return 0; // step 2.b
		}
		return v; // step 2.c
	}

	var xNaN = isNaN(x);
	var yNaN = isNaN(y);
	if (xNaN && yNaN) {
		return 0; // step 3
	}

	if (xNaN) {
		return 1; // step 4
	}

	if (yNaN) {
		return -1; // step 5
	}

	if (x < y) {
		return -1; // step 6
	}

	if (x > y) {
		return 1; // step 7
	}

	if (SameValue(x, -0) && SameValue(y, 0)) {
		return -1; // step 8
	}

	if (SameValue(x, 0) && SameValue(y, -0)) {
		return 1; // step 9
	}

	return 0; // step 10
};
