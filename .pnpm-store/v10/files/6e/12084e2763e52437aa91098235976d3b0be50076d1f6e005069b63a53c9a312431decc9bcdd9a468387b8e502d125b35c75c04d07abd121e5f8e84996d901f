'use strict';

var hasSymbols = require('has-symbols')();
var regexpMatchAll = require('./regexp-matchall');

module.exports = function getRegExpMatchAllPolyfill() {
	if (!hasSymbols || typeof Symbol.matchAll !== 'symbol' || typeof RegExp.prototype[Symbol.matchAll] !== 'function') {
		return regexpMatchAll;
	}
	return RegExp.prototype[Symbol.matchAll];
};
