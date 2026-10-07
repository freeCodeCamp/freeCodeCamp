'use strict';

var $TypeError = require('es-errors/type');

// https://262.ecma-international.org/16.0/#sec-createiterresultobject

module.exports = function CreateIteratorResultObject(value, done) {
	if (typeof done !== 'boolean') {
		throw new $TypeError('Assertion failed: Type(done) is not Boolean');
	}
	return {
		value: value,
		done: done
	};
};
