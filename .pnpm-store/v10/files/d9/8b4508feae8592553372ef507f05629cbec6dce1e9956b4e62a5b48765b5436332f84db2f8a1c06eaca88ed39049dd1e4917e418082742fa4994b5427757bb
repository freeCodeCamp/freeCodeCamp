'use strict';

var supportsDescriptors = require('define-properties').supportsDescriptors;
var functionsHaveNames = require('functions-have-names')();
var getPolyfill = require('./polyfill');
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;

module.exports = function shimName() {
	var polyfill = getPolyfill();
	if (functionsHaveNames) {
		return polyfill;
	}
	if (!supportsDescriptors) {
		throw new TypeErr('Shimming Function.prototype.name support requires ES5 property descriptor support.');
	}
	var functionProto = Function.prototype;
	defineProperty(functionProto, 'name', {
		configurable: true,
		enumerable: false,
		get: function () {
			var name = polyfill.call(this);
			if (this !== functionProto) {
				defineProperty(this, 'name', {
					configurable: true,
					enumerable: false,
					value: name,
					writable: false
				});
			}
			return name;
		}
	});
	return polyfill;
};
