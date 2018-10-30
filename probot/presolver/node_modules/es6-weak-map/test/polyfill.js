'use strict';

module.exports = function (T, a) {
	var x = {}, y = {}, z = {}, arr = [[x, 'raz'], [y, 'dwa']], map = new T(arr);

	a(map instanceof T, true, "WeakMap");
	a(map.has(x), true, "Has: true");
	a(map.get(x), 'raz', "Get: contains");
	a(map.has(z), false, "Has: false");
	a(map.get(z), undefined, "Get: doesn't contain");
	a(map.set(z, 'trzy'), map, "Set: return");
	a(map.has(z), true, "Add");
	a(map.delete({}), false, "Delete: false");

	a(map.delete(x), true, "Delete: true");
	a(map.get(x), undefined, "Get: after delete");
	a(map.has(x), false, "Has: after delete");

	a.h1("Empty initialization");
	map = new T();
	map.set(x, 'bar');
	a(map.get(x), 'bar');
};
