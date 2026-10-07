'use strict';

var getIteratorMethod = require('../helpers/getIteratorMethod');
var AdvanceStringIndex = require('./AdvanceStringIndex');
var GetIterator = require('./GetIterator');
var GetMethod = require('./GetMethod');
var IteratorStep = require('./IteratorStep');
var IteratorValue = require('./IteratorValue');
var ToObject = require('./ToObject');
var ES = {
	AdvanceStringIndex: AdvanceStringIndex,
	GetMethod: GetMethod
};

// https://262.ecma-international.org/7.0/#sec-iterabletoarraylike

module.exports = function IterableToArrayLike(items) {
	var usingIterator = getIteratorMethod(ES, items);
	if (typeof usingIterator !== 'undefined') {
		var iterator = GetIterator(items, usingIterator);
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
	}

	return ToObject(items);
};
