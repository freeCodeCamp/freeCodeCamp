"use strict";

module.exports = function (t, a) {
	var o, o1, o2, x, y = {}, z = {};
	o = { inherited: true, visible: 23 };
	o1 = Object.create(o);
	o1.visible = z;
	o1.nonremovable = "raz";
	Object.defineProperty(o1, "hidden", { value: "hidden" });

	o2 = Object.defineProperties({}, { nonremovable: { value: y } });
	o2.other = "other";

	try {
 t(o2, o1);
} catch (ignore) {}

	a(o2.visible, z, "Enumerable");
	a(o1.hidden, "hidden", "Not Enumerable");
	a(o2.propertyIsEnumerable("visible"), true, "Enumerable is enumerable");
	a(o2.propertyIsEnumerable("hidden"), false,
		"Not enumerable is not enumerable");

	a(o2.inherited, true, "Extend deep");

	a(o2.nonremovable, y, "Do not overwrite non configurable");
	a(o2.other, "other", "Own kept");

	x = {};
	t(x, o2);
	try {
 t(x, o1);
} catch (ignore) {}

	a(x.visible, z, "Enumerable");
	a(x.hidden, "hidden", "Not Enumerable");
	a(x.propertyIsEnumerable("visible"), true, "Enumerable is enumerable");
	a(x.propertyIsEnumerable("hidden"), false,
		"Not enumerable is not enumerable");

	a(x.inherited, true, "Extend deep");

	a(x.nonremovable, y, "Ignored non configurable");
	a(x.other, "other", "Other");

	x.visible = 3;
	a(x.visible, 3, "Writable is writable");

	x = {};
	t(x, o1);
	a.throws(function () {
		x.hidden = 3;
	}, "Not writable is not writable");

	x = {};
	t(x, o1);
	delete x.visible;
	a.ok(!x.hasOwnProperty("visible"), "Configurable is configurable");

	x = {};
	t(x, o1);
	a.throws(function () {
		delete x.hidden;
	}, "Not configurable is not configurable");

	x = Object.defineProperty({}, "foo",
		{ configurable: false, writable: true, enumerable: false, value: "bar" });

	try {
 t(x, { foo: "lorem" });
} catch (ignore) {}
	a(x.foo, "bar", "Writable, not enumerable");
};
