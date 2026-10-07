'use strict';

var $TypeError = require('es-errors/type');

var ToInt32 = require('./ToInt32');
var ToUint32 = require('./ToUint32');

// https://262.ecma-international.org/11.0/#sec-numberbitwiseop

module.exports = function NumberBitwiseOp(op, x, y) {
	if (op !== '&' && op !== '|' && op !== '^') {
		throw new $TypeError('Assertion failed: `op` must be `&`, `|`, or `^`');
	}
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw new $TypeError('Assertion failed: `x` and `y` arguments must be Numbers');
	}
	var lnum = ToInt32(x);
	var rnum = ToUint32(y);
	if (op === '&') {
		return lnum & rnum;
	}
	if (op === '|') {
		return lnum | rnum;
	}
	return lnum ^ rnum;
};
