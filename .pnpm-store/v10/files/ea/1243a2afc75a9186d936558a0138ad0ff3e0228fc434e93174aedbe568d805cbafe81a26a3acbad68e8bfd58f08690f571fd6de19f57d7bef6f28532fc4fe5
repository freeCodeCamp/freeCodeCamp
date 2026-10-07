'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = require('es-errors/type');
var $asyncIterator = GetIntrinsic('%Symbol.asyncIterator%', true);

var inspect = require('object-inspect');
var hasSymbols = require('has-symbols')();

var AdvanceStringIndex = require('./AdvanceStringIndex');
var CreateAsyncFromSyncIterator = require('./CreateAsyncFromSyncIterator');
var GetIteratorFromMethod = require('./GetIteratorFromMethod');
var GetMethod = require('./GetMethod');

var getIteratorMethod = require('../helpers/getIteratorMethod');

var ES = {
	AdvanceStringIndex: AdvanceStringIndex,
	GetMethod: GetMethod
};

// https://262.ecma-international.org/14.0/#sec-getiterator

module.exports = function GetIterator(obj, kind) {
	if (kind !== 'sync' && kind !== 'async') {
		throw new $TypeError("Assertion failed: `kind` must be one of 'sync' or 'async', got " + inspect(kind));
	}

	var method;
	if (kind === 'async') { // step 1
		if (hasSymbols && $asyncIterator) {
			method = GetMethod(obj, $asyncIterator); // step 1.a
		}
	}
	if (typeof method === 'undefined') { // step 1.b
		// var syncMethod = GetMethod(obj, $iterator); // step 1.b.i
		var syncMethod = getIteratorMethod(ES, obj);
		if (kind === 'async') {
			if (typeof syncMethod === 'undefined') {
				throw new $TypeError('iterator method is `undefined`'); // step 1.b.ii
			}
			var syncIteratorRecord = GetIteratorFromMethod(obj, syncMethod); // step 1.b.iii
			return CreateAsyncFromSyncIterator(syncIteratorRecord); // step 1.b.iv
		}
		method = syncMethod; // step 2, kind of
	}

	if (typeof method === 'undefined') {
		throw new $TypeError('iterator method is `undefined`'); // step 3
	}
	return GetIteratorFromMethod(obj, method); // step 4
};
