'use strict';

var Map     = require('../../polyfill')
  , toArray = require('es5-ext/array/to-array');

module.exports = function (T, a) {
	var arr = [['raz', 'one'], ['dwa', 'two']], map = new Map(arr);

	a.deep(toArray(new T(map)), arr, "Default");
	a.deep(toArray(new T(map, 'key+value')), arr, "Key & Value");
	a.deep(toArray(new T(map, 'value')), ['one', 'two'], "Value");
	a.deep(toArray(new T(map, 'key')), ['raz', 'dwa'], "Value");
};
