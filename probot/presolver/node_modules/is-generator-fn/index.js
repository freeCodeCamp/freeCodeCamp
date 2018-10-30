'use strict';
var toString = Object.prototype.toString;

module.exports = function (fn) {
	if (typeof fn !== 'function') {
		return false;
	}

	return (fn.constructor && fn.constructor.name === 'GeneratorFunction') ||
		toString.call(fn) === '[object GeneratorFunction]';
};
