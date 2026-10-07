'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var Call = require('./Call');

var isIteratorRecord = require('../helpers/records/iterator-record');

// https://262.ecma-international.org/16.0/#sec-iteratornext

module.exports = function IteratorNext(iteratorRecord) {
	if (!isIteratorRecord(iteratorRecord)) {
		throw new $TypeError('Assertion failed: `iteratorRecord` must be an Iterator Record'); // step 1
	}

	var result;
	try {
		if (arguments.length < 2) { // step 1
			result = Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]']); // step 1.a
		} else { // step 2
			result = Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]'], [arguments[1]]); // step 2.a
		}
	} catch (e) { // step 3
		// eslint-disable-next-line no-param-reassign
		iteratorRecord['[[Done]]'] = true; // step 3.a
		throw e; // step 3.b
	}

	if (!isObject(result)) { // step 5
		// eslint-disable-next-line no-param-reassign
		iteratorRecord['[[Done]]'] = true; // step 5.a
		throw new $TypeError('iterator next must return an object'); // step 5.b
	}
	return result; // step 6
};
