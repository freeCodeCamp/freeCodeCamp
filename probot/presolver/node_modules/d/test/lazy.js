'use strict';

var d = require('../')

  , getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

module.exports = function (t, a) {
	var Foo = function () {}, i = 1, o, o2, desc;
	Object.defineProperties(Foo.prototype, t({
		bar: d(function () { return ++i; }),
		bar2: d(function () { return this.bar + 23; }),
		bar3: d(function () { return this.bar2 + 34; }, { desc: 'ew' }),
		bar4: d(function () { return this.bar3 + 12; }, { cacheName: '_bar4_' }),
		bar5: d(function () { return this.bar4 + 3; },
			{ cacheName: '_bar5_', desc: 'e' })
	}));

	desc = getOwnPropertyDescriptor(Foo.prototype, 'bar');
	a(desc.configurable, true, "Configurable: default");
	a(desc.enumerable, false, "Enumerable: default");

	o = new Foo();
	a.deep([o.bar, o.bar2, o.bar3, o.bar4, o.bar5], [2, 25, 59, 71, 74],
		"Values");

	a.deep(getOwnPropertyDescriptor(o, 'bar3'), { configurable: false,
		enumerable: true, writable: true, value: 59 }, "Desc");
	a(o.hasOwnProperty('bar4'), false, "Cache not exposed");
	desc = getOwnPropertyDescriptor(o, 'bar5');
	a.deep(desc, { configurable: false,
		enumerable: true, get: desc.get, set: desc.set }, "Cache & Desc: desc");

	o2 = Object.create(o);
	o2.bar = 30;
	o2.bar3 = 100;

	a.deep([o2.bar, o2.bar2, o2.bar3, o2.bar4, o2.bar5], [30, 25, 100, 112, 115],
		"Extension Values");

	Foo = function () {};
	Object.defineProperties(Foo.prototype, t({
		test: d('w', function () { return 'raz'; }),
		test2: d('', function () { return 'raz'; }, { desc: 'w' }),
		test3: d('', function () { return 'raz'; },
			{ cacheName: '__test3__', desc: 'w' }),
		test4: d('w', 'bar')
	}));

	o = new Foo();
	o.test = 'marko';
	a.deep(getOwnPropertyDescriptor(o, 'test'),
		{ configurable: false, enumerable: false, writable: true, value: 'marko' },
		"Set before get");
	o.test2 = 'marko2';
	a.deep(getOwnPropertyDescriptor(o, 'test2'),
		{ configurable: false, enumerable: false, writable: true, value: 'marko2' },
		"Set before get: Custom desc");
	o.test3 = 'marko3';
	a.deep(getOwnPropertyDescriptor(o, '__test3__'),
		{ configurable: false, enumerable: false, writable: true, value: 'marko3' },
		"Set before get: Custom cache name");
	a(o.test4, 'bar', "Resolve by value");

	a.h1("Flat");
	Object.defineProperties(Foo.prototype, t({
		flat: d(function () { return 'foo'; }, { flat: true }),
		flat2: d(function () { return 'bar'; }, { flat: true })
	}));

	a.h2("Instance");
	a(o.flat, 'foo', "Value");
	a(o.hasOwnProperty('flat'), false, "Instance");
	a(Foo.prototype.flat, 'foo', "Prototype");

	a.h2("Direct");
	a(Foo.prototype.flat2, 'bar');

	a.h2("Reset direct");
	Object.defineProperties(Foo.prototype, t({ testResetDirect: d(false) }));

	a.throws(function () { Foo.prototype.testResetDirect = false; }, TypeError);
};
