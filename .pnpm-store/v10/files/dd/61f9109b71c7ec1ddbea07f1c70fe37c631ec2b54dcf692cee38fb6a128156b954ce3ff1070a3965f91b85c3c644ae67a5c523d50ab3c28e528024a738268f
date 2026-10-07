'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var DefineOwnProperty = require('../helpers/DefineOwnProperty');
var isFullyPopulatedPropertyDescriptor = require('../helpers/isFullyPopulatedPropertyDescriptor');
var isPropertyDescriptor = require('../helpers/records/property-descriptor');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsGenericDescriptor = require('./IsGenericDescriptor');
var isPropertyKey = require('../helpers/isPropertyKey');
var SameValue = require('./SameValue');

// https://262.ecma-international.org/13.0/#sec-validateandapplypropertydescriptor

// see https://github.com/tc39/ecma262/pull/2468 for ES2022 changes

// eslint-disable-next-line max-lines-per-function, max-statements
module.exports = function ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current) {
	if (typeof O !== 'undefined' && !isObject(O)) {
		throw new $TypeError('Assertion failed: O must be undefined or an Object');
	}
	if (!isPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	if (typeof extensible !== 'boolean') {
		throw new $TypeError('Assertion failed: extensible must be a Boolean');
	}
	if (!isPropertyDescriptor(Desc)) {
		throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
	}
	if (typeof current !== 'undefined' && !isPropertyDescriptor(current)) {
		throw new $TypeError('Assertion failed: current must be a Property Descriptor, or undefined');
	}

	if (typeof current === 'undefined') { // step 2
		if (!extensible) {
			return false; // step 2.a
		}
		if (typeof O === 'undefined') {
			return true; // step 2.b
		}
		if (IsAccessorDescriptor(Desc)) { // step 2.c
			return DefineOwnProperty(
				IsDataDescriptor,
				SameValue,
				FromPropertyDescriptor,
				O,
				P,
				Desc
			);
		}
		// step 2.d
		return DefineOwnProperty(
			IsDataDescriptor,
			SameValue,
			FromPropertyDescriptor,
			O,
			P,
			{
				'[[Configurable]]': !!Desc['[[Configurable]]'],
				'[[Enumerable]]': !!Desc['[[Enumerable]]'],
				'[[Value]]': Desc['[[Value]]'],
				'[[Writable]]': !!Desc['[[Writable]]']
			}
		);
	}

	// 3. Assert: current is a fully populated Property Descriptor.
	if (
		!isFullyPopulatedPropertyDescriptor(
			{
				IsAccessorDescriptor: IsAccessorDescriptor,
				IsDataDescriptor: IsDataDescriptor
			},
			current
		)
	) {
		throw new $TypeError('`current`, when present, must be a fully populated and valid Property Descriptor');
	}

	// 4. If every field in Desc is absent, return true.
	// this can't really match the assertion that it's a Property Descriptor in our JS implementation

	// 5. If current.[[Configurable]] is false, then
	if (!current['[[Configurable]]']) {
		if ('[[Configurable]]' in Desc && Desc['[[Configurable]]']) {
			// step 5.a
			return false;
		}
		if ('[[Enumerable]]' in Desc && !SameValue(Desc['[[Enumerable]]'], current['[[Enumerable]]'])) {
			// step 5.b
			return false;
		}
		if (!IsGenericDescriptor(Desc) && !SameValue(IsAccessorDescriptor(Desc), IsAccessorDescriptor(current))) {
			// step 5.c
			return false;
		}
		if (IsAccessorDescriptor(current)) { // step 5.d
			if ('[[Get]]' in Desc && !SameValue(Desc['[[Get]]'], current['[[Get]]'])) {
				return false;
			}
			if ('[[Set]]' in Desc && !SameValue(Desc['[[Set]]'], current['[[Set]]'])) {
				return false;
			}
		} else if (!current['[[Writable]]']) { // step 5.e
			if ('[[Writable]]' in Desc && Desc['[[Writable]]']) {
				return false;
			}
			if ('[[Value]]' in Desc && !SameValue(Desc['[[Value]]'], current['[[Value]]'])) {
				return false;
			}
		}
	}

	// 6. If O is not undefined, then
	if (typeof O !== 'undefined') {
		var configurable;
		var enumerable;
		if (IsDataDescriptor(current) && IsAccessorDescriptor(Desc)) { // step 6.a
			configurable = ('[[Configurable]]' in Desc ? Desc : current)['[[Configurable]]'];
			enumerable = ('[[Enumerable]]' in Desc ? Desc : current)['[[Enumerable]]'];
			// Replace the property named P of object O with an accessor property having [[Configurable]] and [[Enumerable]] attributes as described by current and each other attribute set to its default value.
			return DefineOwnProperty(
				IsDataDescriptor,
				SameValue,
				FromPropertyDescriptor,
				O,
				P,
				{
					'[[Configurable]]': !!configurable,
					'[[Enumerable]]': !!enumerable,
					'[[Get]]': ('[[Get]]' in Desc ? Desc : current)['[[Get]]'],
					'[[Set]]': ('[[Set]]' in Desc ? Desc : current)['[[Set]]']
				}
			);
		} else if (IsAccessorDescriptor(current) && IsDataDescriptor(Desc)) {
			configurable = ('[[Configurable]]' in Desc ? Desc : current)['[[Configurable]]'];
			enumerable = ('[[Enumerable]]' in Desc ? Desc : current)['[[Enumerable]]'];
			// i. Replace the property named P of object O with a data property having [[Configurable]] and [[Enumerable]] attributes as described by current and each other attribute set to its default value.
			return DefineOwnProperty(
				IsDataDescriptor,
				SameValue,
				FromPropertyDescriptor,
				O,
				P,
				{
					'[[Configurable]]': !!configurable,
					'[[Enumerable]]': !!enumerable,
					'[[Value]]': ('[[Value]]' in Desc ? Desc : current)['[[Value]]'],
					'[[Writable]]': !!('[[Writable]]' in Desc ? Desc : current)['[[Writable]]']
				}
			);
		}

		// For each field of Desc that is present, set the corresponding attribute of the property named P of object O to the value of the field.
		return DefineOwnProperty(
			IsDataDescriptor,
			SameValue,
			FromPropertyDescriptor,
			O,
			P,
			Desc
		);
	}

	return true; // step 7
};
