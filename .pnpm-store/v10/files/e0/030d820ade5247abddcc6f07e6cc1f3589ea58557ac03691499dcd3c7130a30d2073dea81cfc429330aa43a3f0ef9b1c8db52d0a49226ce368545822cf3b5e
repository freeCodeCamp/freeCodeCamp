'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var Get = require('./Get');
var IsCallable = require('./IsCallable');

// https://262.ecma-international.org/6.0/#sec-ordinaryhasinstance

module.exports = function OrdinaryHasInstance(C, O) {
	if (!IsCallable(C)) {
		return false;
	}
	if (!isObject(O)) {
		return false;
	}
	var P = Get(C, 'prototype');
	if (!isObject(P)) {
		throw new $TypeError('OrdinaryHasInstance called on an object with an invalid prototype property.');
	}
	return O instanceof C;
};
