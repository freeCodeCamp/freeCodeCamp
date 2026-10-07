'use strict';

var $RangeError = require('es-errors/range');
var $TypeError = require('es-errors/type');

var CompletionRecord = require('es-abstract/2024/CompletionRecord');
var CreateIteratorFromClosure = require('../aos/CreateIteratorFromClosure');
var GetIteratorDirect = require('../aos/GetIteratorDirect');
var IteratorClose = require('es-abstract/2024/IteratorClose');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var NormalCompletion = require('es-abstract/2024/NormalCompletion');
var ToIntegerOrInfinity = require('es-abstract/2024/ToIntegerOrInfinity');
var ToNumber = require('es-abstract/2024/ToNumber');
var Type = require('es-abstract/2024/Type');

var iterHelperProto = require('../IteratorHelperPrototype');

var isNaN = require('es-abstract/helpers/isNaN');

var SLOT = require('internal-slot');

module.exports = function take(limit) {
	if (this instanceof take) {
		throw new $TypeError('`take` is not a constructor');
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

	var integerLimit = ToIntegerOrInfinity(numLimit); // step 7
	if (integerLimit < 0) {
		throw new $RangeError('`limit` must be a >= 0'); // step 8
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
	var remaining = integerLimit; // step 9.a
	var closure = function () { // step 9
		// while (true) { // step 9.b
		if (remaining === 0) { // step 9.b.i
			return IteratorClose( // step 9.b.i.1
				iterated,
				NormalCompletion(sentinel)
			);
		}
		if (remaining !== Infinity) { // step 9.b.ii
			remaining -= 1; // step 9.b.ii.1
		}

		var value = IteratorStepValue(iterated); // step 6.b.i
		if (iterated['[[Done]]']) {
			return sentinel; // step 6.b.ii
		}

		return value; // step 9.b.iv
		// }
	};
	SLOT.set(closure, '[[Sentinel]]', sentinel); // for the userland implementation
	SLOT.set(closure, '[[CloseIfAbrupt]]', closeIfAbrupt); // for the userland implementation

	var result = CreateIteratorFromClosure(closure, 'Iterator Helper', iterHelperProto, ['[[UnderlyingIterators]]']); // step 7

	SLOT.set(result, '[[UnderlyingIterators]]', [iterated]); // step 8

	return result; // step 9
};
