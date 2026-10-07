'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');
var callBound = require('call-bound');
var OwnPropertyKeys = require('own-keys');

var forEach = require('../helpers/forEach');
var every = require('../helpers/every');
var some = require('../helpers/some');

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

var CreateDataPropertyOrThrow = require('./CreateDataPropertyOrThrow');
var Get = require('./Get');
var IsArray = require('./IsArray');
var isPropertyKey = require('../helpers/isPropertyKey');
var SameValue = require('./SameValue');
var ToNumber = require('./ToNumber');
var ToObject = require('./ToObject');

var isInteger = require('math-intrinsics/isInteger');

// https://262.ecma-international.org/12.0/#sec-copydataproperties

module.exports = function CopyDataProperties(target, source, excludedItems) {
	if (!isObject(target)) {
		throw new $TypeError('Assertion failed: "target" must be an Object');
	}

	if (!IsArray(excludedItems) || !every(excludedItems, isPropertyKey)) {
		throw new $TypeError('Assertion failed: "excludedItems" must be a List of Property Keys');
	}

	if (typeof source === 'undefined' || source === null) {
		return target;
	}

	var from = ToObject(source);

	var keys = OwnPropertyKeys(from);
	forEach(keys, function (nextKey) {
		var excluded = some(excludedItems, function (e) {
			return SameValue(e, nextKey) === true;
		});
		/*
		var excluded = false;

		forEach(excludedItems, function (e) {
			if (SameValue(e, nextKey) === true) {
				excluded = true;
			}
		});
		*/

		var enumerable = $isEnumerable(from, nextKey) || (
		// this is to handle string keys being non-enumerable in older engines
			typeof source === 'string'
			&& nextKey >= 0
			&& isInteger(ToNumber(nextKey))
		);
		if (excluded === false && enumerable) {
			var propValue = Get(from, nextKey);
			CreateDataPropertyOrThrow(target, nextKey, propValue);
		}
	});

	return target;
};
