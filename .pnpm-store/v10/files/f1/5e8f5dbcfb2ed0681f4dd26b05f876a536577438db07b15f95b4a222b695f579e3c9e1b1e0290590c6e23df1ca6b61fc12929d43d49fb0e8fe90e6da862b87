'use strict';

var supportsDescriptors = require('has-property-descriptors')();
var defineDataProperty = require('define-data-property');

var getPolyfill = require('./polyfill');

module.exports = function shimStringTrim() {
	var polyfill = getPolyfill();

	if (String.prototype.trim !== polyfill) {
		if (supportsDescriptors) {
			defineDataProperty(String.prototype, 'trim', polyfill, true);
		} else {
			defineDataProperty(String.prototype, 'trim', polyfill);
		}
	}

	return polyfill;
};
