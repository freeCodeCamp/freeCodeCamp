'use strict';

var ToNumber = require('./ToNumber');

var abs = require('math-intrinsics/abs');
var floor = require('math-intrinsics/floor');
var $isNaN = require('math-intrinsics/isNaN');
var $isFinite = require('math-intrinsics/isFinite');
var $sign = require('math-intrinsics/sign');

// http://262.ecma-international.org/5.1/#sec-9.4

module.exports = function ToInteger(value) {
	var number = ToNumber(value);
	if ($isNaN(number)) { return 0; }
	if (number === 0 || !$isFinite(number)) { return number; }
	return $sign(number) * floor(abs(number));
};
