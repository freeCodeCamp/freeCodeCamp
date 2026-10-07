'use strict';

var $TypeError = require('es-errors/type');

var AdvanceStringIndex = require('es-abstract/2024/AdvanceStringIndex');
var Call = require('es-abstract/2024/Call');
var CompletionRecord = require('es-abstract/2024/CompletionRecord');
var CreateIteratorFromClosure = require('../aos/CreateIteratorFromClosure');
var GetIteratorDirect = require('../aos/GetIteratorDirect');
var GetMethod = require('es-abstract/2024/GetMethod');
var IsArray = require('es-abstract/2024/IsArray');
var IteratorCloseAll = require('../aos/IteratorCloseAll');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var Type = require('es-abstract/2024/Type');

var forEach = require('es-abstract/helpers/forEach');
var getIteratorMethod = require('es-abstract/helpers/getIteratorMethod');

var iterHelperProto = require('../IteratorHelperPrototype');

var SLOT = require('internal-slot');

module.exports = function concat() {
	if (this instanceof concat) {
		throw new $TypeError('`Iterator.concat` is not a constructor');
	}

	var iterables = []; // step 1

	forEach(arguments, function (item) { // step 2
		if (Type(item) !== 'Object') {
			throw new $TypeError('`Iterator.concat` requires all arguments to be objects'); // step 2.1
		}
		// var method = GetMethod(item, Symbol.iterator); // step 2.2
		var method = getIteratorMethod(
			{
				AdvanceStringIndex: AdvanceStringIndex,
				GetMethod: GetMethod,
				IsArray: IsArray
			},
			item
		);
		if (typeof method === 'undefined') {
			throw new $TypeError('`Iterator.concat` requires all arguments to be iterable'); // step 2.3
		}
		iterables[iterables.length] = { '[[OpenMethod]]': method, '[[Iterable]]': item }; // step 2.4
	});

	var sentinel = {};
	var iterablesIndex = 0;
	var iteratorRecord;
	var innerAlive = false;
	var closure = function () { // step 3
		if (iterablesIndex >= iterables.length) {
			return sentinel;
		}
		var iterable = iterables[iterablesIndex]; // step 3.a
		if (!innerAlive) {
			var iter = Call(iterable['[[OpenMethod]]'], iterable['[[Iterable]]']); // step 3.a.i
			if (Type(iter) !== 'Object') {
				throw new $TypeError('`Iterator.concat` iterator method did not return an object'); // step 3.a.ii
			}
			iteratorRecord = GetIteratorDirect(iter); // step 3.a.iii
			innerAlive = true; // step 3.a.iv
		}

		if (innerAlive) { // step 3.a.v
			var innerValue = IteratorStepValue(iteratorRecord); // step 3.a.v.1
			if (iteratorRecord['[[Done]]']) { // step 3.a.v.2
				innerAlive = false; // step 3.a.v.2.a
			} else { // step 3.a.v.3
				// 1. Let completion be Completion(Yield(innerValue)).
				return innerValue; // step 3.a.v.3.a
			}
		}

		iterablesIndex += 1;
		return closure();
	};

	var closeIfAbrupt = function (abruptCompletion) {
		if (!(abruptCompletion instanceof CompletionRecord)) {
			throw new $TypeError('`abruptCompletion` must be a Completion Record');
		}
		iterablesIndex = iterables.length;
		innerAlive = false;
		if (iteratorRecord) {
			IteratorCloseAll(
				[iteratorRecord],
				abruptCompletion
			);
		}
	};

	SLOT.set(closure, '[[Sentinel]]', sentinel); // for the userland implementation
	SLOT.set(closure, '[[CloseIfAbrupt]]', closeIfAbrupt); // for the userland implementation

	var gen = CreateIteratorFromClosure(closure, 'Iterator Helper', iterHelperProto, ['[[UnderlyingIterators]]']); // step 5
	SLOT.set(gen, '[[UnderlyingIterators]]', []); // step 6
	return gen; // step 7
};
