'use strict';

var define = require('define-properties');
var RequireObjectCoercible = require('es-object-atoms/RequireObjectCoercible');
var callBind = require('call-bind');
var callBound = require('call-bound');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var polyfill = callBind.apply(getPolyfill());
var shim = require('./shim');

var $slice = callBound('Array.prototype.slice');

/* eslint-disable no-unused-vars */
var boundShim = function includes(array, searchElement) {
/* eslint-enable no-unused-vars */
	RequireObjectCoercible(array);
	return polyfill(array, $slice(arguments, 1));
};
define(boundShim, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundShim;
