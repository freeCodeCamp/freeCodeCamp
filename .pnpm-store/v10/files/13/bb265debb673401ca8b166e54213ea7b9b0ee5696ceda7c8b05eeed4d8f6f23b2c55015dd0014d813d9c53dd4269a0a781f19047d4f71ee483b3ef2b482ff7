'use strict';

var $TypeError = require('es-errors/type');

var $isNaN = require('math-intrinsics/isNaN');

var HourFromTime = require('./HourFromTime');
var MinFromTime = require('./MinFromTime');
var SecFromTime = require('./SecFromTime');
var ToZeroPaddedDecimalString = require('./ToZeroPaddedDecimalString');

// https://262.ecma-international.org/13.0/#sec-timestring

module.exports = function TimeString(tv) {
	if (typeof tv !== 'number' || $isNaN(tv)) {
		throw new $TypeError('Assertion failed: `tv` must be a non-NaN Number');
	}

	var hour = ToZeroPaddedDecimalString(HourFromTime(tv), 2); // step 1

	var minute = ToZeroPaddedDecimalString(MinFromTime(tv), 2); // step 2

	var second = ToZeroPaddedDecimalString(SecFromTime(tv), 2); // step 3

	return hour + ':' + minute + ':' + second + ' GMT'; // step 4
};
