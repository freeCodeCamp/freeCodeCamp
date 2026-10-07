'use strict';

var ArrayCreate = require('es-abstract/2024/ArrayCreate');
var CompareArrayElements = require('es-abstract/2024/CompareArrayElements');
var CreateDataPropertyOrThrow = require('es-abstract/2024/CreateDataPropertyOrThrow');
var IsCallable = require('es-abstract/2024/IsCallable');
var LengthOfArrayLike = require('es-abstract/2024/LengthOfArrayLike');
var SortIndexedProperties = require('es-abstract/2024/SortIndexedProperties');
var ToObject = require('es-abstract/2024/ToObject');
var ToString = require('es-abstract/2024/ToString');

var $TypeError = require('es-errors/type');

module.exports = function toSorted(comparefn) {
	if (typeof comparefn !== 'undefined' && !IsCallable(comparefn)) {
		throw new $TypeError('`comparefn` must be a function'); // step 1
	}

	var O = ToObject(this); // step 2
	var len = LengthOfArrayLike(O); // step 3
	var A = ArrayCreate(len); // step 4

	// eslint-disable-next-line no-sequences
	var SortCompare = (0, function (x, y) { // step 5
		return CompareArrayElements(x, y, comparefn); // step 5.a
	});

	var sortedList = SortIndexedProperties(O, len, SortCompare, 'read-through-holes'); // step 6

	var j = 0; // step 7
	while (j < len) { // step 8
		CreateDataPropertyOrThrow(A, ToString(j), sortedList[j]); // step 8.a
		j += 1; // step 8.b
	}

	return A; // step 9
};
