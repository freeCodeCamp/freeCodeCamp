'use strict';

var $TypeError = require('es-errors/type');

var callBound = require('call-bound');
var forEach = require('../helpers/forEach');
var isLeadingSurrogate = require('../helpers/isLeadingSurrogate');
var isTrailingSurrogate = require('../helpers/isTrailingSurrogate');

var $charCodeAt = callBound('String.prototype.charCodeAt');
var $strSplit = callBound('String.prototype.split');

var UnicodeEscape = require('./UnicodeEscape');
var UTF16DecodeString = require('./UTF16DecodeString');
var UTF16Encoding = require('./UTF16Encoding');

var hasOwn = require('hasown');

// https://262.ecma-international.org/11.0/#sec-quotejsonstring

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
		forEach($strSplit(UTF16DecodeString(value), ''), function (C) {
			if (hasOwn(escapes, C)) {
				product += escapes[C];
			} else {
				var cCharCode = $charCodeAt(C, 0);
				if (cCharCode < 0x20 || isLeadingSurrogate(cCharCode) || isTrailingSurrogate(cCharCode)) {
					product += UnicodeEscape(C);
				} else {
					product += UTF16Encoding(cCharCode);
				}
			}
		});
	}
	product += '"';
	return product;
};
