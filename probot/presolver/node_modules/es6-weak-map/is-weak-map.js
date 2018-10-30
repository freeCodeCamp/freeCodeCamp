'use strict';

var toStringTagSymbol = require('es6-symbol').toStringTag

  , toString = Object.prototype.toString
  , id = '[object WeakMap]'
  , Global = (typeof WeakMap === 'undefined') ? null : WeakMap;

module.exports = function (x) {
	return (x && ((Global && (x instanceof Global)) ||
			(toString.call(x) === id) || (x[toStringTagSymbol] === 'WeakMap'))) ||
			false;
};
