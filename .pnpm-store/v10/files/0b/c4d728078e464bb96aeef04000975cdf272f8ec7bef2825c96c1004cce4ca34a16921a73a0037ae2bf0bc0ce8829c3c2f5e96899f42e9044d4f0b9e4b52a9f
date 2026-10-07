'use strict';

var $TypeError = require('es-errors/type');

var CreateIteratorFromClosure = require('./CreateIteratorFromClosure');
var IteratorCloseAll = require('./IteratorCloseAll');
var IteratorStep = require('es-abstract/2024/IteratorStep');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var NormalCompletion = require('es-abstract/2024/NormalCompletion');
var ThrowCompletion = require('es-abstract/2024/ThrowCompletion');

var isAbstractClosure = require('es-abstract/helpers/isAbstractClosure');
var IsArray = require('es-abstract/helpers/IsArray');
var isIteratorRecord = require('es-abstract/helpers/records/iterator-record');
var every = require('es-abstract/helpers/every');

var callBound = require('call-bound');

var $indexOf = callBound('Array.prototype.indexOf');
var $slice = callBound('Array.prototype.slice');
var $splice = callBound('Array.prototype.splice');

var iterHelperProto = require('../IteratorHelperPrototype');

var SLOT = require('internal-slot');

// https://tc39.es/proposal-joint-iteration/#sec-IteratorZip

module.exports = function IteratorZip(iters, mode, padding, finishResults) {
	if (!IsArray(iters) || !every(iters, isIteratorRecord)) {
		throw new $TypeError('`iters` must be a List of IteratorRecords');
	}

	if (mode !== 'shortest' && mode !== 'longest' && mode !== 'strict') {
		throw new $TypeError('`mode` must be one of "shortest", "longest", or "strict"');
	}

	if (!IsArray(padding)) {
		throw new $TypeError('`padding` must be a List');
	}

	if (!isAbstractClosure(finishResults)) {
		throw new $TypeError('`finishResults` must be an Abstract Closure');
	}

	var iterCount = iters.length; // step 1

	var openIters = $slice(iters); // step 2

	var sentinel = {};
	var closure = function () {
		if (iterCount === 0) {
			// 1. If iterCount = 0, return ReturnCompletion(undefined).
			return sentinel; // step 1
		}
		// while (true) {
		{ // eslint-disable-line no-lone-blocks
			var results = []; // step 3.b.i
			if (openIters.length === 0) {
				throw new $TypeError('Assertion failed: `openIters` is empty'); // step 3.b.ii
			}
			for (var i = 0; i < iterCount; ++i) { // step 3.b.iii
				// for (var i = 0; i < iterCount; i += 1) { // step 3.b.iii
				var result;

				var iter = iters[i];
				if (iter === null) { // step 3.b.iii.1
					if (mode !== 'longest') {
						throw new $TypeError('Assertion failed: `mode` is not "longest"'); // step 3.b.iii.1.a
					}
					result = padding[i]; // step 3.b.iii.1.b
				} else { // step 2
					try {
						result = IteratorStepValue(iter); // step 3.b.iii.2.a, 3.b.iii.2.c
					} catch (e) { // step 3.b.iii.2.b
						$splice(openIters, $indexOf(openIters, iter), 1); // step 3.b.iii.2.b.i
						return IteratorCloseAll(openIters, ThrowCompletion(e)); // step 3.b.iii.2.b.ii
					}
					if (iter['[[Done]]']) { // step 3.b.iii.2.d
						$splice(openIters, $indexOf(openIters, iter), 1); // step 3.b.iii.2.d.i
						if (mode === 'shortest') { // step 3.b.iii.2.d.ii
							IteratorCloseAll(openIters, NormalCompletion(undefined)); // step 3.b.iii.2.d.ii.i
							return sentinel;
						} else if (mode === 'strict') { // step 3.b.iii.2.d.iii
							if (i !== 0) { // step 3.b.iii.2.d.iii.i
								return IteratorCloseAll(
									openIters,
									ThrowCompletion(new $TypeError('Assertion failed: `i` is not 0'))
								); // step 3.b.iii.2.d.iii.i.i
							}
							for (var k = 1; k < iterCount; k += 1) { // step 3.b.iii.2.d.iii.ii
								if (iters[k] === null) {
									throw new $TypeError('Assertion failed: `iters[k]` is `null`'); // step 3.b.iii.2.d.iii.ii.i
								}
								try {
									result = IteratorStep(iters[k]); // step 3.b.iii.2.d.iii.ii.ii, 3.b.iii.2.d.iii.ii.iii.ii.iv
								} catch (e) { // step 3.b.iii.2.d.iii.ii.iii
									return IteratorCloseAll(openIters, ThrowCompletion(e)); // step 3.b.iii.2.d.iii.ii.iii.ii
								}

								// if (open === false) { // step 3.b.iii.2.d.iii.ii.v
								if (iters[k]['[[Done]]']) { // step 3.b.iii.2.d.iii.ii.v
									$splice(openIters, $indexOf(openIters, iters[k]), 1); // step 3.b.iii.2.d.iii.ii.v.i
								} else { // step 3.b.iii.2.d.iii.ii.vi
									return IteratorCloseAll(
										openIters,
										ThrowCompletion(new $TypeError('Assertion failed: `open` is not `false`'))
									); // step 3.b.iii.2.d.iii.ii.vi.i
								}
							}
						} else { // step 3.b.iii.2.d.iv
							if (mode !== 'longest') {
								throw new $TypeError('Assertion failed: `mode` is not "longest"'); // step 3.b.iii.2.d.iv.i
							}

							if (openIters.length === 0) {
								return sentinel; // ReturnCompletion(undefined); // step 3.b.iii.2.d.iv.ii
							}

							// eslint-disable-next-line no-param-reassign
							iters[i] = null; // step 3.b.iii.2.d.iv.iii
							// i += 1;

							result = padding[i]; // step 3.b.iii.2.d.iv.iv
						}
					}
				}

				results[results.length] = result; // step 3.b.iii.3

				//    5. Let completion be Completion(Yield(results)).
				//    6. If completion is an abrupt completion, then
				//   1. Return ? IteratorCloseAll(openIters, completion).
			}
		}

		return finishResults(results); // step 3.b.iv
	};
	SLOT.set(closure, '[[Sentinel]]', sentinel); // for the userland implementation
	SLOT.set(closure, '[[CloseIfAbrupt]]', finishResults); // for the userland implementation

	var gen = CreateIteratorFromClosure(closure, 'Iterator Helper', iterHelperProto, ['[[UnderlyingIterators]]']); // step 4

	SLOT.set(gen, '[[UnderlyingIterators]]', openIters); // step 5

	return gen; // step 6
};
