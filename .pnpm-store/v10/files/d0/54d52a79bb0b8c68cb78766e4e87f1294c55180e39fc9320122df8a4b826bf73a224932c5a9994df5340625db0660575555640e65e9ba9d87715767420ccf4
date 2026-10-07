/*! https://mths.be/includes v2.0.0 by @mathias */

'use strict';

var callBind = require('call-bind');
var define = require('define-properties');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var boundIncludes = callBind(getPolyfill());

define(boundIncludes, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundIncludes;
