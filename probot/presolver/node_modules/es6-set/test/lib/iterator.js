'use strict';

var Set     = require('../../polyfill')
  , toArray = require('es5-ext/array/to-array');

module.exports = function (T, a) {
	var set = new Set(['raz', 'dwa']);

	a.deep(toArray(new T(set)), ['raz', 'dwa'], "Default");
	a.deep(toArray(new T(set, 'key+value')), [['raz', 'raz'], ['dwa', 'dwa']],
		"Key & Value");
	a.deep(toArray(new T(set, 'value')), ['raz', 'dwa'], "Other");
};
