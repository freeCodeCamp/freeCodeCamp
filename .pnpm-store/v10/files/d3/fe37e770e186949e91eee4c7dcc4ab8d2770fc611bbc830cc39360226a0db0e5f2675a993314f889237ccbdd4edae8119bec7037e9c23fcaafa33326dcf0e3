'use strict';

var ES5Type = require('../5/Type');

// https://262.ecma-international.org/6.0/#sec-ecmascript-data-types-and-values

module.exports = function Type(x) {
	if (typeof x === 'symbol') {
		return 'Symbol';
	}
	return ES5Type(x);
};
