'use strict';

var whichBoxedPrimitive = require('which-boxed-primitive');
var whichCollection = require('which-collection');
var whichTypedArray = require('which-typed-array');
var isArray = require('isarray');
var isDate = require('is-date-object');
var isRegex = require('is-regex');
var isWeakRef = require('is-weakref');
var isFinalizationRegistry = require('is-finalizationregistry');
var name = require('function.prototype.name');
var isGeneratorFunction = require('is-generator-function');
var isAsyncFunction = require('is-async-function');
var callBound = require('call-bound');
var hasToStringTag = require('has-tostringtag/shams')();
var toStringTag = hasToStringTag && Symbol.toStringTag;

var $Object = Object;

/** @type {undefined | ((value: ThisParameterType<typeof Promise.prototype.then>, ...args: Parameters<typeof Promise.prototype.then>) => ReturnType<typeof Promise.prototype.then>)} */
var promiseThen = callBound('Promise.prototype.then', true);
/** @type {<T = unknown>(value: unknown) => value is Promise<T>} */
var isPromise = function isPromise(value) {
	if (!value || typeof value !== 'object' || !promiseThen) {
		return false;
	}
	try {
		promiseThen(value, null, function () {});
		return true;
	} catch (e) {}
	return false;
};

/** @type {(builtinName: unknown) => boolean} */
var isKnownBuiltin = function isKnownBuiltin(builtinName) {
	return !!builtinName
		// primitives
		&& builtinName !== 'BigInt'
		&& builtinName !== 'Boolean'
		&& builtinName !== 'Null'
		&& builtinName !== 'Number'
		&& builtinName !== 'String'
		&& builtinName !== 'Symbol'
		&& builtinName !== 'Undefined'
		// namespaces
		&& builtinName !== 'Math'
		&& builtinName !== 'JSON'
		&& builtinName !== 'Reflect'
		&& builtinName !== 'Atomics'
		// collections
		&& builtinName !== 'Map'
		&& builtinName !== 'Set'
		&& builtinName !== 'WeakMap'
		&& builtinName !== 'WeakSet'
		// typed arrays
		&& builtinName !== 'BigInt64Array'
		&& builtinName !== 'BigUint64Array'
		&& builtinName !== 'Float32Array'
		&& builtinName !== 'Float64Array'
		&& builtinName !== 'Int16Array'
		&& builtinName !== 'Int32Array'
		&& builtinName !== 'Int8Array'
		&& builtinName !== 'Uint16Array'
		&& builtinName !== 'Uint32Array'
		&& builtinName !== 'Uint8Array'
		&& builtinName !== 'Uint8ClampedArray'
		// checked explicitly
		&& builtinName !== 'Array'
		&& builtinName !== 'Date'
		&& builtinName !== 'FinalizationRegistry'
		&& builtinName !== 'Promise'
		&& builtinName !== 'RegExp'
		&& builtinName !== 'WeakRef'
		// functions
		&& builtinName !== 'Function'
		&& builtinName !== 'GeneratorFunction'
		&& builtinName !== 'AsyncFunction';
};

/** @type {import('.')} */
module.exports = function whichBuiltinType(value) {
	if (value == null) {
		return value;
	}
	// covers: primitives, {,Weak}Map/Set, typed arrays
	var which = whichBoxedPrimitive($Object(value)) || whichCollection(value) || whichTypedArray(value);
	if (which) {
		return which;
	}
	if (isArray(value)) {
		return 'Array';
	}
	if (isDate(value)) {
		return 'Date';
	}
	if (isRegex(value)) {
		return 'RegExp';
	}
	if (isWeakRef(value)) {
		return 'WeakRef';
	}
	if (isFinalizationRegistry(value)) {
		return 'FinalizationRegistry';
	}
	if (typeof value === 'function') {
		if (isGeneratorFunction(value)) {
			return 'GeneratorFunction';
		}
		if (isAsyncFunction(value)) {
			return 'AsyncFunction';
		}
		return 'Function';
	}
	if (isPromise(value)) {
		return 'Promise';
	}
	// @ts-expect-error TS can't figure out that `value` is an `object` after the `which` check above
	if (toStringTag && toStringTag in value) {
		var tag = value[toStringTag];
		if (isKnownBuiltin(tag)) {
			return tag;
		}
	}
	if (typeof value.constructor === 'function') {
		// eslint-disable-next-line no-extra-parens
		var constructorName = name(/** @type {Parameters<name>[0]} */ (value.constructor));
		if (isKnownBuiltin(constructorName)) {
			return constructorName;
		}
	}
	return 'Object';
};
