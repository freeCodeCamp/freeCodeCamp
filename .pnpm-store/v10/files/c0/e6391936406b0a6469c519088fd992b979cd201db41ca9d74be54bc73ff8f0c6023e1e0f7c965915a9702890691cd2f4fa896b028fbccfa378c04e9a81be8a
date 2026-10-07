'use strict';

var define = require('define-data-property');
var hasDescriptors = require('has-property-descriptors')();
var functionsHaveConfigurableNames = require('functions-have-names').functionsHaveConfigurableNames();

var $TypeError = require('es-errors/type');

/** @type {import('.')} */
module.exports = function setFunctionName(fn, name) {
	if (typeof fn !== 'function') {
		throw new $TypeError('`fn` is not a function');
	}
	var loose = arguments.length > 2 && !!arguments[2];
	if (!loose || functionsHaveConfigurableNames) {
		if (hasDescriptors) {
			define(/** @type {Parameters<define>[0]} */ (fn), 'name', name, true, true);
		} else {
			define(/** @type {Parameters<define>[0]} */ (fn), 'name', name);
		}
	}
	return fn;
};
