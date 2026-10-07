'use strict';

var $TypeError = require('es-errors/type');

var SLOT = require('internal-slot');

// https://262.ecma-international.org/16.0/#sec-generatorvalidate

module.exports = function GeneratorValidate(generator, generatorBrand) {
	SLOT.assert(generator, '[[GeneratorState]]'); // step 1
	SLOT.assert(generator, '[[GeneratorBrand]]'); // step 2

	var brand = SLOT.get(generator, '[[GeneratorBrand]]');
	if (brand !== generatorBrand) {
		throw new $TypeError('Assertion failed: generator brand is unexpected: ' + brand);
	}
	SLOT.assert(generator, '[[GeneratorContext]]'); // step 4
	var state = SLOT.get(generator, '[[GeneratorState]]'); // step 5
	if (state === 'EXECUTING') {
		throw new $TypeError('generator is executing');
	}

	return state; // step 7
};
