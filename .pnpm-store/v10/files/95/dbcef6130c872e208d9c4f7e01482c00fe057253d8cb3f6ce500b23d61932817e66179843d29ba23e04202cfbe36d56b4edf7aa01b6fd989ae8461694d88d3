'use strict';

var ToNumber = require('./ToNumber');
var truncate = require('./truncate');

var $isNaN = require('math-intrinsics/isNaN');
var $isFinite = require('math-intrinsics/isFinite');

// https://262.ecma-international.org/14.0/#sec-tointegerorinfinity

module.exports = function ToIntegerOrInfinity(value) {
	var number = ToNumber(value);
	if ($isNaN(number) || number === 0) { return 0; }
	if (!$isFinite(number)) { return number; }
	return truncate(number);
};
