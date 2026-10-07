'use strict';

var callBound = require('call-bound');

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');
var $indexOf = callBound('Array.prototype.indexOf', true) || callBound('String.prototype.indexOf');

var Get = require('./Get');
var IsArray = require('./IsArray');
var LengthOfArrayLike = require('./LengthOfArrayLike');
var ToString = require('./ToString');
var Type = require('./Type');

var defaultElementTypes = ['Undefined', 'Null', 'Boolean', 'String', 'Symbol', 'Number', 'BigInt', 'Object'];

// https://262.ecma-international.org/11.0/#sec-createlistfromarraylike

/** @type {(obj: object, elementTypes?: typeof defaultElementTypes) => unknown[]} */
module.exports = function CreateListFromArrayLike(obj) {
	var elementTypes = arguments.length > 1
		? arguments[1]
		: defaultElementTypes;

	if (!isObject(obj)) {
		throw new $TypeError('Assertion failed: `obj` must be an Object');
	}
	if (!IsArray(elementTypes)) {
		throw new $TypeError('Assertion failed: `elementTypes`, if provided, must be an array');
	}
	var len = LengthOfArrayLike(obj);
	/** @type {(typeof elementTypes)[]} */
	var list = [];
	var index = 0;
	while (index < len) {
		var indexName = ToString(index);
		var next = Get(obj, indexName);
		var nextType = Type(next);
		if ($indexOf(elementTypes, nextType) < 0) {
			throw new $TypeError('item type ' + nextType + ' is not a valid elementType');
		}
		list[list.length] = next;
		index += 1;
	}
	return list;
};
