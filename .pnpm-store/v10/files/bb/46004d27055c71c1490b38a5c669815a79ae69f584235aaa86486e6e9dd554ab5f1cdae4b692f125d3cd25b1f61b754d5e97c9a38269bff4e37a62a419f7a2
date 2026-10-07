'use strict';

var $TypeError = require('es-errors/type');

var GeneratorStart = require('./GeneratorStart');
var IsArray = require('./IsArray');
var IsCallable = require('./IsCallable');
var OrdinaryObjectCreate = require('./OrdinaryObjectCreate');

var every = require('../helpers/every');

var SLOT = require('internal-slot');
var safeConcat = require('safe-array-concat');
var isObject = require('es-object-atoms/isObject');

var isString = function isString(slot) {
	return typeof slot === 'string';
};

// https://262.ecma-international.org/16.0/#sec-createiteratorfromclosure

module.exports = function CreateIteratorFromClosure(closure, generatorBrand, generatorPrototype) {
	if (!IsCallable(closure)) {
		throw new $TypeError('`closure` must be a function');
	}
	if (typeof generatorBrand !== 'string') {
		throw new $TypeError('`generatorBrand` must be a string');
	}
	if (!isObject(generatorPrototype)) {
		throw new $TypeError('`generatorPrototype` must be an object');
	}
	var extraSlots = arguments.length > 3 ? arguments[3] : []; // step 2
	if (arguments.length > 3) {
		if (!IsArray(extraSlots) || !every(extraSlots, isString)) {
			throw new $TypeError('`extraSlots` must be a List of String internal slot names');
		}
	}
	var internalSlotsList = safeConcat(extraSlots, ['[[GeneratorContext]]', '[[GeneratorBrand]]', '[[GeneratorState]]']); // step 3
	var generator = OrdinaryObjectCreate(generatorPrototype, internalSlotsList); // steps 4, 6
	SLOT.set(generator, '[[GeneratorBrand]]', generatorBrand); // step 5
	SLOT.set(generator, '[[GeneratorState]]', 'SUSPENDED-START'); // step 6

	SLOT.assert(closure, '[[Sentinel]]'); // our userland slot
	SLOT.set(generator, '[[Sentinel]]', SLOT.get(closure, '[[Sentinel]]')); // our userland slot
	SLOT.assert(closure, '[[CloseIfAbrupt]]'); // our second userland slot
	SLOT.set(generator, '[[CloseIfAbrupt]]', SLOT.get(closure, '[[CloseIfAbrupt]]')); // our second userland slot

	GeneratorStart(generator, closure); // step 14

	return generator; // step 16
};
