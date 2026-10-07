'use strict';

var define = require('define-properties');
var shimUnscopables = require('es-shim-unscopables');

var getPolyfill = require('./polyfill');

module.exports = function shimFlatMap() {
	var polyfill = getPolyfill();

	define(
		Array.prototype,
		{ flatMap: polyfill },
		{ flatMap: function () { return Array.prototype.flatMap !== polyfill; } }
	);

	shimUnscopables('flatMap');

	return polyfill;
};
