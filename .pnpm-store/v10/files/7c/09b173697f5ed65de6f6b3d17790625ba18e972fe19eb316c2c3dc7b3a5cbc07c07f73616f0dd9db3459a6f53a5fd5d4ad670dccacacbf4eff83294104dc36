'use strict';

var $TypeError = require('es-errors/type');

var $isNaN = require('math-intrinsics/isNaN');
var padTimeComponent = require('../helpers/padTimeComponent');

var HourFromTime = require('./HourFromTime');
var MinFromTime = require('./MinFromTime');
var SecFromTime = require('./SecFromTime');

// https://262.ecma-international.org/9.0/#sec-timestring

module.exports = function TimeString(tv) {
	if (typeof tv !== 'number' || $isNaN(tv)) {
		throw new $TypeError('Assertion failed: `tv` must be a non-NaN Number');
	}
	var hour = HourFromTime(tv);
	var minute = MinFromTime(tv);
	var second = SecFromTime(tv);
	return padTimeComponent(hour) + ':' + padTimeComponent(minute) + ':' + padTimeComponent(second) + '\x20GMT';
};
