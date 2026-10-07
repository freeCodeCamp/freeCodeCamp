'use strict';

var GetIntrinsic = require('get-intrinsic');
var callBound = require('call-bound');

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');
var $RegExpPrototype = GetIntrinsic('%RegExp.prototype%');

var SameValue = require('./SameValue');

var $indexOf = callBound('String.prototype.indexOf');

var hasRegExpMatcher = require('is-regex');
var getFlags = require('regexp.prototype.flags');

// https://262.ecma-international.org/13.0/#sec-regexphasflag

module.exports = function RegExpHasFlag(R, codeUnit) {
	if (typeof codeUnit !== 'string' || codeUnit.length !== 1) {
		throw new $TypeError('Assertion failed: `string` must be a code unit - a String of length 1');
	}

	if (!isObject(R)) {
		throw new $TypeError('Assertion failed: Type(R) is not Object');
	}

	if (!hasRegExpMatcher(R)) { // step 2
		if (SameValue(R, $RegExpPrototype)) {
			return void undefined; // step 2.a
		}
		throw new $TypeError('`R` must be a RegExp object'); // step 2.b
	}

	var flags = getFlags(R); // step 3

	return $indexOf(flags, codeUnit) > -1; // steps 4-5
};
