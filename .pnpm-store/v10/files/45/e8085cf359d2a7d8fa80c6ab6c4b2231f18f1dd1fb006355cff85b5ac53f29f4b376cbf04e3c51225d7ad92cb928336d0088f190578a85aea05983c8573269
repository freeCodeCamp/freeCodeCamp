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

// https://262.ecma-international.org/12.0/#sec-asynciteratorclose

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

	return $then(
		$then(
			$then(
				new $Promise(function (resolve) {
					resolve(GetMethod(iterator, 'return')); // step 4
					// resolve(Call(ret, iterator, [])); // step 6
				}),
				function (returnV) { // step 5.a
					if (typeof returnV === 'undefined') {
						return completion; // step 5.b
					}
					return Call(returnV, iterator); // step 5.c, 5.d.
				}
			),
			null,
			function (e) {
				if (completion.type() === 'throw') {
					completion['?'](); // step 6
				} else {
					throw e; // step 7
				}
			}
		),
		function (innerResult) { // step 8
			if (completion.type() === 'throw') {
				completion['?'](); // step 6
			}
			if (!isObject(innerResult)) {
				throw new $TypeError('`innerResult` must be an Object'); // step 10
			}
			return completion;
		}
	);
};
