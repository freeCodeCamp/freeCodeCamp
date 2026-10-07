'use strict';

var modulo = require('./modulo');
var ToNumber = require('./ToNumber');
var truncate = require('./truncate');

var isFinite = require('math-intrinsics/isFinite');

// https://262.ecma-international.org/14.0/#sec-toint8

module.exports = function ToInt8(argument) {
	var number = ToNumber(argument);
	if (!isFinite(number) || number === 0) {
		return 0;
	}
	var int = truncate(number);
	var int8bit = modulo(int, 0x100);
	return int8bit >= 0x80 ? int8bit - 0x100 : int8bit;
};
