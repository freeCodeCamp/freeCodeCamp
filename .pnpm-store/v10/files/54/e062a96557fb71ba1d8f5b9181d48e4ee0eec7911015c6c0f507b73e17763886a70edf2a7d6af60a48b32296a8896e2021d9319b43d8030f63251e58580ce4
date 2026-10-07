'use strict';

var clamp = require('./clamp');

var ToNumber = require('./ToNumber');
var floor = require('./floor');

var $isNaN = require('math-intrinsics/isNaN');

// https://262.ecma-international.org/15.0/#sec-touint8clamp

module.exports = function ToUint8Clamp(argument) {
	var number = ToNumber(argument); // step 1

	if ($isNaN(number)) { return 0; } // step 2

	var clamped = clamp(number, 0, 255); // step 4

	var f = floor(clamped); // step 5

	if (clamped < (f + 0.5)) { return f; } // step 6

	if (clamped > (f + 0.5)) { return f + 1; } // step 7

	return f % 2 === 0 ? f : f + 1; // step 8
};
