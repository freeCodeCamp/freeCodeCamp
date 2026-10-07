'use strict';

var $TypeError = require('es-errors/type');

var Call = require('es-abstract/2024/Call');
var GetIteratorDirect = require('../aos/GetIteratorDirect');
var IsCallable = require('es-abstract/2024/IsCallable');
var IteratorClose = require('es-abstract/2024/IteratorClose');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var NormalCompletion = require('es-abstract/2024/NormalCompletion');
var ThrowCompletion = require('es-abstract/2024/ThrowCompletion');
var ToBoolean = require('es-abstract/2024/ToBoolean');
var Type = require('es-abstract/2024/Type');

module.exports = function find(predicate) {
	if (this instanceof find) {
		throw new $TypeError('`find` is not a constructor');
	}

	var O = this; // step 1

	if (Type(O) !== 'Object') {
		throw new $TypeError('`this` value must be an Object'); // step 2
	}

	if (!IsCallable(predicate)) {
		throw new $TypeError('`predicate` must be a function'); // step 3
	}

	var iterated = GetIteratorDirect(O); // step 4

	var counter = 0; // step 5

	// eslint-disable-next-line no-constant-condition
	while (true) { // step 6
		var value = IteratorStepValue(iterated); // step 6.a
		if (iterated['[[Done]]']) {
			return void undefined; // step 6.b
		}
		var result;
		try {
			result = Call(predicate, void undefined, [value, counter]); // step 6.c
		} catch (e) {
			// close iterator // step 6.d
			IteratorClose(
				iterated,
				ThrowCompletion(e)
			);
		} finally {
			counter += 1; // step 6.f
		}
		if (ToBoolean(result)) {
			return IteratorClose(
				iterated,
				NormalCompletion(value)
			); // step 6.e
		}
	}
};
