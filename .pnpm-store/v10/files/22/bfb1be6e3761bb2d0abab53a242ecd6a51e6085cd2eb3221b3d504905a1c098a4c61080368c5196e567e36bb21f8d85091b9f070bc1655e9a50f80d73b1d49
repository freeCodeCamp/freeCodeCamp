'use strict';

var callBound = require('call-bound');
var $TypeError = require('es-errors/type');
var isInteger = require('math-intrinsics/isInteger');

var StringToCodePoints = require('./StringToCodePoints');

var $indexOf = callBound('String.prototype.indexOf');

// https://262.ecma-international.org/13.0/#sec-getstringindex

module.exports = function GetStringIndex(S, e) {
	if (typeof S !== 'string') {
		throw new $TypeError('Assertion failed: `S` must be a String');
	}
	if (!isInteger(e) || e < 0) {
		throw new $TypeError('Assertion failed: `e` must be a non-negative integer');
	}

	if (S === '') {
		return 0;
	}
	var codepoints = StringToCodePoints(S);
	var eUTF = e >= codepoints.length ? S.length : $indexOf(S, codepoints[e]);
	return eUTF;
};
