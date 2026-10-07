'use strict';

var $TypeError = require('es-errors/type');

var ArrayCreate = require('./ArrayCreate');
var CreateDataPropertyOrThrow = require('./CreateDataPropertyOrThrow');
var GetMatchIndexPair = require('./GetMatchIndexPair');
var IsArray = require('./IsArray');
var OrdinaryObjectCreate = require('./OrdinaryObjectCreate');
var ToString = require('./ToString');

var every = require('../helpers/every');
var isMatchRecord = require('../helpers/records/match-record');

var isStringOrUndefined = function isStringOrUndefined(s) {
	return typeof s === 'undefined' || typeof s === 'string';
};

var isMatchRecordOrUndefined = function isMatchRecordOrUndefined(m) {
	return typeof m === 'undefined' || isMatchRecord(m);
};

var MAX_ARRAY_LENGTH = require('math-intrinsics/constants/maxArrayLength');

// https://262.ecma-international.org/13.0/#sec-getmatchindexpair

module.exports = function MakeMatchIndicesIndexPairArray(S, indices, groupNames, hasGroups) {
	if (typeof S !== 'string') {
		throw new $TypeError('Assertion failed: `S` must be a String');
	}
	if (!IsArray(indices) || !every(indices, isMatchRecordOrUndefined)) {
		throw new $TypeError('Assertion failed: `indices` must be a List of either Match Records or `undefined`');
	}
	if (!IsArray(groupNames) || !every(groupNames, isStringOrUndefined)) {
		throw new $TypeError('Assertion failed: `groupNames` must be a List of either Strings or `undefined`');
	}
	if (typeof hasGroups !== 'boolean') {
		throw new $TypeError('Assertion failed: `hasGroups` must be a Boolean');
	}

	var n = indices.length; // step 1
	if (!(n < MAX_ARRAY_LENGTH)) {
		throw new $TypeError('Assertion failed: `indices` length must be less than the max array size, 2**32 - 1');
	}
	if (groupNames.length !== n - 1) {
		throw new $TypeError('Assertion failed: `groupNames` must have exactly one fewer item than `indices`');
	}

	var A = ArrayCreate(n); // step 5
	var groups = hasGroups ? OrdinaryObjectCreate(null) : void undefined; // step 6-7
	CreateDataPropertyOrThrow(A, 'groups', groups); // step 8

	for (var i = 0; i < n; i += 1) { // step 9
		var matchIndices = indices[i]; // step 9.a
		// eslint-disable-next-line no-negated-condition
		var matchIndexPair = typeof matchIndices !== 'undefined' ? GetMatchIndexPair(S, matchIndices) : void undefined; // step 9.b-9.c
		CreateDataPropertyOrThrow(A, ToString(i), matchIndexPair); // step 9.d
		if (i > 0 && typeof groupNames[i - 1] !== 'undefined') { // step 9.e
			if (!groups) {
				throw new $TypeError('if `hasGroups` is `false`, `groupNames` can only contain `undefined` values');
			}
			CreateDataPropertyOrThrow(groups, groupNames[i - 1], matchIndexPair); // step 9.e.i
		}
	}
	return A; // step 10
};
