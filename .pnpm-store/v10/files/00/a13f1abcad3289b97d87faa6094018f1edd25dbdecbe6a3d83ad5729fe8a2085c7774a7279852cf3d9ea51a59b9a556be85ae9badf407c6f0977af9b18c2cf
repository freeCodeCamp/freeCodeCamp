'use strict';

var $TypeError = require('es-errors/type');

var CanonicalizeKeyedCollectionKey = require('./CanonicalizeKeyedCollectionKey');
var SameValue = require('./SameValue');

var isArray = require('../helpers/IsArray');

// https://262.ecma-international.org/16.0/#sec-setdataindex

module.exports = function SetDataIndex(setData, value) {
	if (!isArray(setData) && setData !== 'EMPTY') {
		throw new $TypeError('Assertion failed: `setData` must be a List or ~EMPTY~');
	}

	var canonValue = CanonicalizeKeyedCollectionKey(value); // step 1

	var size = setData.length; // step 2

	var index = 0; // step 3

	while (index < size) { // step 4
		var e = setData[index]; // step 4.a
		if (/* e !== ~EMPTY~ && */ SameValue(e, canonValue)) { // step 4.b
			return index; // step 4.b.i
		}
		index += 1; // step 4.c
	}

	return 'NOT-FOUND'; // step 5
};
