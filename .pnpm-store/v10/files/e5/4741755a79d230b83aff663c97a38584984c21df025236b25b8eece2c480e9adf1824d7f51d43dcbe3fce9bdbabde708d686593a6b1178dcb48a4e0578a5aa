'use strict';

var $StringValueOf = require('call-bound')('String.prototype.valueOf');

// https://262.ecma-international.org/6.0/#sec-properties-of-the-string-prototype-object

module.exports = function thisStringValue(value) {
	if (typeof value === 'string') {
		return value;
	}

	return $StringValueOf(value);
};
