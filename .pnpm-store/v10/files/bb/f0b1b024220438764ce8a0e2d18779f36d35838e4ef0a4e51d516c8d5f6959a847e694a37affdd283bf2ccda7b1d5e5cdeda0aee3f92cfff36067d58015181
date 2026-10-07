'use strict';

var $TypeError = require('es-errors/type');

var ValidateAtomicAccess = require('./ValidateAtomicAccess');
var ValidateIntegerTypedArray = require('./ValidateIntegerTypedArray');

// https://262.ecma-international.org/15.0/#sec-availablenamedtimezoneidentifiers

module.exports = function ValidateAtomicAccessOnIntegerTypedArray(typedArray, requestIndex) {
	var waitable = arguments.length > 2 ? arguments[2] : false; // step 1

	if (typeof waitable !== 'boolean') {
		throw new $TypeError('waitable must be a boolean');
	}

	var taRecord = ValidateIntegerTypedArray(typedArray, waitable); // step 2
	return ValidateAtomicAccess(taRecord, requestIndex); // step 3
};
