'use strict';

var GetIntrinsic = require('get-intrinsic');

var $Object = require('es-object-atoms');
var $StringPrototype = GetIntrinsic('%String.prototype%');
var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');
var setProto = require('set-proto');

var DefinePropertyOrThrow = require('./DefinePropertyOrThrow');

// https://262.ecma-international.org/6.0/#sec-stringcreate

module.exports = function StringCreate(value, prototype) {
	if (typeof value !== 'string') {
		throw new $TypeError('Assertion failed: `S` must be a String');
	}

	var S = $Object(value);
	if (prototype !== $StringPrototype) {
		if (setProto) {
			setProto(S, prototype);
		} else {
			throw new $SyntaxError('StringCreate: a `proto` argument that is not `String.prototype` is not supported in an environment that does not support setting the [[Prototype]]');
		}
	}

	var length = value.length;
	DefinePropertyOrThrow(S, 'length', {
		'[[Configurable]]': false,
		'[[Enumerable]]': false,
		'[[Value]]': length,
		'[[Writable]]': false
	});

	return S;
};
