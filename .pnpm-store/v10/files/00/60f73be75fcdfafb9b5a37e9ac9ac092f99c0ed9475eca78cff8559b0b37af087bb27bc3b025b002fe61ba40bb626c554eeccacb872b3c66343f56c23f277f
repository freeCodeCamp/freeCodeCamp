'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimGetPrototypeOf() {
	define(
		global,
		{ Reflect: {} },
		{ Reflect: function () { return typeof Reflect !== 'object' || !Reflect; } }
	);

	var polyfill = getPolyfill();
	define(
		Reflect,
		{ getPrototypeOf: polyfill },
		{ getPrototypeOf: function () { return Reflect.getPrototypeOf !== polyfill; } }
	);

	return polyfill;
};
