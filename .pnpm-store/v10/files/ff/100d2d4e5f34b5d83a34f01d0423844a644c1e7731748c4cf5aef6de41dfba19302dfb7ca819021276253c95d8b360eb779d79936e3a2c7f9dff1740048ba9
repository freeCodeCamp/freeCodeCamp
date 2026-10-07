'use strict';

var GetIntrinsic = require('get-intrinsic');

var $Function = GetIntrinsic('%Function%');
var $TypeError = require('es-errors/type');
var $SyntaxError = require('es-errors/syntax');

var Get = require('./Get');
var IsConstructor = require('./IsConstructor');

var isObject = require('es-object-atoms/isObject');

// https://262.ecma-international.org/6.0/#sec-getprototypefromconstructor

module.exports = function GetPrototypeFromConstructor(constructor, intrinsicDefaultProto) {
	var intrinsic = GetIntrinsic(intrinsicDefaultProto); // throws if not a valid intrinsic
	if (!isObject(intrinsic)) {
		throw new $TypeError('intrinsicDefaultProto must be an object');
	}
	if (!IsConstructor(constructor)) {
		throw new $TypeError('Assertion failed: `constructor` must be a constructor');
	}
	var proto = Get(constructor, 'prototype');
	if (!isObject(proto)) {
		if (!(constructor instanceof $Function)) {
			// ignore other realms, for now
			throw new $SyntaxError('cross-realm constructors not currently supported');
		}
		proto = intrinsic;
	}
	return proto;
};
