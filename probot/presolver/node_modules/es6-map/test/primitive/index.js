'use strict';

var aFrom       = require('es5-ext/array/from')
  , getIterator = require('es6-iterator/get')
  , toArray     = require('es5-ext/array/to-array');

module.exports = function (T, a) {
	var arr = [['raz', 'one'], ['dwa', 'two'], ['trzy', 'three']]
	  , map = new T(arr), x = 'other', y = 'other2'
	  , i = 0, result = [];

	a(map instanceof T, true, "Map");
	a(map.size, 3, "Size");
	a(map.get('raz'), 'one', "Get: contained");
	a(map.get(x), undefined, "Get: not contained");
	a(map.has('raz'), true, "Has: true");
	a(map.has(x), false, "Has: false");
	a(map.set(x, y), map, "Add: return");
	a(map.has(x), true, "Add");
	a(map.size, 4, "Add: Size");
	map.set('dwa', x);
	a(map.get('dwa'), x, "Overwrite: get");
	a(map.size, 4, "Overwrite: size");

	a(map.delete('else'), false, "Delete: false");

	arr.push([x, y]);
	arr[1][1] = x;
	map.forEach(function () {
		result.push(aFrom(arguments));
		a(this, y, "ForEach: Context: #" + i);
	}, y);

	a.deep(result.sort(function (a, b) {
		return String([a[1], a[0]]).localeCompare([b[1], b[0]]);
	}), arr.sort().map(function (val) { return [val[1], val[0], map]; }),
		"ForEach: Arguments");

	a.deep(toArray(map.entries()).sort(), [['dwa', x], ['trzy', 'three'],
		[x, y], ['raz', 'one']].sort(), "Entries");
	a.deep(toArray(map.keys()).sort(), ['dwa', 'trzy', x, 'raz'].sort(),
		"Keys");
	a.deep(toArray(map.values()).sort(), [x, 'three', y, 'one'].sort(),
		"Values");
	a.deep(toArray(getIterator(map)).sort(), [['dwa', x], ['trzy', 'three'],
		[x, y], ['raz', 'one']].sort(),
		"Iterator");

	map.clear();
	a(map.size, 0, "Clear: size");
	a(map.has('trzy'), false, "Clear: has");
	a.deep(toArray(map.values()), [], "Clear: Values");

	a.h1("Empty initialization");
	map = new T();
	map.set('foo', 'bar');
	a(map.size, 1);
	a(map.get('foo'), 'bar');
};
