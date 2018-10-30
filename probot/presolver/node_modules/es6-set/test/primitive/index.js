'use strict';

var aFrom       = require('es5-ext/array/from')
  , getIterator = require('es6-iterator/get')
  , toArray     = require('es5-ext/array/to-array');

module.exports = function (T, a) {
	var arr = ['raz', 'dwa', 'trzy'], set = new T(arr), x = 'other', y = 'other2'
	  , i = 0, result = [];

	a(set instanceof T, true, "Set");
	a(set.size, 3, "Size");
	a(set.has('raz'), true, "Has: true");
	a(set.has(x), false, "Has: false");
	a(set.add(x), set, "Add: return");
	a(set.has(x), true, "Add");
	a(set.size, 4, "Add: Size");
	a(set.delete('else'), false, "Delete: false");
	a(set.get('raz'), 'raz', "Get");

	arr.push(x);
	set.forEach(function () {
		result.push(aFrom(arguments));
		a(this, y, "ForEach: Context: #" + i);
	}, y);

	a.deep(result.sort(function (a, b) {
		return a[0].localeCompare(b[0]);
	}), arr.sort().map(function (val) { return [val, val, set]; }));

	a.deep(toArray(set.entries()).sort(), [['dwa', 'dwa'], ['trzy', 'trzy'],
		[x, x], ['raz', 'raz']].sort(), "Entries");
	a.deep(toArray(set.keys()).sort(), ['dwa', 'trzy', x, 'raz'].sort(),
		"Keys");
	a.deep(toArray(set.values()).sort(), ['dwa', 'trzy', x, 'raz'].sort(),
		"Values");
	a.deep(toArray(getIterator(set)).sort(), ['dwa', 'trzy', x, 'raz'].sort(),
		"Iterator");

	set.clear();
	a(set.size, 0, "Clear: size");
	a(set.has('trzy'), false, "Clear: has");
	a.deep(toArray(set.values()), [], "Clear: Values");

	a.h1("Empty initialization");
	set = new T();
	set.add('foo');
	a(set.size, 1);
	a(set.has('foo'), true);
};
