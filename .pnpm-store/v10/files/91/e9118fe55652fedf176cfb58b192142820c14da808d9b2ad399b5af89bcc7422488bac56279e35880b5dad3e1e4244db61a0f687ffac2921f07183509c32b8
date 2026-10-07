'use strict';

var $TypeError = require('es-errors/type');

var SameValue = require('./SameValue');
var ToNumber = require('./ToNumber');
var ToString = require('./ToString');

// https://262.ecma-international.org/6.0/#sec-canonicalnumericindexstring

module.exports = function CanonicalNumericIndexString(argument) {
	if (typeof argument !== 'string') {
		throw new $TypeError('Assertion failed: `argument` must be a String');
	}
	if (argument === '-0') { return -0; }
	var n = ToNumber(argument);
	if (SameValue(ToString(n), argument)) { return n; }
	return void 0;
};
