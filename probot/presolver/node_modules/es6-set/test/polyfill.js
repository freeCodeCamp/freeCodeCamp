'use strict';

var aFrom   = require('es5-ext/array/from')
  , toArray = require('es5-ext/array/to-array');

module.exports = function (T, a) {
	var arr = ['raz', 'dwa', 'trzy'], set = new T(arr), x = {}, y = {}, i = 0;

	a(set instanceof T, true, "Set");
	a(set.size, 3, "Size");
	a(set.has('raz'), true, "Has: true");
	a(set.has(x), false, "Has: false");
	a(set.add(x), set, "Add: return");
	a(set.has(x), true, "Add");
	a(set.size, 4, "Add: Size");
	a(set.delete({}), false, "Delete: false");

	arr.push(x);
	set.forEach(function () {
		a.deep(aFrom(arguments), [arr[i], arr[i], set],
			"ForEach: Arguments:  #" + i);
		a(this, y, "ForEach: Context: #" + i);
		if (i === 0) {
			a(set.delete('raz'), true, "Delete: true");
			a(set.has('raz'), false, "Delete");
			a(set.size, 3, "Delete: size");
			set.add('cztery');
			arr.push('cztery');
		}
		i++;
	}, y);
	arr.splice(0, 1);

	a.deep(toArray(set.entries()), [['dwa', 'dwa'], ['trzy', 'trzy'], [x, x],
		['cztery', 'cztery']], "Entries");
	a.deep(toArray(set.keys()), ['dwa', 'trzy', x, 'cztery'], "Keys");
	a.deep(toArray(set.values()), ['dwa', 'trzy', x, 'cztery'], "Values");
	a.deep(toArray(set), ['dwa', 'trzy', x, 'cztery'], "Iterator");

	set.clear();
	a(set.size, 0, "Clear: size");
	a(set.has('trzy'), false, "Clear: has");
	a.deep(toArray(set), [], "Clear: Values");

	a.h1("Empty initialization");
	set = new T();
	set.add('foo');
	a(set.size, 1);
	a(set.has('foo'), true);
};
