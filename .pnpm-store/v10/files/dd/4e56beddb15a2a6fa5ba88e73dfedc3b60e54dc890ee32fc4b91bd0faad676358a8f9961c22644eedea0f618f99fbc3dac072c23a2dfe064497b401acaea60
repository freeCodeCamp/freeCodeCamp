'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof Object.fromEntries === 'function' ? Object.fromEntries : implementation;
};
