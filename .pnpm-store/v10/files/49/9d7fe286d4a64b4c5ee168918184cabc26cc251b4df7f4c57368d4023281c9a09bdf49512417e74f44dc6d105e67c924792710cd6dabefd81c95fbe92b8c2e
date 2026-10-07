'use strict';

var $TypeError = require('es-errors/type');

var IteratorStep = require('./IteratorStep');
var IteratorValue = require('./IteratorValue');

var isIteratorRecord = require('../helpers/records/iterator-record-2023');

// https://262.ecma-international.org/14.0/#sec-iteratortolist

module.exports = function IteratorToList(iteratorRecord) {
	if (!isIteratorRecord(iteratorRecord)) {
		throw new $TypeError('Assertion failed: `iteratorRecord` must be an Iterator Record'); // step 1
	}

	var values = []; // step 1
	var next = true; // step 2
	while (next) { // step 3
		next = IteratorStep(iteratorRecord); // step 3.a
		if (next) {
			var nextValue = IteratorValue(next); // step 3.b.i
			values[values.length] = nextValue; // step 3.b.ii
		}
	}
	return values; // step 4
};
