'use strict';

var floor = require('./floor');

var $TypeError = require('es-errors/type');

// https://262.ecma-international.org/14.0/#eqn-truncate

module.exports = function truncate(x) {
	if (typeof x !== 'number' && typeof x !== 'bigint') {
		throw new $TypeError('argument must be a Number or a BigInt');
	}
	var result = x < 0 ? -floor(-x) : floor(x);
	return result === 0 ? 0 : result; // in the spec, these are math values, so we filter out -0 here
};
