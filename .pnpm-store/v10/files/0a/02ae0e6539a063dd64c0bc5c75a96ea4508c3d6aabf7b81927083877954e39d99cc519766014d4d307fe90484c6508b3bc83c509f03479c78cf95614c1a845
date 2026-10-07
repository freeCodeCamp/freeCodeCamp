'use strict';

var globalThis = require('globalthis')();
var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof globalThis.Iterator === 'function' ? globalThis.Iterator : implementation;
};
