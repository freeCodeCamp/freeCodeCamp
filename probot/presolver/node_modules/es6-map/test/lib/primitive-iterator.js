'use strict';

var iteratorSymbol = require('es6-symbol').iterator
  , toArray        = require('es5-ext/array/to-array')
  , Map            = require('../../primitive')

  , compare, mapToResults;

compare = function (a, b) {
	if (!a.value) return -1;
	if (!b.value) return 1;
	return a.value[0].localeCompare(b.value[0]);
};

mapToResults = function (arr) {
	return arr.sort().map(function (value) {
		return { done: false, value: value };
	});
};

module.exports = function (T) {
	return {
		"": function (a) {
			var arr, it, y, z, map, result = [];

			arr = [['raz', 'one'], ['dwa', 'two'], ['trzy', 'three'],
				['cztery', 'four'], ['pięć', 'five']];
			map = new Map(arr);

			it = new T(map);
			a(it[iteratorSymbol](), it, "@@iterator");
			y = it.next();
			result.push(y);
			z = it.next();
			a.not(y, z, "Recreate result");
			result.push(z);
			result.push(it.next());
			result.push(it.next());
			result.push(it.next());
			a.deep(result.sort(compare), mapToResults(arr));
			a.deep(y = it.next(), { done: true, value: undefined }, "End");
			a.not(y, it.next(), "Recreate result on dead");
		},
		Emited: function (a) {
			var arr, it, map, result = [];

			arr = [['raz', 'one'], ['dwa', 'two'], ['trzy', 'three'],
				['cztery', 'four'], ['pięć', 'five']];
			map = new Map(arr);

			it = new T(map);
			result.push(it.next());
			result.push(it.next());
			map.set('sześć', 'six');
			arr.push(['sześć', 'six']);
			result.push(it.next());
			map.delete('pięć');
			arr.splice(4, 1);
			result.push(it.next());
			result.push(it.next());
			a.deep(result.sort(compare), mapToResults(arr));
			a.deep(it.next(), { done: true, value: undefined }, "End");
		},
		"Emited #2": function (a) {
			var arr, it, map, result = [];

			arr = [['raz', 'one'], ['dwa', 'two'], ['trzy', 'three'],
				['cztery', 'four'], ['pięć', 'five'], ['sześć', 'six']];
			map = new Map(arr);

			it = new T(map);
			result.push(it.next());
			result.push(it.next());
			map.set('siedem', 'seven');
			map.delete('siedem');
			result.push(it.next());
			result.push(it.next());
			map.delete('pięć');
			arr.splice(4, 1);
			result.push(it.next());
			a.deep(result.sort(compare), mapToResults(arr));
			a.deep(it.next(), { done: true, value: undefined }, "End");
		},
		"Emited: Clear #1": function (a) {
			var arr, it, map, result = [];

			arr = [['raz', 'one'], ['dwa', 'two'], ['trzy', 'three'],
				['cztery', 'four'], ['pięć', 'five'], ['sześć', 'six']];
			map = new Map(arr);

			it = new T(map);
			result.push(it.next());
			result.push(it.next());
			arr = [['raz', 'one'], ['dwa', 'two']];
			map.clear();
			a.deep(result.sort(compare), mapToResults(arr));
			a.deep(it.next(), { done: true, value: undefined }, "End");
		},
		"Emited: Clear #2": function (a) {
			var arr, it, map, result = [];

			arr = [['raz', 'one'], ['dwa', 'two'], ['trzy', 'three'],
				['cztery', 'four'], ['pięć', 'five'], ['sześć', 'six']];
			map = new Map(arr);

			it = new T(map);
			result.push(it.next());
			result.push(it.next());
			map.clear();
			map.set('foo', 'bru');
			map.set('bar', 'far');
			arr = [['raz', 'one'], ['dwa', 'two'], ['foo', 'bru'], ['bar', 'far']];
			result.push(it.next());
			result.push(it.next());
			a.deep(result.sort(compare), mapToResults(arr));
			a.deep(it.next(), { done: true, value: undefined }, "End");
		},
		Kinds: function (a) {
			var arr = [['raz', 'one'], ['dwa', 'two']], map = new Map(arr);

			a.deep(toArray(new T(map)).sort(), arr.sort(), "Default");
			a.deep(toArray(new T(map, 'key+value')).sort(), arr.sort(),
				"Key + Value");
			a.deep(toArray(new T(map, 'value')).sort(), ['one', 'two'].sort(),
				"Value");
			a.deep(toArray(new T(map, 'key')).sort(), ['raz', 'dwa'].sort(),
				"Key");
		}
	};
};
