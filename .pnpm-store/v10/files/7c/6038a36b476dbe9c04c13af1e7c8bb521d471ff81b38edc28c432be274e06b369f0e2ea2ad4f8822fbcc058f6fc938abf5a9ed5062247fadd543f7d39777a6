'use strict';

var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');

var whichTypedArray = require('which-typed-array');
var availableTypedArrays = require('available-typed-arrays')();

var IsArray = require('./IsArray');
var SpeciesConstructor = require('./SpeciesConstructor');
var TypedArrayCreateFromConstructor = require('./TypedArrayCreateFromConstructor');

var getConstructor = require('../helpers/typedArrayConstructors');

// https://262.ecma-international.org/15.0/#typedarray-species-create

module.exports = function TypedArraySpeciesCreate(exemplar, argumentList) {
	if (availableTypedArrays.length === 0) {
		throw new $SyntaxError('Assertion failed: Typed Arrays are not supported in this environment');
	}

	var kind = whichTypedArray(exemplar);
	if (!kind) {
		throw new $TypeError('Assertion failed: exemplar must be a TypedArray'); // step 1
	}
	if (!IsArray(argumentList)) {
		throw new $TypeError('Assertion failed: `argumentList` must be a List'); // step 1
	}

	var defaultConstructor = getConstructor(kind); // step 2
	if (typeof defaultConstructor !== 'function') {
		throw new $SyntaxError('Assertion failed: `constructor` of `exemplar` (' + kind + ') must exist. Please report this!');
	}
	var constructor = SpeciesConstructor(exemplar, defaultConstructor); // step 3

	return TypedArrayCreateFromConstructor(constructor, argumentList); // step 4
};
