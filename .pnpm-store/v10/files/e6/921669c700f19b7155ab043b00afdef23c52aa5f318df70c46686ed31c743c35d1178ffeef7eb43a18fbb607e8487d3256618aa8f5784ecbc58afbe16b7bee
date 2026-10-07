'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof Object.values === 'function' ? Object.values : implementation;
};
