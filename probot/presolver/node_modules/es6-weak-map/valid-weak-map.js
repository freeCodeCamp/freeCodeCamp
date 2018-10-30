'use strict';

var isWeakMap = require('./is-weak-map');

module.exports = function (x) {
	if (!isWeakMap(x)) throw new TypeError(x + " is not a WeakMap");
	return x;
};
