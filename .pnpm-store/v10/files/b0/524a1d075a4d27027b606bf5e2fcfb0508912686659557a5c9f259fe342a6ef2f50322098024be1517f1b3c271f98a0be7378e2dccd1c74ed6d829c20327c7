'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimTrimStart() {
	var polyfill = getPolyfill();
	define(
		String.prototype,
		{ trimStart: polyfill },
		{ trimStart: function () { return String.prototype.trimStart !== polyfill; } }
	);
	return polyfill;
};
