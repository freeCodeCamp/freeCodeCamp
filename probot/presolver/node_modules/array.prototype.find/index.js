'use strict';

var define = require('define-properties');
var ES = require('es-abstract/es6');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var slice = Array.prototype.slice;

var polyfill = getPolyfill();

var boundFindShim = function find(array, predicate) { // eslint-disable-line no-unused-vars
	ES.RequireObjectCoercible(array);
	var args = slice.call(arguments, 1);
	return polyfill.apply(array, args);
};

define(boundFindShim, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundFindShim;
