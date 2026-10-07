'use strict';

var $RangeError = require('es-errors/range');
var $TypeError = require('es-errors/type');

var CompletionRecord = require('es-abstract/2024/CompletionRecord');
var CreateIteratorFromClosure = require('../aos/CreateIteratorFromClosure');
var GetIteratorDirect = require('../aos/GetIteratorDirect');
var IteratorClose = require('es-abstract/2024/IteratorClose');
var IteratorStep = require('es-abstract/2024/IteratorStep');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var ThrowCompletion = require('es-abstract/2024/ThrowCompletion');
var ToIntegerOrInfinity = require('es-abstract/2024/ToIntegerOrInfinity');
var ToNumber = require('es-abstract/2024/ToNumber');
var Type = require('es-abstract/2024/Type');

var iterHelperProto = require('../IteratorHelperPrototype');

var isNaN = require('es-abstract/helpers/isNaN');

var SLOT = require('internal-slot');

module.exports = function drop(limit) {
	if (this instanceof drop) {
		throw new $TypeError('`drop` is not a constructor');
	}

	var O = this; // step 1
	if (Type(O) !== 'Object') {
		throw new $TypeError('`this` value must be an Object'); // step 2
	}

	var numLimit = ToNumber(limit); // step 2
	if (isNaN(numLimit)) {
		throw new $RangeError('`limit` must be a non-NaN number'); // step 3
	}

	var iterated = GetIteratorDirect(O); // step 4

	var integerLimit = ToIntegerOrInfinity(numLimit); // step 4
	if (integerLimit < 0) {
		throw new $RangeError('`limit` must be a >= 0'); // step 5
	}

	var closeIfAbrupt = function (abruptCompletion) {
		if (!(abruptCompletion instanceof CompletionRecord)) {
			throw new $TypeError('`abruptCompletion` must be a Completion Record');
		}
		IteratorClose(
			iterated,
			abruptCompletion
		);
	};

	var sentinel = {};
	var remaining = integerLimit; // step 6.a
	var closure = function () { // step 6
		var next;
		while (remaining > 0) { // step 6.b
			if (remaining !== Infinity) { // step 6.b.i
				remaining -= 1; // step 6.b.i.1
			}

			next = IteratorStep(iterated); // step 6.b.ii
			if (!next) {
				// return void undefined; // step 6.b.iii
				return sentinel;
			}
		}
		// while (true) { // step 6.c
		try {
			var value = IteratorStepValue(iterated); // step 6.b.i
			if (iterated['[[Done]]']) {
				return sentinel; // step 6.b.ii
			}
			return value;
		} catch (e) {
			// close iterator // step 6.c.icv
			closeIfAbrupt(ThrowCompletion(e));
			throw e;
		}
		// }
		// return void undefined;
	};
	SLOT.set(closure, '[[Sentinel]]', sentinel); // for the userland implementation
	SLOT.set(closure, '[[CloseIfAbrupt]]', closeIfAbrupt); // for the userland implementation

	var result = CreateIteratorFromClosure(closure, 'Iterator Helper', iterHelperProto, ['[[UnderlyingIterators]]']); // step 4

	SLOT.set(result, '[[UnderlyingIterators]]', [iterated]); // step 5

	return result; // step 6
};
