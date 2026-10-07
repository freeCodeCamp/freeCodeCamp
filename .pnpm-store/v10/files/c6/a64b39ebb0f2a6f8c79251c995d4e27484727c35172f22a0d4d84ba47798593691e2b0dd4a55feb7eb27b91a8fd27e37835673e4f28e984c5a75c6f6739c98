'use strict';

var modulo = require('./modulo');
var ToNumber = require('./ToNumber');
var truncate = require('./truncate');

var isFinite = require('math-intrinsics/isFinite');

// https://262.ecma-international.org/14.0/#sec-touint32

var two32 = 0x100000000; // Math.pow(2, 32);

module.exports = function ToUint32(argument) {
	var number = ToNumber(argument);
	if (!isFinite(number) || number === 0) {
		return 0;
	}
	var int = truncate(number);
	var int32bit = modulo(int, two32);
	return int32bit === 0 ? 0 : int32bit; // in the spec, these are math values, so we filter out -0 here
};
