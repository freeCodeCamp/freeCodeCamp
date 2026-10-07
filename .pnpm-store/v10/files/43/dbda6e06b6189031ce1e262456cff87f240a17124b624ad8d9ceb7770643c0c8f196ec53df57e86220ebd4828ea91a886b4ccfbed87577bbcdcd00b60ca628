'use strict';

var CodePointAt = require('./CodePointAt');

var $TypeError = require('es-errors/type');

// https://262.ecma-international.org/13.0/#sec-isstringwellformedunicode

module.exports = function IsStringWellFormedUnicode(string) {
	if (typeof string !== 'string') {
		throw new $TypeError('Assertion failed: `string` must be a String');
	}
	var strLen = string.length; // step 1
	var k = 0; // step 2
	while (k !== strLen) { // step 3
		var cp = CodePointAt(string, k); // step 3.a
		if (cp['[[IsUnpairedSurrogate]]']) {
			return false; // step 3.b
		}
		k += cp['[[CodeUnitCount]]']; // step 3.c
	}
	return true; // step 4
};
