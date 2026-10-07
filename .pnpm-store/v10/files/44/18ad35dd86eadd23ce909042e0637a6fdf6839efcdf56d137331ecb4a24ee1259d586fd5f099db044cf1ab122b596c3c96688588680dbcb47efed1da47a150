'use strict';

var GetIntrinsic = require('get-intrinsic');

var $RegExp = GetIntrinsic('%RegExp%');
var $TypeError = require('es-errors/type');
var $parseInteger = GetIntrinsic('%parseInt%');

var callBound = require('call-bound');
var regexTester = require('safe-regex-test');

var $strSlice = callBound('String.prototype.slice');
var isBinary = regexTester(/^0b[01]+$/i);
var isOctal = regexTester(/^0o[0-7]+$/i);
var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
var hasNonWS = regexTester(nonWSregex);

var $trim = require('string.prototype.trim');

// https://262.ecma-international.org/13.0/#sec-stringtonumber

module.exports = function StringToNumber(argument) {
	if (typeof argument !== 'string') {
		throw new $TypeError('Assertion failed: `argument` is not a String');
	}
	if (isBinary(argument)) {
		return +$parseInteger($strSlice(argument, 2), 2);
	}
	if (isOctal(argument)) {
		return +$parseInteger($strSlice(argument, 2), 8);
	}
	if (hasNonWS(argument) || isInvalidHexLiteral(argument)) {
		return NaN;
	}
	var trimmed = $trim(argument);
	if (trimmed !== argument) {
		return StringToNumber(trimmed);
	}
	return +argument;
};
