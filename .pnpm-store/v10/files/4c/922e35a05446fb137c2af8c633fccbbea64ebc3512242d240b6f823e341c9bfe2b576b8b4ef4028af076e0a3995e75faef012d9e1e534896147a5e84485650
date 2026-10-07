'use strict';

var $TypeError = require('es-errors/type');

var CreateIterResultObject = require('es-abstract/2024/CreateIterResultObject');
var IsCallable = require('es-abstract/2024/IsCallable');
var Type = require('es-abstract/2024/Type');

var SLOT = require('internal-slot');

module.exports = function GeneratorStart(generator, closure) {
	SLOT.assert(generator, '[[GeneratorState]]');
	SLOT.assert(generator, '[[GeneratorContext]]');
	SLOT.assert(generator, '[[GeneratorBrand]]');
	SLOT.assert(generator, '[[Sentinel]]'); // our userland slot
	SLOT.assert(generator, '[[CloseIfAbrupt]]'); // our second userland slot

	if (!IsCallable(closure) || closure.length !== 0) {
		throw new $TypeError('`closure` must be a function that takes no arguments');
	}

	var sentinel = SLOT.get(closure, '[[Sentinel]]');
	if (Type(sentinel) !== 'Object') {
		throw new $TypeError('`closure.[[Sentinel]]` must be an object');
	}
	SLOT.set(generator, '[[GeneratorContext]]', function () { // steps 2-5
		try {
			var result = closure();
			if (result === sentinel) {
				SLOT.set(generator, '[[GeneratorState]]', 'completed');
				SLOT.set(generator, '[[GeneratorContext]]', null);
				return CreateIterResultObject(void undefined, true);
			}
			SLOT.set(generator, '[[GeneratorState]]', 'suspendedYield');
			return CreateIterResultObject(result, false);
		} catch (e) {
			SLOT.set(generator, '[[GeneratorState]]', 'completed');
			SLOT.set(generator, '[[GeneratorContext]]', null);
			throw e;
		}
	});

	SLOT.set(generator, '[[GeneratorState]]', 'suspendedStart'); // step 6
};
