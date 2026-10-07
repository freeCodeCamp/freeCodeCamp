'use strict';

var modulo = require('./modulo');
var ToNumber = require('./ToNumber');
var truncate = require('./truncate');

var isFinite = require('math-intrinsics/isFinite');

// https://262.ecma-international.org/14.0/#sec-toint16

var two16 = 0x10000; // Math.pow(2, 16);

module.exports = function ToInt16(argument) {
	var number = ToNumber(argument);
	if (!isFinite(number) || number === 0) {
		return 0;
	}
	var int = truncate(number);
	var int16bit = modulo(int, two16);
	return int16bit >= 0x8000 ? int16bit - two16 : int16bit;
};
