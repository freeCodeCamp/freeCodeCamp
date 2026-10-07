'use strict';

var $TypeError = require('es-errors/type');

var Get = require('es-abstract/2024/Get');
var GetIterator = require('es-abstract/2024/GetIterator');
var GetIteratorFlattenable = require('../aos/GetIteratorFlattenable');
var GetOptionsObject = require('../aos/GetOptionsObject');
var IfAbruptCloseIterators = require('../aos/IfAbruptCloseIterators');
var IteratorClose = require('es-abstract/2024/IteratorClose');
var IteratorStepValue = require('es-abstract/2024/IteratorStepValue');
var IteratorZip = require('../aos/IteratorZip');
var NormalCompletion = require('es-abstract/2024/NormalCompletion');
var ThrowCompletion = require('es-abstract/2024/ThrowCompletion');
var Type = require('es-abstract/2024/Type');

module.exports = function zip(iterables) {
	if (this instanceof zip) {
		throw new $TypeError('`Iterator.zip` is not a constructor');
	}

	if (Type(iterables) !== 'Object') {
		throw new $TypeError('`iterables` must be an Object'); // step 1
	}

	var options = GetOptionsObject(arguments.length > 1 ? arguments[1] : undefined); // step 2

	var mode = Get(options, 'mode'); // step 3

	if (typeof mode === 'undefined') {
		mode = 'shortest'; // step 4
	}

	if (mode !== 'shortest' && mode !== 'longest' && mode !== 'strict') {
		throw new $TypeError('`mode` must be one of "shortest", "longest", or "strict"'); // step 5
	}

	var paddingOption; // step 6

	if (mode === 'longest') {
		paddingOption = Get(options, 'padding'); // step 7
		if (typeof paddingOption !== 'undefined' && Type(paddingOption) !== 'Object') {
			throw new $TypeError('`padding` option must be an Object'); // step 7.1
		}
	}

	var iters = []; // step 8

	var padding = []; // step 9

	var inputIter = GetIterator(iterables, 'SYNC'); // step 10

	var next; // = 'NOT-STARTED'; // step 11

	while (!inputIter['[[Done]]']) { // step 12
		try {
			next = IteratorStepValue(inputIter); // step 12.a
		} catch (e) {
			IfAbruptCloseIterators(ThrowCompletion(e), iters); // step 12.b
		}

		if (!inputIter['[[Done]]']) { // step 12.c
			var iter;
			try {
				iter = GetIteratorFlattenable(next, 'REJECT-STRINGS'); // step 12.c.i
			} catch (e) {
				IfAbruptCloseIterators(ThrowCompletion(e), [].concat(inputIter, iters)); // step 12.c.ii
			}
			iters[iters.length] = iter; // step 12.c.iii
		}
	}

	var iterCount = iters.length; // step 13

	if (mode === 'longest') { // step 14
		if (typeof paddingOption === 'undefined') { // step 14.a
			for (var i = 0; i < iterCount; i++) { // step 14.a.i
				padding[padding.length] = void undefined; // step 14.a.i.1
			}
		} else { // step 14.b
			var paddingIter;
			try {
				paddingIter = GetIterator(paddingOption, 'SYNC'); // step 14.b.i
			} catch (e) {
				IfAbruptCloseIterators(ThrowCompletion(e), iters); // step 14.b.ii
			}
			var usingIterator = true; // step 14.b.iii
			for (var j = 0; j < iterCount; j++) { // step 14.b.iv
				if (usingIterator) { // step 14.b.iv.1
					try {
						next = IteratorStepValue(paddingIter); // step 14.b.iv.1.a
					} catch (e) {
						IfAbruptCloseIterators(ThrowCompletion(e), iters); // step 14.b.iv.1.b
					}
					if (paddingIter['[[Done]]']) { // step 14.b.iv.1.c
						usingIterator = false; // step 14.b.iv.1.c.i
					} else { // step 14.b.iv.1.d
						padding[padding.length] = next; // step 14.b.iv.1.d.i
					}
				}
				if (!usingIterator) {
					padding[padding.length] = void undefined; // step 14.b.iv.2
				}
			}

			if (usingIterator) { // step 14.b.v
				try {
					IteratorClose(paddingIter, NormalCompletion(undefined)); // step 14.b.v.1
				} catch (e) {
					IfAbruptCloseIterators(ThrowCompletion(e), iters); // step 14.b.v.2
				}
			}
		}
	}

	// eslint-disable-next-line no-sequences
	var finishResults = (0, function (results) { // step 15
		return results; // step 15.1
	});

	return IteratorZip(iters, mode, padding, finishResults); // step 16
};
