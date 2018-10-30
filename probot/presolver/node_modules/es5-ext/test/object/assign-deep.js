"use strict";

module.exports = function (t, a) {
	var o1 = { a: 1, b: 2 }, o2 = { b: 3, c: 4 };

	a(t(o1, o2), o1, "Returns self");
	a.deep(o1, { a: 1, b: 3, c: 4 }, "Single: content");

	a.deep(t({}, o1, o2), { a: 1, b: 3, c: 4 }, "Multi argument");

	var obj1 = { foo: { bar: 3, marko: true } }
	  , obj2 = { foo: { elo: 12, marko: false }, miszka: [23] };

	var copyObj1 = JSON.parse(JSON.stringify(obj1)), copyObj2 = JSON.parse(JSON.stringify(obj2));
	a.deep(t({}, obj1, obj2), { foo: { bar: 3, marko: false, elo: 12 }, miszka: [23] });
	// Ensure it's side effects free
	a.deep(obj1, copyObj1);
	a.deep(obj2, copyObj2);

	obj1 = [{ foo: "bar" }];
	var assignedObj = [];
	t(assignedObj, obj1);
	a.deep(assignedObj, [{ foo: "bar" }]);
	// Ensure array items are copied and not passed
	a.not(assignedObj[0], obj1[0]);
	a(t(true), true);
};
