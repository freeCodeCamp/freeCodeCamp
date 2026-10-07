'use strict';

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

module.exports = {
	__proto__: getPolyfill(),
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
};
