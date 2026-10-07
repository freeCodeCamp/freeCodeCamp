'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = require('es-errors/type');
var $Date = GetIntrinsic('%Date%');
var $String = GetIntrinsic('%String%');

var $isNaN = require('math-intrinsics/isNaN');

// https://262.ecma-international.org/6.0/#sec-todatestring

module.exports = function ToDateString(tv) {
	if (typeof tv !== 'number') {
		throw new $TypeError('Assertion failed: `tv` must be a Number');
	}
	if ($isNaN(tv)) {
		return 'Invalid Date';
	}
	return $String(new $Date(tv));
};
