'use strict';

var define = require('define-properties');
var callBind = require('call-bind');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var polyfill = getPolyfill();
var shim = require('./shim');

var bound = callBind(polyfill);

define(bound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = bound;
