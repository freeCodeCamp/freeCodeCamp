'use strict';

var GetIterator = require('./GetIterator');
var IteratorStep = require('./IteratorStep');
var IteratorValue = require('./IteratorValue');

// https://262.ecma-international.org/8.0/#sec-iterabletolist

module.exports = function IterableToList(items, method) {
	var iterator = GetIterator(items, method);
	var values = [];
	var next = true;
	while (next) {
		next = IteratorStep(iterator);
		if (next) {
			var nextValue = IteratorValue(next);
			values[values.length] = nextValue;
		}
	}
	return values;
};
