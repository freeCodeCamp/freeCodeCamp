'use strict';

var callBound = require('call-bound');

var $NumberValueOf = callBound('Number.prototype.valueOf');

// https://262.ecma-international.org/6.0/#sec-properties-of-the-number-prototype-object

module.exports = function thisNumberValue(value) {
	if (typeof value === 'number') {
		return value;
	}

	return $NumberValueOf(value);
};

