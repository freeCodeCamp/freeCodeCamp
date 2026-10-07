'use strict';

var implementation = require('./implementation');

var $Iterator = require('../Iterator');

module.exports = function getPolyfill() {
	return typeof $Iterator.from === 'function' ? $Iterator.from : implementation;
};
