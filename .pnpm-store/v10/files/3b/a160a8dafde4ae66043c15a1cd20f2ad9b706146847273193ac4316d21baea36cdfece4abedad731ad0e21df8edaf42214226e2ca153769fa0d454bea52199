'use strict';

var Type = require('./Type');

// https://262.ecma-international.org/5.1/#sec-11.9.6

module.exports = function StrictEqualityComparison(x, y) {
	if (Type(x) !== Type(y)) {
		return false;
	}
	if (typeof x === 'undefined' || x === null) {
		return true;
	}
	return x === y; // shortcut for steps 4-7
};
