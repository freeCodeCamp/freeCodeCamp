'use strict';

var $TypeError = require('es-errors/type');

var MAX_SAFE_INTEGER = require('math-intrinsics/constants/maxSafeInteger');

var Call = require('./Call');
var CreateDataPropertyOrThrow = require('./CreateDataPropertyOrThrow');
var Get = require('./Get');
var HasProperty = require('./HasProperty');
var IsArray = require('./IsArray');
var LengthOfArrayLike = require('./LengthOfArrayLike');
var ToString = require('./ToString');

// https://262.ecma-international.org/11.0/#sec-flattenintoarray

module.exports = function FlattenIntoArray(target, source, sourceLen, start, depth) {
	var mapperFunction;
	if (arguments.length > 5) {
		mapperFunction = arguments[5];
	}

	var targetIndex = start;
	var sourceIndex = 0;
	while (sourceIndex < sourceLen) {
		var P = ToString(sourceIndex);
		var exists = HasProperty(source, P);
		if (exists === true) {
			var element = Get(source, P);
			if (typeof mapperFunction !== 'undefined') {
				if (arguments.length <= 6) {
					throw new $TypeError('Assertion failed: thisArg is required when mapperFunction is provided');
				}
				element = Call(mapperFunction, arguments[6], [element, sourceIndex, source]);
			}
			var shouldFlatten = false;
			if (depth > 0) {
				shouldFlatten = IsArray(element);
			}
			if (shouldFlatten) {
				var elementLen = LengthOfArrayLike(element);
				targetIndex = FlattenIntoArray(target, element, elementLen, targetIndex, depth - 1);
			} else {
				if (targetIndex >= MAX_SAFE_INTEGER) {
					throw new $TypeError('index too large');
				}
				CreateDataPropertyOrThrow(target, ToString(targetIndex), element);
				targetIndex += 1;
			}
		}
		sourceIndex += 1;
	}

	return targetIndex;
};
