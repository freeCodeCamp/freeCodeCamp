'use strict';

var $abs = require('math-intrinsics/abs');

// https://262.ecma-international.org/11.0/#eqn-abs

module.exports = function abs(x) {
	return typeof x === 'bigint' ? (x >= 0 ? x : -x) : $abs(x);
};
