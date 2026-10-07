'use strict';

var callBound = require('call-bound');

var $NumberValueOf = callBound('Number.prototype.valueOf');

// https://262.ecma-international.org/15.0/#sec-thisnumbervalue

module.exports = function ThisNumberValue(value) {
	if (typeof value === 'number') {
		return value;
	}

	return $NumberValueOf(value);
};
