'use strict';

var ToNumber = require('./ToNumber');

var $isNaN = require('math-intrinsics/isNaN');
var $isFinite = require('math-intrinsics/isFinite');
var $sign = require('math-intrinsics/sign');
var abs = require('math-intrinsics/abs');
var floor = require('math-intrinsics/floor');
var modulo = require('math-intrinsics/mod');

// https://262.ecma-international.org/6.0/#sec-touint8

module.exports = function ToUint8(argument) {
	var number = ToNumber(argument);
	if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
	var posInt = $sign(number) * floor(abs(number));
	return modulo(posInt, 0x100);
};
