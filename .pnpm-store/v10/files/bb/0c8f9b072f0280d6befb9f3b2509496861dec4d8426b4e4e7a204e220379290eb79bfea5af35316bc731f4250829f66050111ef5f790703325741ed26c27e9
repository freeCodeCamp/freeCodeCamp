'use strict';

var callBind = require('call-bind');
var define = require('define-properties');
var RequireObjectCoercible = require('es-object-atoms/RequireObjectCoercible');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var bound = callBind(getPolyfill());
var boundMethod = function trim(receiver) {
	RequireObjectCoercible(receiver);
	return bound(receiver);
};

define(boundMethod, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundMethod;
