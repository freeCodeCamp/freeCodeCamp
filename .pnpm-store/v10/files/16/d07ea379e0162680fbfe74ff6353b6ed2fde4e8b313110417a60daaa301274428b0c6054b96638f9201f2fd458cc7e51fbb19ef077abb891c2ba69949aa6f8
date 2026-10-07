'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var Get = require('./Get');
var LengthOfArrayLike = require('./LengthOfArrayLike');
var ToString = require('./ToString');

var isPropertyKey = require('../helpers/isPropertyKey');

// https://262.ecma-international.org/16.0/#sec-createlistfromarraylike

module.exports = function CreateListFromArrayLike(obj) {
	var validElementTypes = arguments.length > 1
		? arguments[1]
		: 'ALL'; // step 1

	if (validElementTypes !== 'ALL' && validElementTypes !== 'PROPERTY-KEY') {
		throw new $TypeError('Assertion failed: `validElementType` must be ~ALL~ or ~PROPERTY-KEY~');
	}

	if (!isObject(obj)) {
		throw new $TypeError('Assertion failed: `obj` must be an Object'); // step 2
	}

	var len = LengthOfArrayLike(obj); // step 3
	var list = []; // step 4
	var index = 0; // step 5
	while (index < len) { // step 6
		var indexName = ToString(index); // step 6.a
		var next = Get(obj, indexName); // step 6.b
		if (validElementTypes === 'PROPERTY-KEY' && !isPropertyKey(next)) {
			throw new $TypeError('item ' + indexName + ' is not a valid property key'); // step 6.c
		}
		list[list.length] = next; // step 6.d
		index += 1;	 // step 6.e
	}
	return list; // step 7
};
