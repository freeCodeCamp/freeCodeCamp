'use strict';

var $TypeError = require('es-errors/type');

var CanonicalizeKeyedCollectionKey = require('./CanonicalizeKeyedCollectionKey');
var IsArray = require('./IsArray');
var SameValue = require('./SameValue');

var some = require('../helpers/some');

// https://262.ecma-international.org/16.0/#sec-setdatahas

module.exports = function SetDataHas(setData, value) {
	if (!IsArray(setData) && setData !== 'EMPTY') {
		throw new $TypeError('Assertion failed: `setData` must be a List or ~EMPTY~');
	}

	// if (SetDataIndex(setData, value) === 'NOT-FOUND') { return false; } // step 1
	// return true; // step 2

	var canonValue = CanonicalizeKeyedCollectionKey(value);

	return some(setData, function (e) {
		return SameValue(e, canonValue);
	});
};
