'use strict';

var toArray = require('es5-ext/array/to-array')
  , Set     = require('../../');

module.exports = function (t, a) {
	var content = ['raz', 2, true], set = new Set(content), copy;

	copy = t.call(set);
	a.not(copy, set, "Copy");
	a.deep(toArray(copy), content, "Content");
};
