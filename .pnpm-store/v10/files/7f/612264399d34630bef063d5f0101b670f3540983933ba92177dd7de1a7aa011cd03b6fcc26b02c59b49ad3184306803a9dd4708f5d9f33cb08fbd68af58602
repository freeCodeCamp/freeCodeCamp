'use strict';

var $TypeError = require('es-errors/type');

var hasOwn = require('hasown');

var IsDataDescriptor = require('./IsDataDescriptor');
var IsGenericDescriptor = require('./IsGenericDescriptor');

var isPropertyDescriptor = require('../helpers/records/property-descriptor');

// https://262.ecma-international.org/6.0/#sec-completepropertydescriptor

module.exports = function CompletePropertyDescriptor(Desc) {
	if (!isPropertyDescriptor(Desc)) {
		throw new $TypeError('Assertion failed: `Desc` must be a Property Descriptor');
	}

	/* eslint no-param-reassign: 0 */

	if (IsGenericDescriptor(Desc) || IsDataDescriptor(Desc)) {
		if (!hasOwn(Desc, '[[Value]]')) {
			Desc['[[Value]]'] = void 0;
		}
		if (!hasOwn(Desc, '[[Writable]]')) {
			Desc['[[Writable]]'] = false;
		}
	} else {
		if (!hasOwn(Desc, '[[Get]]')) {
			Desc['[[Get]]'] = void 0;
		}
		if (!hasOwn(Desc, '[[Set]]')) {
			Desc['[[Set]]'] = void 0;
		}
	}
	if (!hasOwn(Desc, '[[Enumerable]]')) {
		Desc['[[Enumerable]]'] = false;
	}
	if (!hasOwn(Desc, '[[Configurable]]')) {
		Desc['[[Configurable]]'] = false;
	}
	return Desc;
};
