'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof Object.entries === 'function' ? Object.entries : implementation;
};
