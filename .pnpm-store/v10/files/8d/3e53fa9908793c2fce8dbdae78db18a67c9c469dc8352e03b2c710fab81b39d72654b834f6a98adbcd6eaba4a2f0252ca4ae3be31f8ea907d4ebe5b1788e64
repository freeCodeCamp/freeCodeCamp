'use strict';

var $TypeError = require('es-errors/type');

var Get = require('./Get');
var IteratorComplete = require('./IteratorComplete');
var IteratorNext = require('./IteratorNext');

var isIteratorRecord = require('../helpers/records/iterator-record');

// https://262.ecma-international.org/15.0/#sec-iteratorstepvalue

module.exports = function IteratorStepValue(iteratorRecord) {
	if (!isIteratorRecord(iteratorRecord)) {
		throw new $TypeError('Assertion failed: `iteratorRecord` must be an Iterator Record');
	}
	/* eslint no-param-reassign: 0 */

	var result;
	try {
		result = IteratorNext(iteratorRecord); // step 1
	} catch (e) { // step 2
		iteratorRecord['[[Done]]'] = true; // step 2.a
		throw e; // step 2.b
	}

	var done;
	try {
		done = IteratorComplete(result); // step 4
	} catch (e) { // step 5
		iteratorRecord['[[Done]]'] = true; // step 5.a
		throw e; // step 5.b
	}

	if (done) { // step 7
		iteratorRecord['[[Done]]'] = true; // step 7.a
		return 'DONE'; // step 7.b
	}

	var value;
	try {
		value = Get(result, 'value'); // step 8
	} catch (e) { // step 9
		iteratorRecord['[[Done]]'] = true; // step 9.a
		throw e; // step 10
	}

	return value; // step 10
};
