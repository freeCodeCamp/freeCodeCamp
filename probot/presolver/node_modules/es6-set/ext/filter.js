'use strict';

var callable = require('es5-ext/object/valid-callable')
  , forOf    = require('es6-iterator/for-of')
  , isSet    = require('../is-set')
  , Set      = require('../')

  , call = Function.prototype.call;

module.exports = function (cb/*, thisArg*/) {
	var thisArg = arguments[1], result;
	callable(cb);
	result = isSet(this) ? new this.constructor() : new Set();
	forOf(this, function (value) {
		if (call.call(cb, thisArg, value)) result.add(value);
	});
	return result;
};
