'use strict';

var aFrom   = require('es5-ext/array/from')
  , toArray = require('es5-ext/array/to-array');

module.exports = function (T, a) {
	var arr = [['raz', 'one'], ['dwa', 'two'], ['trzy', 'three']]
	  , map = new T(arr), x = {}, y = {}, i = 0;

	a(map instanceof T, true, "Map");
	a(map.size, 3, "Size");
	a(map.get('raz'), 'one', "Get: contained");
	a(map.get(x), undefined, "Get: not contained");
	a(map.has('raz'), true, "Has: contained");
	a(map.has(x), false, "Has: not contained");
	a(map.set(x, y), map, "Set: return");
	a(map.has(x), true, "Set: has");
	a(map.get(x), y, "Set: get");
	a(map.size, 4, "Set: Size");
	map.set('dwa', x);
	a(map.get('dwa'), x, "Overwrite: get");
	a(map.size, 4, "Overwrite: size");

	a(map.delete({}), false, "Delete: false");

	arr.push([x, y]);
	arr[1][1] = x;
	map.forEach(function () {
		a.deep(aFrom(arguments), [arr[i][1], arr[i][0], map],
			"ForEach: Arguments:  #" + i);
		a(this, y, "ForEach: Context: #" + i);
		if (i === 0) {
			a(map.delete('raz'), true, "Delete: true");
			a(map.has('raz'), false, "Delete");
			a(map.size, 3, "Delete: size");
			map.set('cztery', 'four');
			arr.push(['cztery', 'four']);
		}
		i++;
	}, y);
	arr.splice(0, 1);

	a.deep(toArray(map.entries()), [['dwa', x], ['trzy', 'three'], [x, y],
		['cztery', 'four']], "Entries");
	a.deep(toArray(map.keys()), ['dwa', 'trzy', x, 'cztery'], "Keys");
	a.deep(toArray(map.values()), [x, 'three', y, 'four'], "Values");
	a.deep(toArray(map), [['dwa', x], ['trzy', 'three'], [x, y],
		['cztery', 'four']], "Iterator");

	map.clear();
	a(map.size, 0, "Clear: size");
	a(map.has('trzy'), false, "Clear: has");
	a.deep(toArray(map), [], "Clear: Values");

	a.h1("Empty initialization");
	map = new T();
	map.set('foo', 'bar');
	a(map.size, 1);
	a(map.get('foo'), 'bar');
};
