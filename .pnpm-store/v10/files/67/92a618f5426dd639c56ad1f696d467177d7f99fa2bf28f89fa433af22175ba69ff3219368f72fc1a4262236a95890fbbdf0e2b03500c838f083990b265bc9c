'use strict';

var $BooleanValueOf = require('call-bound')('Boolean.prototype.valueOf');

// https://262.ecma-international.org/15.0/#sec-properties-of-the-boolean-prototype-object

module.exports = function ThisBooleanValue(value) {
	if (typeof value === 'boolean') {
		return value;
	}

	return $BooleanValueOf(value);
};
