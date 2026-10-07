'use strict';

var isFinite = require('math-intrinsics/isFinite');

var modulo = require('./modulo');
var ToNumber = require('./ToNumber');
var truncate = require('./truncate');

// https://262.ecma-international.org/14.0/#sec-touint8

module.exports = function ToUint8(argument) {
	var number = ToNumber(argument);
	if (!isFinite(number) || number === 0) {
		return 0;
	}
	var int = truncate(number);
	var int8bit = modulo(int, 0x100);
	return int8bit;
};
