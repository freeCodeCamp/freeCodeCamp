'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof Iterator === 'function' && typeof Iterator.prototype.reduce === 'function'
		? Iterator.prototype.reduce
		: implementation;
};
