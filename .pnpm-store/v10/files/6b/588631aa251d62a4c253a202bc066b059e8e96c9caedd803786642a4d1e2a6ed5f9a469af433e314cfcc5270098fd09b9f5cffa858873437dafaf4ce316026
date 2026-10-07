'use strict';

var $TypeError = require('es-errors/type');

var Call = require('es-abstract/2024/Call');
var GetIteratorDirect = require('../aos/GetIteratorDirect');
var IsCallable = require('es-abstract/2024/IsCallable');
var IteratorClose = require('es-abstract/2024/IteratorClose');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var ThrowCompletion = require('es-abstract/2024/ThrowCompletion');
var Type = require('es-abstract/2024/Type');

module.exports = function reduce(reducer) {
	if (this instanceof reduce) {
		throw new $TypeError('`reduce` is not a constructor');
	}

	var O = this; // step 1
	if (Type(O) !== 'Object') {
		throw new $TypeError('`this` value must be an Object'); // step 2
	}

	if (!IsCallable(reducer)) {
		throw new $TypeError('`reducer` must be a function'); // step 3
	}

	var iterated = GetIteratorDirect(O); // step 4

	var accumulator;
	var counter;
	if (arguments.length < 2) { // step 6
		accumulator = IteratorStepValue(iterated); // step 6.a
		if (iterated['[[Done]]']) {
			throw new $TypeError('Reduce of empty iterator with no initial value');
		}
		counter = 1;
	} else { // step 7
		accumulator = arguments[1]; // step 7.a
		counter = 0;
	}

	// eslint-disable-next-line no-constant-condition
	while (true) { // step 8
		var value = IteratorStepValue(iterated); // step 8.a
		if (iterated['[[Done]]']) {
			return accumulator; // step 8.b
		}
		try {
			var result = Call(reducer, void undefined, [accumulator, value, counter]); // step 8.d
			accumulator = result; // step 8.f
		} catch (e) {
			// close iterator // step 8.e
			IteratorClose(
				iterated,
				ThrowCompletion(e)
			);
		}
		counter += 1; // step 8.g
	}
};
