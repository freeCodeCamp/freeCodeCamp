'use strict';

var $TypeError = require('es-errors/type');

var Call = require('es-abstract/2024/Call');
var GetIteratorDirect = require('../aos/GetIteratorDirect');
var IsCallable = require('es-abstract/2024/IsCallable');
var IteratorClose = require('es-abstract/2024/IteratorClose');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var ThrowCompletion = require('es-abstract/2024/ThrowCompletion');
var Type = require('es-abstract/2024/Type');

module.exports = function forEach(fn) {
	if (this instanceof forEach) {
		throw new $TypeError('`forEach` is not a constructor');
	}

	var O = this; // step 1
	if (Type(O) !== 'Object') {
		throw new $TypeError('`this` value must be an Object'); // step 2
	}

	if (!IsCallable(fn)) {
		throw new $TypeError('`fn` must be a function'); // step 3
	}

	var iterated = GetIteratorDirect(O); // step 4

	var counter = 0; // step 5

	// eslint-disable-next-line no-constant-condition
	while (true) { // step 6
		var value = IteratorStepValue(iterated); // step 6.a
		if (iterated['[[Done]]']) {
			return void undefined; // step 6.b
		}
		try {
			Call(fn, void undefined, [value, counter]); // step 6.c
		} catch (e) {
			IteratorClose(
				iterated,
				ThrowCompletion(e)
			); // steps 6.d
			throw e;
		} finally {
			counter += 1; // step 6.e
		}
	}
};
