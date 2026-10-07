'use strict';

var GetIntrinsic = require('get-intrinsic');

var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');
var $Promise = GetIntrinsic('%Promise%', true);

var Call = require('./Call');
var CreateIterResultObject = require('./CreateIterResultObject');
var Get = require('./Get');
var GetMethod = require('./GetMethod');
var IteratorComplete = require('./IteratorComplete');
var IteratorNext = require('./IteratorNext');
var IteratorValue = require('./IteratorValue');
var ObjectCreate = require('./ObjectCreate');
var PromiseResolve = require('./PromiseResolve');

var isIteratorRecord = require('../helpers/records/iterator-record-2023');

var SLOT = require('internal-slot');

var callBound = require('call-bound');

var $then = callBound('Promise.prototype.then', true);

var AsyncFromSyncIteratorContinuation = function AsyncFromSyncIteratorContinuation(result) {
	if (!isObject(result)) {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (arguments.length > 1) {
		throw new $TypeError('although AsyncFromSyncIteratorContinuation should take a second argument, it is not used in this implementation');
	}

	if (!$Promise) {
		throw new $SyntaxError('This environment does not support Promises.');
	}

	return new $Promise(function (resolve) {
		var done = IteratorComplete(result); // step 2
		var value = IteratorValue(result); // step 4
		var valueWrapper = PromiseResolve($Promise, value); // step 6

		// eslint-disable-next-line no-shadow
		var onFulfilled = function (value) { // steps 8-9
			return CreateIterResultObject(value, done); // step 8.a
		};
		resolve($then(valueWrapper, onFulfilled)); // step 11
	}); // step 12
};

var $AsyncFromSyncIteratorPrototype = GetIntrinsic('%AsyncFromSyncIteratorPrototype%', true) || {
	next: function next(value) {
		if (!$Promise) {
			throw new $SyntaxError('This environment does not support Promises.');
		}

		var O = this; // step 1

		SLOT.assert(O, '[[SyncIteratorRecord]]'); // step 2

		var argsLength = arguments.length;

		return new $Promise(function (resolve) { // step 3
			var syncIteratorRecord = SLOT.get(O, '[[SyncIteratorRecord]]'); // step 4
			var result;
			if (argsLength > 0) {
				result = IteratorNext(syncIteratorRecord['[[Iterator]]'], value); // step 5.a
			} else { // step 6
				result = IteratorNext(syncIteratorRecord['[[Iterator]]']);// step 6.a
			}
			resolve(AsyncFromSyncIteratorContinuation(result)); // step 8
		});
	},
	'return': function () {
		if (!$Promise) {
			throw new $SyntaxError('This environment does not support Promises.');
		}

		var O = this; // step 1

		SLOT.assert(O, '[[SyncIteratorRecord]]'); // step 2

		var valueIsPresent = arguments.length > 0;
		var value = valueIsPresent ? arguments[0] : void undefined;

		return new $Promise(function (resolve, reject) { // step 3
			var syncIterator = SLOT.get(O, '[[SyncIteratorRecord]]')['[[Iterator]]']; // step 4
			var iteratorReturn = GetMethod(syncIterator, 'return'); // step 5

			if (typeof iteratorReturn === 'undefined') { // step 7
				var iterResult = CreateIterResultObject(value, true); // step 7.a
				Call(resolve, void undefined, [iterResult]); // step 7.b
				return;
			}
			var result;
			if (valueIsPresent) { // step 8
				result = Call(iteratorReturn, syncIterator, [value]); // step 8.a
			} else { // step 9
				result = Call(iteratorReturn, syncIterator); // step 9.a
			}
			if (!isObject(result)) { // step 11
				Call(reject, void undefined, [new $TypeError('Iterator `return` method returned a non-object value.')]); // step 11.a
				return;
			}

			resolve(AsyncFromSyncIteratorContinuation(result)); // step 12
		});
	},
	'throw': function () {
		if (!$Promise) {
			throw new $SyntaxError('This environment does not support Promises.');
		}

		var O = this; // step 1

		SLOT.assert(O, '[[SyncIteratorRecord]]'); // step 2

		var valueIsPresent = arguments.length > 0;
		var value = valueIsPresent ? arguments[0] : void undefined;

		return new $Promise(function (resolve, reject) { // step 3
			var syncIterator = SLOT.get(O, '[[SyncIteratorRecord]]')['[[Iterator]]']; // step 4

			var throwMethod = GetMethod(syncIterator, 'throw'); // step 5

			if (typeof throwMethod === 'undefined') { // step 7
				Call(reject, void undefined, [value]); // step 7.a
				return;
			}

			var result;
			if (valueIsPresent) { // step 8
				result = Call(throwMethod, syncIterator, [value]); // step 8.a
			} else { // step 9
				result = Call(throwMethod, syncIterator); // step 9.a
			}
			if (!isObject(result)) { // step 11
				Call(reject, void undefined, [new $TypeError('Iterator `throw` method returned a non-object value.')]); // step 11.a
				return;
			}

			resolve(AsyncFromSyncIteratorContinuation(result/* , promiseCapability */)); // step 12
		});
	}
};

// https://262.ecma-international.org/9.0/#sec-createasyncfromsynciterator

module.exports = function CreateAsyncFromSyncIterator(syncIteratorRecord) {
	if (!isIteratorRecord(syncIteratorRecord)) {
		throw new $TypeError('Assertion failed: `syncIteratorRecord` is not an Iterator Record');
	}

	// var asyncIterator = ObjectCreate(%AsyncFromSyncIteratorPrototype%, « [[SyncIteratorRecord]] »); // step 1
	var asyncIterator = ObjectCreate($AsyncFromSyncIteratorPrototype);

	SLOT.set(asyncIterator, '[[SyncIteratorRecord]]', syncIteratorRecord); // step 2

	var nextMethod = Get(asyncIterator, 'next'); // step 3

	return { // steps 3-4
		'[[Iterator]]': asyncIterator,
		'[[NextMethod]]': nextMethod,
		'[[Done]]': false
	};
};
