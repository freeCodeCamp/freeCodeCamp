'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var Call = require('./Call');

var isIteratorRecord = require('../helpers/records/iterator-record-2023');

// https://262.ecma-international.org/14.0/#sec-iteratornext

module.exports = function IteratorNext(iteratorRecord) {
	if (!isIteratorRecord(iteratorRecord)) {
		throw new $TypeError('Assertion failed: `iteratorRecord` must be an Iterator Record'); // step 1
	}

	var result;
	if (arguments.length < 2) { // step 1
		result = Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]']); // step 1.a
	} else { // step 2
		result = Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]'], [arguments[1]]); // step 2.a
	}

	if (!isObject(result)) {
		throw new $TypeError('iterator next must return an object'); // step 3
	}
	return result; // step 4
};
