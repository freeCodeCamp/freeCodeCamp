'use strict';

var define = require('define-properties');
var callBind = require('call-bind');
var callBound = require('call-bound');
var RequireObjectCoercible = require('es-object-atoms/RequireObjectCoercible');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var polyfill = getPolyfill();
var shim = require('./shim');

var $slice = callBound('Array.prototype.slice');

var bound = callBind.apply(polyfill);
// eslint-disable-next-line no-unused-vars
var boundFindLast = function findLastIndex(array, predicate) {
	RequireObjectCoercible(array);
	return bound(array, $slice(arguments, 1));
};

define(boundFindLast, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundFindLast;
