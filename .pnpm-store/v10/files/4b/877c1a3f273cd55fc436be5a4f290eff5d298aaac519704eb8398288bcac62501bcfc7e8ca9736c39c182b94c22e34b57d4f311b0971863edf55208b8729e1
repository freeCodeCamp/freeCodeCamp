'use strict';

var supportsDescriptors = require('define-properties').supportsDescriptors;
var getPolyfill = require('./polyfill');
var gOPD = require('gopd');
var defineProperty = Object.defineProperty;
var $TypeError = require('es-errors');
var getProto = require('get-proto');
var regex = /a/;

module.exports = function shimFlags() {
	if (!supportsDescriptors || !getProto) {
		throw new $TypeError('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	var polyfill = getPolyfill();
	var proto = getProto(regex);
	var descriptor = gOPD(proto, 'flags');
	if (!descriptor || descriptor.get !== polyfill) {
		defineProperty(proto, 'flags', {
			configurable: true,
			enumerable: false,
			get: polyfill
		});
	}
	return polyfill;
};
