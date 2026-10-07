'use strict';

var $TypeError = require('es-errors/type');

var StringPad = require('./StringPad');
var ToLength = require('./ToLength');
var ToString = require('./ToString');

// https://262.ecma-international.org/15.0/#sec-stringpaddingbuiltinsimpl

module.exports = function StringPaddingBuiltinsImpl(O, maxLength, fillString, placement) {
	if (placement !== 'start' && placement !== 'end' && placement !== 'START' && placement !== 'END') {
		throw new $TypeError('Assertion failed: `placement` must be ~START~ or ~END~');
	}

	var S = ToString(O); // step 1

	var intMaxLength = ToLength(maxLength); // step 2

	var stringLength = S.length; // step 3

	if (intMaxLength <= stringLength) { return S; } // step 4

	var filler = typeof fillString === 'undefined' ? ' ' : ToString(fillString); // steps 5-6

	return StringPad(S, intMaxLength, filler, placement); // step 7
};
