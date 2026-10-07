'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var AdvanceStringIndex = require('./AdvanceStringIndex');
var Call = require('./Call');
var GetIteratorDirect = require('./GetIteratorDirect');
var GetMethod = require('./GetMethod');
var IsArray = require('./IsArray');

var getIteratorMethod = require('../helpers/getIteratorMethod');

// https://262.ecma-international.org/16.0/#sec-getiteratorflattenable

module.exports = function GetIteratorFlattenable(obj, primitiveHandling) {
	if (primitiveHandling !== 'REJECT-PRIMITIVES' && primitiveHandling !== 'ITERATE-STRING-PRIMITIVES') {
		throw new $TypeError('Assertion failed: `stringHandling` must be "REJECT-PRIMITIVES" or "ITERATE-STRING-PRIMITIVES"');
	}

	if (!isObject(obj)) {
		if (primitiveHandling === 'REJECT-PRIMITIVES' || typeof obj !== 'string') {
			throw new $TypeError('obj must be an Object'); // step 1.a
		}
	}

	// var method = GetMethod(obj, Symbol.iterator); // step 2
	var method = getIteratorMethod(
		{
			AdvanceStringIndex: AdvanceStringIndex,
			GetMethod: GetMethod,
			IsArray: IsArray
		},
		obj
	);

	var iterator;
	if (typeof method === 'undefined') { // step 3
		iterator = obj; // step 3.a
	} else { // step 4
		iterator = Call(method, obj); // step 4.a
	}

	if (!isObject(iterator)) {
		throw new $TypeError('iterator must be an Object'); // step 5
	}
	return GetIteratorDirect(iterator); // step 6
};
