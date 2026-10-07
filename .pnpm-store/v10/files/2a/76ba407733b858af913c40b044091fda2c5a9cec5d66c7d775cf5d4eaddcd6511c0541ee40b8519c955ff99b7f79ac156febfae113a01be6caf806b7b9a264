'use strict';

var $TypeError = require('es-errors/type');

var ToInt32 = require('../ToInt32');
var ToUint32 = require('../ToUint32');

// https://262.ecma-international.org/11.0/#sec-numeric-types-number-unsignedRightShift

module.exports = function NumberUnsignedRightShift(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw new $TypeError('Assertion failed: `x` and `y` arguments must be Numbers');
	}

	var lnum = ToInt32(x);
	var rnum = ToUint32(y);

	var shiftCount = rnum & 0x1F;

	return lnum >>> shiftCount;
};
