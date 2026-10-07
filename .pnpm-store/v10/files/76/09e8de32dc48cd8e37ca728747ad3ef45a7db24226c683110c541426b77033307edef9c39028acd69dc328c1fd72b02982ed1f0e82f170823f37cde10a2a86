'use strict';

var $TypeError = require('es-errors/type');
var callBound = require('call-bound');
var hasOwn = require('hasown');

var isRegExpRecord = require('../helpers/records/regexp-record');

var $charAt = callBound('String.prototype.charAt');

// https://262.ecma-international.org/16.0/#sec-updatemodifiers

module.exports = function UpdateModifiers(rer, add, remove) {
	if (!isRegExpRecord(rer)) {
		throw new $TypeError('Assertion failed: `rer` must be a RegExp Record');
	}
	if (typeof add !== 'string') {
		throw new $TypeError('Assertion failed: `add` must be a string');
	}
	if (typeof remove !== 'string') {
		throw new $TypeError('Assertion failed: `remove` must be a string');
	}

	// 1. Assert: add and remove have no elements in common.
	var adds = { __proto__: null };
	var removes = { __proto__: null };
	for (var i = 0; i < add.length; i++) {
		var toAdd = $charAt(add, i);
		adds[toAdd] = true;
	}
	for (var j = 0; j < remove.length; j++) {
		var toRemove = $charAt(remove, j);
		if (hasOwn(adds, toRemove)) {
			throw new $TypeError('Assertion failed: `add` and `remove` have elements in common');
		}
		removes[toRemove] = true;
	}

	var ignoreCase = rer['[[IgnoreCase]]']; // step 2

	var multiline = rer['[[Multiline]]']; // step 3

	var dotAll = rer['[[DotAll]]']; // step 4

	var unicode = rer['[[Unicode]]']; // step 5

	var unicodeSets = rer['[[UnicodeSets]]']; // step 6

	var capturingGroupsCount = rer['[[CapturingGroupsCount]]']; // step 7

	if (hasOwn(removes, 'i')) {
		ignoreCase = false; // step 8
	} else if (hasOwn(adds, 'i')) {
		ignoreCase = true; // step 9
	}

	if (hasOwn(removes, 'm')) {
		multiline = false; // step 10
	} else if (hasOwn(adds, 'm')) {
		multiline = true; // step 11
	}

	if (hasOwn(removes, 's')) {
		dotAll = false; // step 12
	} else if (hasOwn(adds, 's')) {
		dotAll = true; // step 13
	}

	return {
		'[[IgnoreCase]]': !!ignoreCase,
		'[[Multiline]]': !!multiline,
		'[[DotAll]]': !!dotAll,
		'[[Unicode]]': !!unicode,
		'[[UnicodeSets]]': !!unicodeSets,
		'[[CapturingGroupsCount]]': capturingGroupsCount
	}; // step 14
};
