'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var Get = require('./Get');

// https://262.ecma-international.org/16.0/#sec-getiteratordirect

module.exports = function GetIteratorDirect(obj) {
	if (!isObject(obj)) {
		throw new $TypeError('Assertion failed: `obj` must be an Object');
	}

	var nextMethod = Get(obj, 'next'); // step 1

	var iteratorRecord = {
		'[[Iterator]]': obj,
		'[[NextMethod]]': nextMethod,
		'[[Done]]': false
	}; // step 2

	return iteratorRecord; // step 3
};
