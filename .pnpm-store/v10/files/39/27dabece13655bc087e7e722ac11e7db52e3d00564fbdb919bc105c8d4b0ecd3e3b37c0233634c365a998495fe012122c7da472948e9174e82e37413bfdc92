'use strict';

var $TypeError = require('es-errors/type');

var CreateIteratorResultObject = require('./CreateIteratorResultObject');
var GeneratorValidate = require('./GeneratorValidate');

var SLOT = require('internal-slot');

// https://262.ecma-international.org/16.0/#sec-generatorresume

module.exports = function GeneratorResume(generator, value, generatorBrand) {
	var state = GeneratorValidate(generator, generatorBrand); // step 1
	if (state === 'COMPLETED') {
		return CreateIteratorResultObject(void undefined, true); // step 2
	}

	if (state !== 'SUSPENDED-START' && state !== 'SUSPENDED-YIELD') {
		throw new $TypeError('Assertion failed: generator state is unexpected: ' + state); // step 3
	}

	var genContext = SLOT.get(generator, '[[GeneratorContext]]');

	SLOT.set(generator, '[[GeneratorState]]', 'EXECUTING'); // step 7

	var result = genContext(value); // steps 5-6, 8-10

	return result;
};
