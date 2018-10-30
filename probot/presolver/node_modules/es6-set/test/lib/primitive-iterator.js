'use strict';

var Set            = require('../../primitive')
  , toArray        = require('es5-ext/array/to-array')
  , iteratorSymbol = require('es6-symbol').iterator

  , compare, map;

compare = function (a, b) {
	if (!a.value) return -1;
	if (!b.value) return 1;
	return a.value.localeCompare(b.value);
};

map = function (arr) {
	return arr.sort().map(function (value) {
		return { done: false, value: value };
	});
};

module.exports = function (T) {
	return {
		"": function (a) {
			var arr = ['raz', 'dwa', 'trzy', 'cztery', 'pięć'], it, y, z
			  , set = new Set(arr), result = [];

			it = new T(set);
			a(it[iteratorSymbol](), it, "@@iterator");
			y = it.next();
			result.push(y);
			z = it.next();
			a.not(y, z, "Recreate result");
			result.push(z);
			result.push(it.next());
			result.push(it.next());
			result.push(it.next());
			a.deep(result.sort(compare), map(arr));
			a.deep(y = it.next(), { done: true, value: undefined }, "End");
			a.not(y, it.next(), "Recreate result on dead");
		},
		Emited: function (a) {
			var arr = ['raz', 'dwa', 'trzy', 'cztery', 'pięć'], it
			  , set = new Set(arr), result = [];

			it = new T(set);
			result.push(it.next());
			result.push(it.next());
			set.add('sześć');
			arr.push('sześć');
			result.push(it.next());
			set.delete('pięć');
			arr.splice(4, 1);
			result.push(it.next());
			result.push(it.next());
			a.deep(result.sort(compare), map(arr));
			a.deep(it.next(), { done: true, value: undefined }, "End");
		},
		"Emited #2": function (a) {
			var arr = ['raz', 'dwa', 'trzy', 'cztery', 'pięć', 'sześć'], it
			  , set = new Set(arr), result = [];

			it = new T(set);
			result.push(it.next());
			result.push(it.next());
			set.add('siedem');
			set.delete('siedem');
			result.push(it.next());
			result.push(it.next());
			set.delete('pięć');
			arr.splice(4, 1);
			result.push(it.next());
			a.deep(result.sort(compare), map(arr));
			a.deep(it.next(), { done: true, value: undefined }, "End");
		},
		"Emited: Clear #1": function (a) {
			var arr = ['raz', 'dwa', 'trzy', 'cztery', 'pięć', 'sześć'], it
			  , set = new Set(arr), result = [];

			it = new T(set);
			result.push(it.next());
			result.push(it.next());
			arr = ['raz', 'dwa'];
			set.clear();
			a.deep(result.sort(compare), map(arr));
			a.deep(it.next(), { done: true, value: undefined }, "End");
		},
		"Emited: Clear #2": function (a) {
			var arr = ['raz', 'dwa', 'trzy', 'cztery', 'pięć', 'sześć'], it
			  , set = new Set(arr), result = [];

			it = new T(set);
			result.push(it.next());
			result.push(it.next());
			set.clear();
			set.add('foo');
			set.add('bar');
			arr = ['raz', 'dwa', 'foo', 'bar'];
			result.push(it.next());
			result.push(it.next());
			a.deep(result.sort(compare), map(arr));
			a.deep(it.next(), { done: true, value: undefined }, "End");
		},
		Kinds: function (a) {
			var set = new Set(['raz', 'dwa']);

			a.deep(toArray(new T(set)).sort(), ['raz', 'dwa'].sort(), "Default");
			a.deep(toArray(new T(set, 'key+value')).sort(),
				[['raz', 'raz'], ['dwa', 'dwa']].sort(), "Key & Value");
			a.deep(toArray(new T(set, 'value')).sort(), ['raz', 'dwa'].sort(),
				"Other");
		}
	};
};
