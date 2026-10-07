'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');
var inspect = require('object-inspect');

var Call = require('./Call');
var Get = require('./Get');
var GetIterator = require('./GetIterator');
var IsCallable = require('./IsCallable');
var IteratorClose = require('./IteratorClose');
var IteratorStep = require('./IteratorStep');
var IteratorValue = require('./IteratorValue');
var ThrowCompletion = require('./ThrowCompletion');

// https://262.ecma-international.org/10.0/#sec-add-entries-from-iterable

module.exports = function AddEntriesFromIterable(target, iterable, adder) {
	if (!IsCallable(adder)) {
		throw new $TypeError('Assertion failed: `adder` is not callable');
	}
	if (iterable == null) {
		throw new $TypeError('Assertion failed: `iterable` is present, and not nullish');
	}
	var iteratorRecord = GetIterator(iterable);
	while (true) {
		var next = IteratorStep(iteratorRecord);
		if (!next) {
			return target;
		}
		var nextItem = IteratorValue(next);
		if (!isObject(nextItem)) {
			var error = ThrowCompletion(new $TypeError('iterator next must return an Object, got ' + inspect(nextItem)));
			return IteratorClose(iteratorRecord, error);
		}
		try {
			var k = Get(nextItem, '0');
			var v = Get(nextItem, '1');
			Call(adder, target, [k, v]);
		} catch (e) {
			return IteratorClose(iteratorRecord, ThrowCompletion(e));
		}
	}
};
