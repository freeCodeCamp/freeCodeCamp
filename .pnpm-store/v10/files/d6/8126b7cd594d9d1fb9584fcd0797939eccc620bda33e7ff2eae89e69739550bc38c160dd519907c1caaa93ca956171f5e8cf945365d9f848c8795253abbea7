'use strict';

var $floor = require('./floor');

/** @type {import('./mod')} */
module.exports = function mod(number, modulo) {
	var remain = number % modulo;
	return $floor(remain >= 0 ? remain : remain + modulo);
};
