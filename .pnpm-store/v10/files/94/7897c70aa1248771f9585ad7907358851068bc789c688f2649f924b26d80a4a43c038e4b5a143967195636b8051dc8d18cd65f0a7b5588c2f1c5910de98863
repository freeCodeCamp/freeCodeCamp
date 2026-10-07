'use strict';

var $TypeError = require('es-errors/type');

var forEach = require('../helpers/forEach');
var isArray = require('../helpers/IsArray');

// https://262.ecma-international.org/16.0/#sec-setdatasize

// TODO: when spec enums are unforgeable, uncomment ~EMPTY~ check

module.exports = function SetDataSize(setData) {
	if (!isArray(setData) && setData !== 'EMPTY') {
		throw new $TypeError('Assertion failed: `setData` must be a List or ~EMPTY~');
	}

	if (setData === 'EMPTY') {
		return 0;
	}

	var count = 0; // step 1

	forEach(setData, function (e, i) { // step 2
		if (i in setData /* && e !== ~EMPTY~ */) {
			count += 1; // step 2.a
		}
	});

	return count; // step 3
};
