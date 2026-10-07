'use strict';

var $TypeError = require('es-errors/type');

var AddValueToKeyedGroup = require('./AddValueToKeyedGroup');
var Call = require('./Call');
var CanonicalizeKeyedCollectionKey = require('./CanonicalizeKeyedCollectionKey');
var GetIterator = require('./GetIterator');
var IfAbruptCloseIterator = require('./IfAbruptCloseIterator');
var IsCallable = require('./IsCallable');
var IteratorClose = require('./IteratorClose');
var IteratorStep = require('./IteratorStep');
var IteratorValue = require('./IteratorValue');
var RequireObjectCoercible = require('./RequireObjectCoercible');
var ThrowCompletion = require('./ThrowCompletion');
var ToPropertyKey = require('./ToPropertyKey');

var maxSafeInteger = require('../helpers/maxSafeInteger');

// https://262.ecma-international.org/16.0/#sec-groupby

module.exports = function GroupBy(items, callbackfn, keyCoercion) {
	if (keyCoercion !== 'PROPERTY' && keyCoercion !== 'COLLECTION') {
		throw new $TypeError('Assertion failed: `keyCoercion` must be `"PROPERTY"` or `"COLLECTION"`');
	}

	RequireObjectCoercible(items); // step 1

	if (!IsCallable(callbackfn)) {
		throw new $TypeError('callbackfn must be callable'); // step 2
	}

	var groups = []; // step 3

	var iteratorRecord = GetIterator(items, 'SYNC'); // step 4

	var k = 0; // step 5

	while (true) { // step 6
		if (k >= maxSafeInteger) { // step 6.a
			var error = ThrowCompletion(new $TypeError('k must be less than 2 ** 53 - 1')); // step 6.a.i
			return IteratorClose(iteratorRecord, error); // step 6.a.ii
		}
		var next = IteratorStep(iteratorRecord); // step 6.b
		if (!next) { // step 6.c
			return groups; // step 6.c.i
		}

		var value = IteratorValue(next); // step 6.dv

		var key;
		try {
			key = Call(callbackfn, void undefined, [value, k]); // step 6.e
		} catch (e) {
			IfAbruptCloseIterator(ThrowCompletion(e), iteratorRecord); // step 6.f
		}

		if (keyCoercion === 'PROPERTY') { // step 6.g
			try {
				key = ToPropertyKey(key); // step 6.g.i
			} catch (e) {
				IfAbruptCloseIterator(ThrowCompletion(e), iteratorRecord); // step 6.g.ii
			}
		} else { // step 6.h
			if (keyCoercion !== 'COLLECTION') {
				throw new $TypeError('keyCoercion must be ~PROPERTY~ or ~COLLECTION~'); // step 6.h.i
			}
			key = CanonicalizeKeyedCollectionKey(key); // step 6.h.ii
		}

		AddValueToKeyedGroup(groups, key, value); // step 6.i

		k += 1; // step 6.j
	}
};
