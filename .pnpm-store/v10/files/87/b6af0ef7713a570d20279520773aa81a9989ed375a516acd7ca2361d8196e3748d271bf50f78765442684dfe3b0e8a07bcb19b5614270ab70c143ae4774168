'use strict';

var $TypeError = require('es-errors/type');

var CompletionRecord = require('./CompletionRecord');
var CreateIteratorResultObject = require('./CreateIteratorResultObject');
var GeneratorValidate = require('./GeneratorValidate');
var NormalCompletion = require('./NormalCompletion');

var SLOT = require('internal-slot');

// https://262.ecma-international.org/16.0/#sec-generatorresumeabrupt

module.exports = function GeneratorResumeAbrupt(generator, abruptCompletion, generatorBrand) {
	if (
		!(abruptCompletion instanceof CompletionRecord)
		|| (abruptCompletion.type() !== 'return' && abruptCompletion.type() !== 'throw')
	) {
		throw new $TypeError('Assertion failed: abruptCompletion must be a `return` or `throw` Completion Record');
	}

	var state = GeneratorValidate(generator, generatorBrand); // step 1

	if (state === 'SUSPENDED-START') { // step 2
		SLOT.set(generator, '[[GeneratorState]]', 'COMPLETED'); // step 2.a
		SLOT.set(generator, '[[GeneratorContext]]', null); // step 2.b
		state = 'COMPLETED'; // step 2.c
	}

	var value = abruptCompletion.value();

	if (state === 'COMPLETED') { // step 3
		if (abruptCompletion.type() === 'return') { // step 3.a
			return CreateIteratorResultObject(value, true); // step 3.a.i
		}
		return abruptCompletion['?'](); // step 3.b
	}

	if (state !== 'SUSPENDED-YIELD') {
		throw new $TypeError('Assertion failed: generator state is unexpected: ' + state); // step 4
	}

	var genContext = SLOT.get(generator, '[[GeneratorContext]]'); // step 5

	SLOT.set(generator, '[[GeneratorState]]', 'EXECUTING'); // step 8

	if (abruptCompletion.type() === 'return') {
		// due to representing `GeneratorContext` as a function, we can't safely re-invoke it, so we can't support sending it a return completion
		return CreateIteratorResultObject(SLOT.get(generator, '[[CloseIfAbrupt]]')(NormalCompletion(value)), true);
	}

	var result = genContext(value); // steps 6-7, 9-11

	return result; // step 12
};
