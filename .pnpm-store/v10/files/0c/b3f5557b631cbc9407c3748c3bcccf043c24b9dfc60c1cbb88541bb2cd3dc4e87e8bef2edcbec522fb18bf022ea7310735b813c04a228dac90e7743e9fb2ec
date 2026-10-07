'use strict';

var $TypeError = require('es-errors/type');

var regexTester = require('safe-regex-test');

// https://tc39.es/ecma262/#sec-istimezoneoffsetstring

// implementation taken from https://github.com/tc39/proposal-temporal/blob/21ee5b13f0672990c807475ba094092d19dd6dc5/polyfill/lib/ecmascript.mjs#L2140

var OFFSET = /^([+\u2212-])([01][0-9]|2[0-3])(?::?([0-5][0-9])(?::?([0-5][0-9])(?:[.,](\d{1,9}))?)?)?$/;

var testOffset = regexTester(OFFSET);

module.exports = function IsTimeZoneOffsetString(offsetString) {
	if (typeof offsetString !== 'string') {
		throw new $TypeError('Assertion failed: `offsetString` must be a String');
	}
	return testOffset(offsetString);
};
