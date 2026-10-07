'use strict';

var $TypeError = require('es-errors/type');

var IteratorComplete = require('./IteratorComplete');
var IteratorNext = require('./IteratorNext');

var isIteratorRecord = require('../helpers/records/iterator-record');

// https://262.ecma-international.org/16.0/#sec-iteratorstep

module.exports = function IteratorStep(iteratorRecord) {
	if (!isIteratorRecord(iteratorRecord)) {
		throw new $TypeError('Assertion failed: `iteratorRecord` must be an Iterator Record'); // step 1
	}

	var result = IteratorNext(iteratorRecord); // step 1
	try {
		var done = IteratorComplete(result); // step 2
	} catch (e) { // step 3
		// eslint-disable-next-line no-param-reassign
		iteratorRecord['[[Done]]'] = true; // step 3.a
		throw e; // step 3.b

	}

	if (done) { // step 5
		// eslint-disable-next-line no-param-reassign
		iteratorRecord['[[Done]]'] = true; // step 5.a
		return false; // step 5.b. should be `~done~` but `false` is more convenient here.
	}

	return result; // steps 6
};

