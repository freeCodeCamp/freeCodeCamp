'use strict';

var $TypeError = require('es-errors/type');

var callBound = require('call-bound');
var forEach = require('../helpers/forEach');

var $charCodeAt = callBound('String.prototype.charCodeAt');
var $strSplit = callBound('String.prototype.split');

var UnicodeEscape = require('./UnicodeEscape');

var hasOwn = require('hasown');

// https://262.ecma-international.org/9.0/#sec-quotejsonstring

var escapes = {
	'\u0008': '\\b',
	'\u0009': '\\t',
	'\u000A': '\\n',
	'\u000C': '\\f',
	'\u000D': '\\r',
	'\u0022': '\\"',
	'\u005c': '\\\\'
};

module.exports = function QuoteJSONString(value) {
	if (typeof value !== 'string') {
		throw new $TypeError('Assertion failed: `value` must be a String');
	}
	var product = '"';
	if (value) {
		forEach($strSplit(value, ''), function (C) {
			if (hasOwn(escapes, C)) {
				product += escapes[C];
			} else if ($charCodeAt(C, 0) < 0x20) {
				product += UnicodeEscape(C);
			} else {
				product += C;
			}
		});
	}
	product += '"';
	return product;
};
