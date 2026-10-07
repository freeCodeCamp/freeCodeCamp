'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof Object.is === 'function' ? Object.is : implementation;
};
