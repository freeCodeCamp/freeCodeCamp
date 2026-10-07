'use strict';

var SLOT = require('internal-slot');

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var ClearKeptObjects = require('./ClearKeptObjects');

// https://262.ecma-international.org/12.0/#sec-addtokeptobjects

module.exports = function AddToKeptObjects(object) {
	if (!isObject(object)) {
		throw new $TypeError('Assertion failed: `object` must be an Object');
	}
	var arr = SLOT.get(ClearKeptObjects, '[[es-abstract internal: KeptAlive]]');
	arr[arr.length] = object;
};
