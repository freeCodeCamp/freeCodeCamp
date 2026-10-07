'use strict';

var $TypeError = require('es-errors/type');

var Call = require('./Call');
var IsLessThan = require('./IsLessThan');
var ToNumber = require('./ToNumber');
var ToString = require('./ToString');

var isNaN = require('math-intrinsics/isNaN');

// https://262.ecma-international.org/14.0/#sec-comparearrayelements

module.exports = function CompareArrayElements(x, y, compareFn) {
	if (typeof compareFn !== 'function' && typeof compareFn !== 'undefined') {
		throw new $TypeError('Assertion failed: `compareFn` must be a function or undefined');
	}

	if (typeof x === 'undefined' && typeof y === 'undefined') {
		return 0; // step 1
	}

	if (typeof x === 'undefined') {
		return 1; // step 2
	}

	if (typeof y === 'undefined') {
		return -1; // step 3
	}

	if (typeof compareFn !== 'undefined') { // step 4
		var v = ToNumber(Call(compareFn, void undefined, [x, y])); // step 4.a
		if (isNaN(v)) {
			return 0; // step 4.b
		}
		return v; // step 4.c
	}

	var xString = ToString(x); // step 5
	var yString = ToString(y); // step 6
	var xSmaller = IsLessThan(xString, yString, true); // step 7
	if (xSmaller) {
		return -1; // step 8
	}
	var ySmaller = IsLessThan(yString, xString, true); // step 9
	if (ySmaller) {
		return 1; // step 10
	}
	return 0; // step 11
};
