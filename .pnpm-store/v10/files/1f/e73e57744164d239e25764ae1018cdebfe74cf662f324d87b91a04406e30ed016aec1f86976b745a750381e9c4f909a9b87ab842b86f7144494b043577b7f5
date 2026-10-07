'use strict';

var $TypeError = require('es-errors/type');

var Call = require('es-abstract/2024/Call');
var CompletionRecord = require('es-abstract/2024/CompletionRecord');
var CreateIteratorFromClosure = require('../aos/CreateIteratorFromClosure');
var GetIteratorDirect = require('../aos/GetIteratorDirect');
var IsCallable = require('es-abstract/2024/IsCallable');
var IteratorClose = require('es-abstract/2024/IteratorClose');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var ThrowCompletion = require('es-abstract/2024/ThrowCompletion');
var Type = require('es-abstract/2024/Type');

var iterHelperProto = require('../IteratorHelperPrototype');

var SLOT = require('internal-slot');

module.exports = function map(mapper) {
	if (this instanceof map) {
		throw new $TypeError('`map` is not a constructor');
	}

	var O = this; // step 1
	if (Type(O) !== 'Object') {
		throw new $TypeError('`this` value must be an Object'); // step 2
	}

	if (!IsCallable(mapper)) {
		throw new $TypeError('`mapper` must be a function'); // step 3
	}

	var iterated = GetIteratorDirect(O); // step 4

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
	var counter = 0; // step 6.a
	var closure = function () {
		// while (true) { // step 6.b
		var value = IteratorStepValue(iterated); // step 6.b.i
		if (iterated['[[Done]]']) {
			return sentinel; // step 6.b.ii
		}

		var mapped;
		try {
			mapped = Call(mapper, void undefined, [value, counter]); // step 6.b.iii
			// yield mapped // step 6.b.vi
			return mapped;
		} catch (e) {
			// close iterator // step 6.b.v, 6.b.vii
			closeIfAbrupt(ThrowCompletion(e));
			throw e;
		} finally {
			counter += 1; // step 6.b.viii
		}
		// }
	};
	SLOT.set(closure, '[[Sentinel]]', sentinel); // for the userland implementation
	SLOT.set(closure, '[[CloseIfAbrupt]]', closeIfAbrupt); // for the userland implementation

	var result = CreateIteratorFromClosure(closure, 'Iterator Helper', iterHelperProto, ['[[UnderlyingIterators]]']); // step 7

	SLOT.set(result, '[[UnderlyingIterators]]', [iterated]); // step 8

	return result; // step 9
};
