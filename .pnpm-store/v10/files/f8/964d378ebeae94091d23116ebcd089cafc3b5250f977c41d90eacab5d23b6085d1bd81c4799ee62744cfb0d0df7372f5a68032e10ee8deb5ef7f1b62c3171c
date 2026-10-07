'use strict';

var GetIntrinsic = require('get-intrinsic');

var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');
var $Promise = GetIntrinsic('%Promise%', true);

var Call = require('./Call');
var CompletionRecord = require('./CompletionRecord');
var GetMethod = require('./GetMethod');

var isIteratorRecord = require('../helpers/records/iterator-record-2023');

var callBound = require('call-bound');

var $then = callBound('Promise.prototype.then', true);

// https://262.ecma-international.org/9.0/#sec-asynciteratorclose

module.exports = function AsyncIteratorClose(iteratorRecord, completion) {
	if (!isIteratorRecord(iteratorRecord)) {
		throw new $TypeError('Assertion failed: `iteratorRecord` must be an Iterator Record'); // step 1
	}

	if (!(completion instanceof CompletionRecord)) {
		throw new $TypeError('Assertion failed: completion is not a Completion Record instance'); // step 2
	}

	if (!$then) {
		throw new $SyntaxError('This environment does not support Promises.');
	}

	var iterator = iteratorRecord['[[Iterator]]']; // step 3

	return new $Promise(function (resolve) {
		var ret = GetMethod(iterator, 'return'); // step 4

		if (typeof ret === 'undefined') {
			resolve(completion); // step 5
		} else {
			resolve($then(
				new $Promise(function (resolve2) {
					// process.exit(42);
					resolve2(Call(ret, iterator, [])); // step 6
				}),
				function (innerResult) {
					if (!isObject(innerResult)) {
						throw new $TypeError('`innerResult` must be an Object'); // step 10
					}
					return completion;
				},
				function (e) {
					if (completion.type() === 'throw') {
						completion['?'](); // step 8
					} else {
						throw e; // step 9
					}
				}
			));
		}
	});
};
