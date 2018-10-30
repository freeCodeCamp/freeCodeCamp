"use strict";

module.exports = function (t, a) {
	var obj = { foo: { bar: { lorem: 12 } } };
	a(t(obj), obj, "No props");
	a(t(obj, "foo"), obj.foo, "One");
	a(t(obj, "raz"), undefined, "One: Fail");
	a(t(obj, "foo", "bar"), obj.foo.bar, "Two");
	a(t(obj, "dsd", "raz"), undefined, "Two: Fail #1");
	a(t(obj, "foo", "raz"), undefined, "Two: Fail #2");
	a(t(obj, "foo", "bar", "lorem"), obj.foo.bar.lorem, "Three");
	a(t(obj, "dsd", "raz", "fef"), undefined, "Three: Fail #1");
	a(t(obj, "foo", "raz", "asdf"), undefined, "Three: Fail #2");
	a(t(obj, "foo", "bar", "asd"), undefined, "Three: Fail #3");
};
