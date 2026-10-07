'use strict';

var GetIntrinsic = require('get-intrinsic');
var callBound = require('call-bound');

var $fromCharCode = GetIntrinsic('%String.fromCharCode%');
var $TypeError = require('es-errors/type');
var $charCodeAt = callBound('String.prototype.charCodeAt');

var CharSet = require('../helpers/CharSet').CharSet;

// https://262.ecma-international.org/16.0/#sec-runtime-semantics-characterrange-abstract-operation

module.exports = function CharacterRange(A, B) {
	if (!(A instanceof CharSet) || !(B instanceof CharSet)) {
		throw new $TypeError('Assertion failed: CharSets A and B are not both CharSets');
	}

	var a;
	A.yield(function (c) {
		if (typeof a !== 'undefined') {
			throw new $TypeError('Assertion failed: CharSet A has more than one character');
		}
		a = c;
	});

	var b;
	B.yield(function (c) {
		if (typeof b !== 'undefined') {
			throw new $TypeError('Assertion failed: CharSet B has more than one character');
		}
		b = c;
	});

	var i = $charCodeAt(a, 0);
	var j = $charCodeAt(b, 0);

	if (!(i <= j)) {
		throw new $TypeError('Assertion failed: i is not <= j');
	}

	var arr = [];
	for (var k = i; k <= j; k += 1) {
		arr[arr.length] = $fromCharCode(k);
	}
	return arr;
};
