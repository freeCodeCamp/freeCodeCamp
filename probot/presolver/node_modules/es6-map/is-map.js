'use strict';

var toStringTagSymbol = require('es6-symbol').toStringTag

  , toString = Object.prototype.toString
  , id = '[object Map]'
  , Global = (typeof Map === 'undefined') ? null : Map;

module.exports = function (x) {
	return (x && ((Global && ((x instanceof Global) || (x === Global.prototype))) ||
			(toString.call(x) === id) || (x[toStringTagSymbol] === 'Map'))) || false;
};
