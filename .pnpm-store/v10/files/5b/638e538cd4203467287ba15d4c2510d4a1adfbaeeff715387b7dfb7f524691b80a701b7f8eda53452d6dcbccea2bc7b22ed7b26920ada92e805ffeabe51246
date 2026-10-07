'use strict';

var ES5ToInteger = require('../5/ToInteger');

var ToNumber = require('./ToNumber');

// https://262.ecma-international.org/11.0/#sec-tointeger

module.exports = function ToInteger(value) {
	var number = ToNumber(value);
	if (number !== 0) {
		number = ES5ToInteger(number);
	}
	return number === 0 ? 0 : number;
};
