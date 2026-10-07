'use strict';

var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');
var isInteger = require('math-intrinsics/isInteger');
var whichTypedArray = require('which-typed-array');

// https://262.ecma-international.org/13.0/#sec-typedarrayelementsize

var tableTAO = require('./tables/typed-array-objects');

module.exports = function TypedArrayElementSize(O) {
	var type = whichTypedArray(O);
	if (!type) {
		throw new $TypeError('Assertion failed: `O` must be a TypedArray');
	}
	var size = tableTAO.size['$' + tableTAO.name['$' + type]];
	if (!isInteger(size) || size < 0) {
		throw new $SyntaxError('Assertion failed: Unknown TypedArray type `' + type + '`');
	}

	return size;
};
