'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');
var shimUnscopables = require('es-shim-unscopables');

module.exports = function shimFindLast() {
	var polyfill = getPolyfill();
	define(
		Array.prototype,
		{ findLast: polyfill },
		{ findLast: function () { return Array.prototype.findLast !== polyfill; } }
	);

	shimUnscopables('findLast');

	return polyfill;
};
