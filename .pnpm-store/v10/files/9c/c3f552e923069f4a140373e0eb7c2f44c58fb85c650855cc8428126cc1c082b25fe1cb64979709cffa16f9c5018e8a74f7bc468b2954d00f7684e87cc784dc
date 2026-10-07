'use strict';

var $TypeError = require('es-errors/type');

var callBound = require('call-bound');
var forEach = require('../helpers/forEach');

var $charCodeAt = callBound('String.prototype.charCodeAt');
var $numberToString = callBound('Number.prototype.toString');
var $toLowerCase = callBound('String.prototype.toLowerCase');
var $strSlice = callBound('String.prototype.slice');
var $strSplit = callBound('String.prototype.split');

// https://262.ecma-international.org/6.0/#sec-quotejsonstring

var escapes = {
	'\u0008': 'b',
	'\u000C': 'f',
	'\u000A': 'n',
	'\u000D': 'r',
	'\u0009': 't'
};

module.exports = function QuoteJSONString(value) {
	if (typeof value !== 'string') {
		throw new $TypeError('Assertion failed: `value` must be a String');
	}
	var product = '"';
	if (value) {
		forEach($strSplit(value, ''), function (C) {
			if (C === '"' || C === '\\') {
				product += '\u005C' + C;
			} else if (C === '\u0008' || C === '\u000C' || C === '\u000A' || C === '\u000D' || C === '\u0009') {
				var abbrev = escapes[C];
				product += '\u005C' + abbrev;
			} else {
				var cCharCode = $charCodeAt(C, 0);
				if (cCharCode < 0x20) {
					product += '\u005Cu' + $toLowerCase($strSlice('0000' + $numberToString(cCharCode, 16), -4));
				} else {
					product += C;
				}
			}
		});
	}
	product += '"';
	return product;
};
