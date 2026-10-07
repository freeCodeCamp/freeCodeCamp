'use strict';

var modulo = require('./modulo');
var ToNumber = require('./ToNumber');
var truncate = require('./truncate');

var isFinite = require('math-intrinsics/isFinite');

// https://262.ecma-international.org/14.0/#sec-touint16

var two16 = 0x10000; // Math.pow(2, 16)

module.exports = function ToUint16(argument) {
	var number = ToNumber(argument);
	if (!isFinite(number) || number === 0) {
		return 0;
	}
	var int = truncate(number);
	var int16bit = modulo(int, two16);
	return int16bit === 0 ? 0 : int16bit; // in the spec, these are math values, so we filter out -0 here
};
