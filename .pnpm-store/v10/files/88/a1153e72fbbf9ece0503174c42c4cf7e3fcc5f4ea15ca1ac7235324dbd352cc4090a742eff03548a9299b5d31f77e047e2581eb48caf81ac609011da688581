'use strict';

var $TypeError = require('es-errors/type');
// var $BigInt = GetIntrinsic('%BigInt%', true);
// var $pow = require('math-intrinsics/pow');

// var BinaryAnd = require('./BinaryAnd');
// var BinaryOr = require('./BinaryOr');
// var BinaryXor = require('./BinaryXor');
// var modulo = require('./modulo');

// var zero = $BigInt && $BigInt(0);
// var negOne = $BigInt && $BigInt(-1);
// var two = $BigInt && $BigInt(2);

// https://262.ecma-international.org/11.0/#sec-bigintbitwiseop

module.exports = function BigIntBitwiseOp(op, x, y) {
	if (op !== '&' && op !== '|' && op !== '^') {
		throw new $TypeError('Assertion failed: `op` must be `&`, `|`, or `^`');
	}
	if (typeof x !== 'bigint' || typeof y !== 'bigint') {
		throw new $TypeError('`x` and `y` must be BigInts');
	}

	if (op === '&') {
		return x & y;
	}
	if (op === '|') {
		return x | y;
	}
	return x ^ y;
	/*
	var result = zero;
	var shift = 0;
	while (x !== zero && x !== negOne && y !== zero && y !== negOne) {
		var xDigit = modulo(x, two);
		var yDigit = modulo(y, two);
		if (op === '&') {
			result += $pow(2, shift) * BinaryAnd(xDigit, yDigit);
		} else if (op === '|') {
			result += $pow(2, shift) * BinaryOr(xDigit, yDigit);
		} else if (op === '^') {
			result += $pow(2, shift) * BinaryXor(xDigit, yDigit);
		}
		shift += 1;
		x = (x - xDigit) / two;
		y = (y - yDigit) / two;
	}
	var tmp;
	if (op === '&') {
		tmp = BinaryAnd(modulo(x, two), modulo(y, two));
	} else if (op === '|') {
		tmp = BinaryAnd(modulo(x, two), modulo(y, two));
	} else {
		tmp = BinaryXor(modulo(x, two), modulo(y, two));
	}
	if (tmp !== 0) {
		result -= $pow(2, shift);
	}
	return result;
	*/
};
