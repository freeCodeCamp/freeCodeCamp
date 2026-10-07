'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var CreateDataProperty = require('./CreateDataProperty');

var isPropertyKey = require('../helpers/isPropertyKey');

// // https://262.ecma-international.org/14.0/#sec-createdatapropertyorthrow

module.exports = function CreateDataPropertyOrThrow(O, P, V) {
	if (!isObject(O)) {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!isPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P is not a Property Key');
	}
	var success = CreateDataProperty(O, P, V);
	if (!success) {
		throw new $TypeError('unable to create data property');
	}
};
