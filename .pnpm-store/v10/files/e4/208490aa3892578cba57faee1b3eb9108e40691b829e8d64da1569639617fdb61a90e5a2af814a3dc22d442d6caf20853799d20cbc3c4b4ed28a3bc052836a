'use strict';

var GetIntrinsic = require('get-intrinsic');

var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');
var $Promise = GetIntrinsic('%Promise%', true);

var callBound = require('call-bound');

var CreateIteratorResultObject = require('./CreateIteratorResultObject');
var IteratorComplete = require('./IteratorComplete');
var IteratorValue = require('./IteratorValue');
var PromiseResolve = require('./PromiseResolve');

var $then = callBound('Promise.prototype.then', true);

// https://262.ecma-international.org/16.0/#sec-asyncfromsynciteratorcontinuation

module.exports = function AsyncFromSyncIteratorContinuation(result) {
	if (!isObject(result)) {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (arguments.length > 1) {
		throw new $SyntaxError('although AsyncFromSyncIteratorContinuation should take a second argument, it is not used in this implementation');
	}

	if (!$Promise) {
		throw new $SyntaxError('This environment does not support Promises.');
	}

	return new $Promise(function (resolve) {
		var done = IteratorComplete(result); // step 2
		var value = IteratorValue(result); // step 4
		var valueWrapper = PromiseResolve($Promise, value); // step 6

		// eslint-disable-next-line no-shadow
		var onFulfilled = function (value) { // steps 8-9
			return CreateIteratorResultObject(value, done); // step 8.a
		};
		resolve($then(valueWrapper, onFulfilled)); // step 11
	}); // step 12
};
