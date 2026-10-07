'use strict';

var define = require('define-properties');
var globalThis = require('globalthis')();

var getPolyfill = require('./polyfill');

module.exports = function shimIterator() {
	var polyfill = getPolyfill();

	define(
		globalThis,
		{ Iterator: polyfill },
		{ Iterator: function () { return Iterator !== polyfill; } }
	);

	return polyfill;
};
