'use strict';

var $isNaN = require('math-intrinsics/isNaN');

// https://262.ecma-international.org/6.0/#sec-samevaluezero

module.exports = function SameValueZero(x, y) {
	return (x === y) || ($isNaN(x) && $isNaN(y));
};
