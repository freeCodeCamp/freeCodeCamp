'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var Invoke = require('./Invoke');

// https://262.ecma-international.org/6.0/#sec-iteratornext

module.exports = function IteratorNext(iterator, value) {
	var result = Invoke(iterator, 'next', arguments.length < 2 ? [] : [value]);
	if (!isObject(result)) {
		throw new $TypeError('iterator next must return an object');
	}
	return result;
};
