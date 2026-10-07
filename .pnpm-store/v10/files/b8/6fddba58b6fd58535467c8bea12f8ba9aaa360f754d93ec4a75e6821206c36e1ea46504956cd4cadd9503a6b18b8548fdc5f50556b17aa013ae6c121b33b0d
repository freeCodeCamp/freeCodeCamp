'use strict';

var $TypeError = require('es-errors/type');
var isInteger = require('math-intrinsics/isInteger');
var isObject = require('es-object-atoms/isObject');

var Call = require('./Call');
var Get = require('./Get');
var ToBoolean = require('./ToBoolean');
var IsCallable = require('./IsCallable');
var ToString = require('./ToString');

// https://262.ecma-international.org/14.0/#sec-findviapredicate

module.exports = function FindViaPredicate(O, len, direction, predicate, thisArg) {
	if (!isObject(O)) {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!isInteger(len) || len < 0) {
		throw new $TypeError('Assertion failed: len must be a non-negative integer');
	}
	if (direction !== 'ascending' && direction !== 'descending') {
		throw new $TypeError('Assertion failed: direction must be "ascending" or "descending"');
	}

	if (!IsCallable(predicate)) {
		throw new $TypeError('predicate must be callable'); // step 1
	}

	for ( // steps 2-4
		var k = direction === 'ascending' ? 0 : len - 1;
		direction === 'ascending' ? k < len : k >= 0;
		k += 1
	) {
		var Pk = ToString(k); // step 4.a
		var kValue = Get(O, Pk); // step 4.c
		var testResult = Call(predicate, thisArg, [kValue, k, O]); // step 4.d
		if (ToBoolean(testResult)) {
			return { '[[Index]]': k, '[[Value]]': kValue }; // step 4.e
		}
	}
	return { '[[Index]]': -1, '[[Value]]': void undefined }; // step 5
};
