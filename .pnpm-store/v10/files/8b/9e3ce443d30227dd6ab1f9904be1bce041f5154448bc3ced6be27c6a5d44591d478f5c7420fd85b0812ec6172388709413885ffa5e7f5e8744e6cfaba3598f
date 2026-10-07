'use strict';

var implementation = require('./implementation');

var supportsDescriptors = require('define-properties').supportsDescriptors;
var $gOPD = Object.getOwnPropertyDescriptor;

module.exports = function getPolyfill() {
	if (supportsDescriptors && (/a/mig).flags === 'gim') {
		var descriptor = $gOPD(RegExp.prototype, 'flags');
		if (
			descriptor
			&& typeof descriptor.get === 'function'
			&& 'dotAll' in RegExp.prototype
			&& 'hasIndices' in RegExp.prototype
		) {
			/* eslint getter-return: 0 */
			var calls = '';
			var o = {};
			Object.defineProperty(o, 'hasIndices', {
				get: function () {
					calls += 'd';
				}
			});
			Object.defineProperty(o, 'sticky', {
				get: function () {
					calls += 'y';
				}
			});

			descriptor.get.call(o);

			if (calls === 'dy') {
				return descriptor.get;
			}
		}
	}
	return implementation;
};
