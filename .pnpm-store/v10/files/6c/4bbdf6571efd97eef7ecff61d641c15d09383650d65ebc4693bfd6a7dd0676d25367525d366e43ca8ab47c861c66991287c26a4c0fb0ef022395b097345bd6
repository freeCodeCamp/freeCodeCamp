'use strict';

var GetIntrinsic = require('get-intrinsic');

var $BigInt = GetIntrinsic('%BigInt%', true);
var $Number = GetIntrinsic('%Number%');
var $TypeError = require('es-errors/type');
var $SyntaxError = require('es-errors/syntax');

var StringToBigInt = require('./StringToBigInt');
var ToPrimitive = require('./ToPrimitive');

var isNaN = require('math-intrinsics/isNaN');

// https://262.ecma-international.org/11.0/#sec-tobigint

module.exports = function ToBigInt(argument) {
	if (!$BigInt) {
		throw new $SyntaxError('BigInts are not supported in this environment');
	}

	var prim = ToPrimitive(argument, $Number);

	if (prim == null) {
		throw new $TypeError('Cannot convert null or undefined to a BigInt');
	}

	if (typeof prim === 'boolean') {
		return prim ? $BigInt(1) : $BigInt(0);
	}

	if (typeof prim === 'number') {
		throw new $TypeError('Cannot convert a Number value to a BigInt');
	}

	if (typeof prim === 'string') {
		var n = StringToBigInt(prim);
		if (isNaN(n)) {
			throw new $TypeError('Failed to parse String to BigInt');
		}
		return n;
	}

	if (typeof prim === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a BigInt');
	}

	if (typeof prim !== 'bigint') {
		throw new $SyntaxError('Assertion failed: unknown primitive type');
	}

	return prim;
};
