'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var isPropertyKey = require('../helpers/isPropertyKey');

// https://262.ecma-international.org/6.0/#sec-deletepropertyorthrow

module.exports = function DeletePropertyOrThrow(O, P) {
	if (!isObject(O)) {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!isPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P is not a Property Key');
	}

	// eslint-disable-next-line no-param-reassign
	var success = delete O[P];
	if (!success) {
		throw new $TypeError('Attempt to delete property failed.');
	}
	return success;
};
