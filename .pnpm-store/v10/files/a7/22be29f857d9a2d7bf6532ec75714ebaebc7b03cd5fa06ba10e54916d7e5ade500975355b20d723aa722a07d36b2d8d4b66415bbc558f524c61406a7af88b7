"use strict";

module.exports = function (T, a) {
	var obj1 = {}, obj2 = {}, obj3 = {}, arr = [[obj1, "raz"], [obj2, "dwa"]], map = new T(arr);

	a(map instanceof T, true, "WeakMap");
	a(map.has(obj1), true, "Has: true");
	a(map.get(obj1), "raz", "Get: contains");
	a(map.has(obj3), false, "Has: false");
	a(map.get(obj3), undefined, "Get: doesn't contain");
	a(map.set(obj3, "trzy"), map, "Set: return");
	a(map.has(obj3), true, "Add");
	a(map.delete({}), false, "Delete: false");

	a(map.delete(obj1), true, "Delete: true");
	a(map.get(obj1), undefined, "Get: after delete");
	a(map.has(obj1), false, "Has: after delete");

	a.h1("Empty initialization");
	map = new T();
	map.set(obj1, "bar");
	a(map.get(obj1), "bar");
};
