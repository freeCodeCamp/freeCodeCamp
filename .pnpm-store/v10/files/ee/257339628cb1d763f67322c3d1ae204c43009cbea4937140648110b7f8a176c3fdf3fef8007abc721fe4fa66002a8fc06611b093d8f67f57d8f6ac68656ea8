'use strict';

var define = require('define-properties');

var getPolyfill = require('./polyfill');

module.exports = function shim() {
	var polyfill = getPolyfill();

	define(
		Object,
		{ groupBy: polyfill },
		{ groupBy: function () { return Object.groupBy !== polyfill; } }
	);

	return polyfill;
};
