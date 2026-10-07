'use strict';

var $TypeError = require('es-errors/type');

var CompletionRecord = require('./CompletionRecord');
var IteratorClose = require('./IteratorClose');

// https://262.ecma-international.org/16.0/#sec-ifabruptcloseiterator

module.exports = function IfAbruptCloseIterator(value, iteratorRecord) {
	if (!(value instanceof CompletionRecord)) {
		throw new $TypeError('Assertion failed: `value` must be a Completion Record'); // step 1
	}
	if (value.type() !== 'normal') {
		return IteratorClose(iteratorRecord, value); // step 2
	}

	return value['!'](); // step 3
};
