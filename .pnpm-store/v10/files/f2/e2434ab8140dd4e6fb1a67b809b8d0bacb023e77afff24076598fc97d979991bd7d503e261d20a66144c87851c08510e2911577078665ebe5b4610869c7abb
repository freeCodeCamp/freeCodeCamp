'use strict';

var $TypeError = require('es-errors/type');

var IteratorStep = require('./IteratorStep');
var IteratorValue = require('./IteratorValue');

var isIteratorRecord = require('../helpers/records/iterator-record');

// https://262.ecma-international.org/16.0/#sec-iteratorstepvalue

module.exports = function IteratorStepValue(iteratorRecord) {
	if (!isIteratorRecord(iteratorRecord)) {
		throw new $TypeError('Assertion failed: `iteratorRecord` must be an Iterator Record');
	}

	var result = IteratorStep(iteratorRecord); // step 1
	if (!result || result === 'DONE') { // step 2
		return result; // step 2.a
	}

	var value;
	try {
		value = IteratorValue(result); // step 3
	} catch (e) { // step 4
		// eslint-disable-next-line no-param-reassign
		iteratorRecord['[[Done]]'] = true; // step 4.a
		throw e; // step 5
	}

	return value; // step 5
};
