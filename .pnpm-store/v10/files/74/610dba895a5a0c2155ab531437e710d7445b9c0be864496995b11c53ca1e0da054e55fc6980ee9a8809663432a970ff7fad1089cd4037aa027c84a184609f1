'use strict';

var $TypeError = require('es-errors/type');

var isPropertyDescriptor = require('../helpers/records/property-descriptor');
var fromPropertyDescriptor = require('../helpers/fromPropertyDescriptor');

// https://262.ecma-international.org/6.0/#sec-frompropertydescriptor

module.exports = function FromPropertyDescriptor(Desc) {
	if (typeof Desc !== 'undefined' && !isPropertyDescriptor(Desc)) {
		throw new $TypeError('Assertion failed: `Desc` must be a Property Descriptor');
	}

	return fromPropertyDescriptor(Desc);
};
