'use strict';

var define = require('define-properties');
var shimUnscopables = require('es-shim-unscopables');

var getPolyfill = require('./polyfill');

module.exports = function shim() {
	var polyfill = getPolyfill();

	define(
		Array.prototype,
		{ toSorted: polyfill },
		{ toSorted: function () { return Array.prototype.toSorted !== polyfill; } }
	);

	shimUnscopables('toSorted');

	return polyfill;
};
