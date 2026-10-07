'use strict';

var $abs = require('./abs');
var $floor = require('./floor');

var $isNaN = require('./isNaN');
var $isFinite = require('./isFinite');

/** @type {import('./isInteger')} */
module.exports = function isInteger(argument) {
	if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
		return false;
	}
	var absValue = $abs(argument);
	return $floor(absValue) === absValue;
};
