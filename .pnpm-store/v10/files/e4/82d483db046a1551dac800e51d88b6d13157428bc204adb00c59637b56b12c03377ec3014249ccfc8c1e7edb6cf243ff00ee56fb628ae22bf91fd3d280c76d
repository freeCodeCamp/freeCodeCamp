'use strict';

var $TypeError = require('es-errors/type');

var CreateIteratorResultObject = require('./CreateIteratorResultObject');
var IsCallable = require('./IsCallable');

var SLOT = require('internal-slot');
var isObject = require('es-object-atoms/isObject');

// https://262.ecma-international.org/16.0/#sec-generatorstart

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
	if (!isObject(sentinel)) {
		throw new $TypeError('`closure.[[Sentinel]]` must be an object');
	}
	SLOT.set(generator, '[[GeneratorContext]]', function () { // steps 2-5
		try {
			var result = closure();
			if (result === sentinel) {
				SLOT.set(generator, '[[GeneratorState]]', 'COMPLETED');
				SLOT.set(generator, '[[GeneratorContext]]', null);
				return CreateIteratorResultObject(void undefined, true);
			}
			SLOT.set(generator, '[[GeneratorState]]', 'SUSPENDED-YIELD');
			return CreateIteratorResultObject(result, false);
		} catch (e) {
			SLOT.set(generator, '[[GeneratorState]]', 'COMPLETED');
			SLOT.set(generator, '[[GeneratorContext]]', null);
			throw e;
		}
	});

	SLOT.set(generator, '[[GeneratorState]]', 'SUSPENDED-START'); // step 6
};
