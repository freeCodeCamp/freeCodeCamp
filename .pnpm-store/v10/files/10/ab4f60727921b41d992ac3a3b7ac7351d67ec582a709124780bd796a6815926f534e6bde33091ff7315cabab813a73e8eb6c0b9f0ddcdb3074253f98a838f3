'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var Get = require('./Get');
var ToBoolean = require('./ToBoolean');

// https://262.ecma-international.org/6.0/#sec-iteratorcomplete

module.exports = function IteratorComplete(iterResult) {
	if (!isObject(iterResult)) {
		throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
	}
	return ToBoolean(Get(iterResult, 'done'));
};
