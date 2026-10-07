'use strict';

var GetIntrinsic = require('get-intrinsic');

var $ArrayPrototype = GetIntrinsic('%Array.prototype%');
var $RangeError = require('es-errors/range');
var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');
var isInteger = require('math-intrinsics/isInteger');
var MAX_ARRAY_LENGTH = require('math-intrinsics/constants/maxArrayLength');
var $setProto = require('set-proto');

// https://262.ecma-international.org/6.0/#sec-arraycreate

module.exports = function ArrayCreate(length) {
	if (!isInteger(length) || length < 0) {
		throw new $TypeError('Assertion failed: `length` must be an integer Number >= 0');
	}
	if (length > MAX_ARRAY_LENGTH) {
		throw new $RangeError('length is greater than (2**32 - 1)');
	}
	var proto = arguments.length > 1 ? arguments[1] : $ArrayPrototype;
	var A = []; // steps 5 - 7, and 9
	if (proto !== $ArrayPrototype) { // step 8
		if (!$setProto) {
			throw new $SyntaxError('ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]');
		}
		$setProto(A, proto);
	}
	if (length !== 0) { // bypasses the need for step 2
		A.length = length;
	}
	/* step 10, the above as a shortcut for the below
	OrdinaryDefineOwnProperty(A, 'length', {
		'[[Configurable]]': false,
		'[[Enumerable]]': false,
		'[[Value]]': length,
		'[[Writable]]': true
	});
	*/
	return A;
};
