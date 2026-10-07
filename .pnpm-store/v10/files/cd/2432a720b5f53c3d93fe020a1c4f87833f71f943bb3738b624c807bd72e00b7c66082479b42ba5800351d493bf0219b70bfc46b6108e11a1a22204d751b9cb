'use strict';

var $TypeError = require('es-errors/type');

var Call = require('es-abstract/2024/Call');
var CompletionRecord = require('es-abstract/2024/CompletionRecord');
var CreateIteratorFromClosure = require('../aos/CreateIteratorFromClosure');
var GetIteratorDirect = require('../aos/GetIteratorDirect');
var GetIteratorFlattenable = require('../aos/GetIteratorFlattenable');
var IsCallable = require('es-abstract/2024/IsCallable');
var IteratorClose = require('es-abstract/2024/IteratorClose');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var ThrowCompletion = require('es-abstract/2024/ThrowCompletion');
var Type = require('es-abstract/2024/Type');

var iterHelperProto = require('../IteratorHelperPrototype');

var SLOT = require('internal-slot');

module.exports = function flatMap(mapper) {
	if (this instanceof flatMap) {
		throw new $TypeError('`flatMap` is not a constructor');
	}

	var O = this; // step 1
	if (Type(O) !== 'Object') {
		throw new $TypeError('`this` value must be an Object'); // step 2
	}

	if (!IsCallable(mapper)) {
		throw new $TypeError('`mapper` must be a function'); // step 3
	}

	var iterated = GetIteratorDirect(O); // step 4

	var sentinel = { sentinel: true };
	var innerIterator = sentinel;

	var closeIfAbrupt = function (abruptCompletion) {
		if (!(abruptCompletion instanceof CompletionRecord)) {
			throw new $TypeError('`abruptCompletion` must be a Completion Record');
		}
		try {
			if (innerIterator !== sentinel) {
				IteratorClose(
					innerIterator,
					abruptCompletion
				);
			}
		} finally {
			innerIterator = sentinel;

			IteratorClose(
				iterated,
				abruptCompletion
			);
		}
	};

	var counter = 0; // step 5.a
	var innerAlive = false;
	var closure = function () {
		// while (true) { // step 5.b
		if (innerIterator === sentinel) {
			var value = IteratorStepValue(iterated); // step 5.b.i
			if (iterated['[[Done]]']) {
				innerAlive = false;
				innerIterator = sentinel;
				// return void undefined; // step 5.b.ii
				return sentinel;
			}
		}

		if (innerIterator === sentinel) {
			innerAlive = true; // step 5.b.viii
			try {
				var mapped = Call(mapper, void undefined, [value, counter]); // step 5.b.iv
				// yield mapped // step 5.b.vi
				innerIterator = GetIteratorFlattenable(mapped, 'REJECT-STRINGS'); // step 5.b.vi
			} catch (e) {
				innerAlive = false;
				innerIterator = sentinel;
				closeIfAbrupt(ThrowCompletion(e)); // steps 5.b.v, 5.b.vii
			} finally {
				counter += 1; // step 5.b.x
			}
		}
		// while (innerAlive) { // step 5.b.ix
		if (innerAlive) {
			// step 5.b.ix.4
			var innerValue;
			try {
				innerValue = IteratorStepValue(innerIterator); // step 5.b.ix.4.a
			} catch (e) {
				innerAlive = false;
				innerIterator = sentinel;
				closeIfAbrupt(ThrowCompletion(e)); // step 5.b.ix.4.b
			}
			if (innerIterator['[[Done]]']) {
				innerAlive = false;
				innerIterator = sentinel;
				return closure();
			}
			return innerValue; // step 5.b.ix.4.c
		}
		// }
		// return void undefined;
		return sentinel;
	};
	SLOT.set(closure, '[[Sentinel]]', sentinel); // for the userland implementation
	SLOT.set(closure, '[[CloseIfAbrupt]]', closeIfAbrupt); // for the userland implementation

	var result = CreateIteratorFromClosure(closure, 'Iterator Helper', iterHelperProto, ['[[UnderlyingIterators]]']); // step 7

	SLOT.set(result, '[[UnderlyingIterators]]', [iterated]); // step 8

	return result; // step 9
};
