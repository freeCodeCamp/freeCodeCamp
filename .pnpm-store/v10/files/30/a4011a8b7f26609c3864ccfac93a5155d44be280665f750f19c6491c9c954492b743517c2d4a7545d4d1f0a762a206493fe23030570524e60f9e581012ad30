'use strict';

var $TypeError = require('es-errors/type');

var GetIntrinsic = require('get-intrinsic');
var callBound = require('call-bound');
var hasOwn = require('hasown');

var caseFolding = require('./caseFolding.json');
var IsArray = require('./IsArray');
var isLeadingSurrogate = require('./isLeadingSurrogate');
var isTrailingSurrogate = require('./isTrailingSurrogate');

var $charCodeAt = callBound('%String.prototype.charCodeAt%');
var $fromCharCode = GetIntrinsic('%String.fromCharCode%');

/* eslint func-style: 0  */

function CharSet(test, yieldCh) {
	if (typeof test !== 'function') {
		throw new $TypeError('Assertion failed: `test` must be a function');
	}
	if (typeof yieldCh !== 'function') {
		throw new $TypeError('Assertion failed: `yield` must be a function');
	}
	this.test = test;
	this.yield = yieldCh;
}
CharSet.prototype.count = function () {
	var count = 0;
	this.yield(function () { count += 1; });
	return count;
};

function testCodeUnits(CharSetElement) {
	if (typeof CharSetElement !== 'string') {
		throw new $TypeError('Assertion failed: `CharSetElement` must be a string');
	}
	return CharSetElement.length !== 1;
}
function yieldCodeUnits(emit) {
	for (var i = 0; i <= 0xDFFF; i += 1) {
		emit($fromCharCode(i));
	}
}

function testCodePoints(CharSetElement) {
	if (typeof CharSetElement !== 'string') {
		throw new $TypeError('Assertion failed: `CharSetElement` must be a string');
	}

	if (CharSetElement.length === 1) {
		return true;
	}
	if (CharSetElement.length === 2) {
		var hi = $charCodeAt(CharSetElement, 0);
		var lo = $charCodeAt(CharSetElement, 1);
		return isLeadingSurrogate(hi) && isTrailingSurrogate(lo);
	}

	return false;
}

function yieldCodePoints(emit) {
	for (var i = 0; i <= 0xDFFF; i += 1) {
		emit($fromCharCode(i));
	}
	for (var u = 0x10000; u <= 0x10FFFF; u += 1) {
		var cp = u - 0x10000;
		var high = (cp >> 10) + 0xD800;
		var low = (cp & 0x3FF) + 0xDC00;
		emit($fromCharCode(high, low));
	}
}

function charsToMap(chars) {
	if (!IsArray(chars)) {
		throw new $TypeError('Assertion failed: `chars` must be an array');
	}

	var map = { __proto__: null };
	for (var i = 0; i < chars.length; i += 1) {
		var char = chars[i];
		if (typeof char !== 'string' || (char.length !== 1 && char.length !== 2)) {
			throw new $TypeError('Assertion failed: `chars` must be an array of strings of length 1');
		}
		map[char] = true;
	}
	return map;
}

module.exports = {
	CharSet: CharSet,
	from: function from(chars) {
		var map = charsToMap(chars);
		return new CharSet(
			function test(CharSetElement) {
				return hasOwn(map, CharSetElement);
			},
			function yieldChar(emit) {
				// eslint-disable-next-line no-restricted-syntax
				for (var k in map) {
					if (hasOwn(map, k)) {
						emit(k);
					}
				}
			}
		);
	},
	getCodeUnits: function () {
		return new CharSet(testCodeUnits, yieldCodeUnits);
	},
	getCodePoints: function () {
		return new CharSet(testCodePoints, yieldCodePoints);
	},
	getNonSimpleCaseFoldingCodePoints: function () {
		return new CharSet(
			function test(CharSetElement) {
				return testCodePoints(CharSetElement) && !hasOwn(caseFolding.S, CharSetElement);
			},
			function yieldChar(emit) {
				yieldCodePoints(function (CharSetElement) {
					if (!hasOwn(caseFolding.S, CharSetElement)) {
						emit(CharSetElement);
					}
				});
			}
		);
	}
};
