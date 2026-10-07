'use strict';

var $TypeError = require('es-errors/type');

var callBound = require('call-bound');

var $charCodeAt = callBound('String.prototype.charCodeAt');
var $numberToString = callBound('Number.prototype.toString');
var $toLowerCase = callBound('String.prototype.toLowerCase');

var StringPad = require('./StringPad');

// https://262.ecma-international.org/11.0/#sec-unicodeescape

module.exports = function UnicodeEscape(C) {
	if (typeof C !== 'string' || C.length !== 1) {
		throw new $TypeError('Assertion failed: `C` must be a single code unit');
	}
	var n = $charCodeAt(C, 0);
	if (n > 0xFFFF) {
		throw new $TypeError('`Assertion failed: numeric value of `C` must be <= 0xFFFF');
	}

	return '\\u' + StringPad($toLowerCase($numberToString(n, 16)), 4, '0', 'start');
};
