'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof Iterator === 'function' && typeof Iterator.prototype.forEach === 'function'
		? Iterator.prototype.forEach
		: implementation;
};
