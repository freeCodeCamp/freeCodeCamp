'use strict';

var $TypeError = require('es-errors/type');

var isArray = require('isarray');

/** @type {import('.')} */
module.exports = function safePushApply(target, source) {
	if (!isArray(target)) {
		throw new $TypeError('target must be an array');
	}
	for (var i = 0; i < source.length; i++) {
		target[target.length] = source[i]; // eslint-disable-line no-param-reassign
	}
};
