'use strict';

var $TypeError = require('es-errors/type');

var AllCharacters = require('./AllCharacters');

var CharSet = require('../helpers/CharSet').CharSet;
var isRegExpRecord = require('../helpers/records/regexp-record');

// https://262.ecma-international.org/15.0/#sec-charactercomplement

module.exports = function CharacterComplement(rer, S) {
	if (!isRegExpRecord(rer)) {
		throw new $TypeError('Assertion failed: `rer` must be a RegExp Record');
	}

	if (!(S instanceof CharSet)) {
		throw new $TypeError('Assertion failed: S must be a CharSet');
	}

	var A = AllCharacters(rer); // step 1

	// 2. Return the CharSet containing the CharSetElements of A which are not also CharSetElements of S.
	return new CharSet(
		function (x) { return !S.test(x) && A.test(x); },
		function (emit) {
			A.yield(function (x) {
				if (!S.test(x)) {
					emit(x);
				}
			});
		}
	);
};
