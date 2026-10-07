'use strict';

var $TypeError = require('es-errors/type');

var SameValue = require('./SameValue');

// https://262.ecma-international.org/7.0/#sec-samevaluenonnumber

module.exports = function SameValueNonNumber(x, y) {
	if (typeof x === 'number' || typeof x !== typeof y) {
		throw new $TypeError('SameValueNonNumber requires two non-number values of the same type.');
	}
	return SameValue(x, y);
};
