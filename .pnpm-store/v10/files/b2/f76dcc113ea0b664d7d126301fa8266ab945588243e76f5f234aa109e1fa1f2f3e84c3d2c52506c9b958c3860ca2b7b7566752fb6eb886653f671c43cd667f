'use strict';

var $TypeError = require('es-errors/type');

var Get = require('es-abstract/2024/Get');
var Type = require('es-abstract/2024/Type');

module.exports = function GetIteratorDirect(obj) {
	if (Type(obj) !== 'Object') {
		throw new $TypeError('Assertion failed: `obj` must be an Object');
	}

	var nextMethod = Get(obj, 'next'); // step 2

	var iteratorRecord = { '[[Iterator]]': obj, '[[NextMethod]]': nextMethod, '[[Done]]': false }; // step 3

	return iteratorRecord; // step 4
};
