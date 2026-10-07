'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var Call = require('./Call');
var CompletionRecord = require('./CompletionRecord');
var GetMethod = require('./GetMethod');
var IsCallable = require('./IsCallable');

// https://262.ecma-international.org/6.0/#sec-iteratorclose

module.exports = function IteratorClose(iterator, completion) {
	if (!isObject(iterator)) {
		throw new $TypeError('Assertion failed: Type(iterator) is not Object');
	}
	if (!IsCallable(completion) && !(completion instanceof CompletionRecord)) {
		throw new $TypeError('Assertion failed: completion is not a thunk representing a Completion Record, nor a Completion Record instance');
	}
	var completionThunk = completion instanceof CompletionRecord ? function () { return completion['?'](); } : completion;

	var iteratorReturn = GetMethod(iterator, 'return');

	if (typeof iteratorReturn === 'undefined') {
		return completionThunk();
	}

	var completionRecord;
	try {
		var innerResult = Call(iteratorReturn, iterator, []);
	} catch (e) {
		// if we hit here, then "e" is the innerResult completion that needs re-throwing

		// if the completion is of type "throw", this will throw.
		completionThunk();
		// eslint-disable-next-line no-useless-assignment
		completionThunk = null; // ensure it's not called twice.

		// if not, then return the innerResult completion
		throw e;
	}
	completionRecord = completionThunk(); // if innerResult worked, then throw if the completion does
	// eslint-disable-next-line no-useless-assignment
	completionThunk = null; // ensure it's not called twice.

	if (!isObject(innerResult)) {
		throw new $TypeError('iterator .return must return an object');
	}

	return completionRecord;
};
