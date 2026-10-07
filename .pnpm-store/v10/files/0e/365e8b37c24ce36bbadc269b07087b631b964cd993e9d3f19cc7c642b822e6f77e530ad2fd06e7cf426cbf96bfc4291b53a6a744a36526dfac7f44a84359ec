'use strict';

var modulo = require('./modulo');
var ToNumber = require('./ToNumber');

var abs = require('math-intrinsics/abs');
var floor = require('math-intrinsics/floor');
var $isNaN = require('math-intrinsics/isNaN');
var $isFinite = require('math-intrinsics/isFinite');
var $sign = require('math-intrinsics/sign');

// http://262.ecma-international.org/5.1/#sec-9.7

module.exports = function ToUint16(value) {
	var number = ToNumber(value);
	if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
	var posInt = $sign(number) * floor(abs(number));
	return modulo(posInt, 0x10000);
};
