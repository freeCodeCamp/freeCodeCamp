'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimTrimEnd() {
	var polyfill = getPolyfill();
	define(
		String.prototype,
		{ trimEnd: polyfill },
		{ trimEnd: function () { return String.prototype.trimEnd !== polyfill; } }
	);
	return polyfill;
};
