'use strict';

var GetIntrinsic = require('get-intrinsic');

var hasSymbols = require('has-symbols')();

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var $gOPN = GetIntrinsic('%Object.getOwnPropertyNames%', true);
var $gOPS = hasSymbols && GetIntrinsic('%Object.getOwnPropertySymbols%', true);
var keys = require('object-keys');

// https://262.ecma-international.org/6.0/#sec-getownpropertykeys

module.exports = function GetOwnPropertyKeys(O, Type) {
	if (!isObject(O)) {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (Type === 'Symbol') {
		return $gOPS ? $gOPS(O) : [];
	}
	if (Type === 'String') {
		if (!$gOPN) {
			return keys(O);
		}
		return $gOPN(O);
	}
	throw new $TypeError('Assertion failed: `Type` must be `"String"` or `"Symbol"`');
};
