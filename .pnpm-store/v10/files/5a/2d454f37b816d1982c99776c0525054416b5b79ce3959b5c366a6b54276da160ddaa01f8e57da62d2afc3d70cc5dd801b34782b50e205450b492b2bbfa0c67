'use strict';

var define = require('define-properties');
var shimUnscopables = require('es-shim-unscopables');

var getPolyfill = require('./polyfill');

module.exports = function shimFlat() {
	var polyfill = getPolyfill();

	define(
		Array.prototype,
		{ flat: polyfill },
		{ flat: function () { return Array.prototype.flat !== polyfill; } }
	);

	shimUnscopables('flat');

	return polyfill;
};
