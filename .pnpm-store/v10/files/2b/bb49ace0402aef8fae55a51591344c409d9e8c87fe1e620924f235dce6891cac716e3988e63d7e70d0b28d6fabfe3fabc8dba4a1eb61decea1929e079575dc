'use strict';

var $TypeError = require('es-errors/type');

var CompletionRecord = require('es-abstract/2024/CompletionRecord');
var CreateIterResultObject = require('es-abstract/2024/CreateIterResultObject');
var GeneratorValidate = require('./GeneratorValidate');
var NormalCompletion = require('es-abstract/2024/NormalCompletion');

var SLOT = require('internal-slot');

module.exports = function GeneratorResumeAbrupt(generator, abruptCompletion, generatorBrand) {
	if (!(abruptCompletion instanceof CompletionRecord)) {
		throw new $TypeError('Assertion failed: abruptCompletion must be a Completion Record');
	}

	var state = GeneratorValidate(generator, generatorBrand); // step 1

	if (state === 'suspendedStart') { // step 2
		SLOT.set(generator, '[[GeneratorState]]', 'completed'); // step 3.a
		SLOT.set(generator, '[[GeneratorContext]]', null); // step 3.b
		state = 'completed'; // step 3.c
	}

	var value = abruptCompletion.value();

	if (state === 'completed') { // step 3
		return CreateIterResultObject(value, true); // steps 3.a-b
	}

	if (state !== 'suspendedYield') {
		throw new $TypeError('Assertion failed: generator state is unexpected: ' + state); // step 4
	}
	if (abruptCompletion.type() === 'return') {
		// due to representing `GeneratorContext` as a function, we can't safely re-invoke it, so we can't support sending it a return completion
		return CreateIterResultObject(SLOT.get(generator, '[[CloseIfAbrupt]]')(NormalCompletion(abruptCompletion.value())), true);
	}

	var genContext = SLOT.get(generator, '[[GeneratorContext]]'); // step 5

	SLOT.set(generator, '[[GeneratorState]]', 'executing'); // step 8

	var result = genContext(value); // steps 6-7, 8-11

	return result; // step 12
};
