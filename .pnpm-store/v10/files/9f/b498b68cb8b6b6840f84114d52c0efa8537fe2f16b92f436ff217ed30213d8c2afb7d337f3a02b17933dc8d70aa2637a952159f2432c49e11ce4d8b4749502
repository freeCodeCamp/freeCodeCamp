'use strict';

var GetIterator = require('./GetIterator');
var IteratorStep = require('./IteratorStep');
var IteratorValue = require('./IteratorValue');

// https://262.ecma-international.org/12.0/#sec-iterabletolist

module.exports = function IterableToList(items) {
	var iterator;
	if (arguments.length > 1) {
		iterator = GetIterator(items, 'sync', arguments[1]);
	} else {
		iterator = GetIterator(items, 'sync');
	}
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
