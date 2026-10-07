'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var Call = require('./Call');
var Get = require('./Get');
var IsCallable = require('./IsCallable');

// https://262.ecma-international.org/15.0/#sec-getiteratorfrommethod

module.exports = function GetIteratorFromMethod(obj, method) {
	if (!IsCallable(method)) {
		throw new $TypeError('method must be a function');
	}

	var iterator = Call(method, obj); // step 1
	if (!isObject(iterator)) {
		throw new $TypeError('iterator must return an object'); // step 2
	}

	var nextMethod = Get(iterator, 'next'); // step 3
	return { // steps 4-5
		'[[Iterator]]': iterator,
		'[[NextMethod]]': nextMethod,
		'[[Done]]': false
	};
};
