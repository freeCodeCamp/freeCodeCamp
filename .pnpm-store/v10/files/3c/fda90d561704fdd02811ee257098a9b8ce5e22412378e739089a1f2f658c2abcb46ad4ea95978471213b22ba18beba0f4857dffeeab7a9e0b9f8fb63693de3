'use strict';

var $TypeError = require('es-errors/type');

var Call = require('es-abstract/2024/Call');
var Get = require('es-abstract/2024/Get');
var IsCallable = require('es-abstract/2024/IsCallable');
var LengthOfArrayLike = require('es-abstract/2024/LengthOfArrayLike');
var ToBoolean = require('es-abstract/2024/ToBoolean');
var ToObject = require('es-object-atoms/ToObject');
var ToString = require('es-abstract/2024/ToString');

module.exports = function findLastIndex(predicate) {
	var O = ToObject(this);
	var len = LengthOfArrayLike(O);

	if (!IsCallable(predicate)) {
		throw new $TypeError('predicate must be a function');
	}

	var thisArg;
	if (arguments.length > 1) {
		thisArg = arguments[1];
	}

	var k = len - 1;
	while (k >= 0) {
		var Pk = ToString(k);
		var kValue = Get(O, Pk);
		var testResult = ToBoolean(Call(predicate, thisArg, [kValue, k, O]));
		if (testResult) {
			return k;
		}
		k -= 1;
	}

	return -1;
};
