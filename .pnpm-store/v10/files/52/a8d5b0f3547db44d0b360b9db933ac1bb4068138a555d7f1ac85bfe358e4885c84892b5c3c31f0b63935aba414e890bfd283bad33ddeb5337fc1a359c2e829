'use strict';

var abs = require('./abs');
var floor = require('./floor');
var ToNumber = require('./ToNumber');

var $isNaN = require('math-intrinsics/isNaN');
var $isFinite = require('math-intrinsics/isFinite');
var $sign = require('math-intrinsics/sign');

// https://262.ecma-international.org/12.0/#sec-tointegerorinfinity

module.exports = function ToIntegerOrInfinity(value) {
	var number = ToNumber(value);
	if ($isNaN(number) || number === 0) { return 0; }
	if (!$isFinite(number)) { return number; }
	var integer = floor(abs(number));
	if (integer === 0) { return 0; }
	return $sign(number) * integer;
};
