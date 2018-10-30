'use strict';

module.exports = function (t, a) {
	var x = t(), y, count, count2, count3, count4, test, listener1, listener2;

	x.emit('none');

	test = "Once: ";
	count = 0;
	x.once('foo', function (a1, a2, a3) {
		a(this, x, test + "Context");
		a.deep([a1, a2, a3], ['foo', x, 15], test + "Arguments");
		++count;
	});

	x.emit('foobar');
	a(count, 0, test + "Not invoked on other event");
	x.emit('foo', 'foo', x, 15);
	a(count, 1, test + "Emitted");
	x.emit('foo');
	a(count, 1, test + "Emitted once");

	test = "On & Once: ";
	count = 0;
	x.on('foo', listener1 = function (a1, a2, a3) {
		a(this, x, test + "Context");
		a.deep([a1, a2, a3], ['foo', x, 15], test + "Arguments");
		++count;
	});
	count2 = 0;
	x.once('foo', listener2 = function (a1, a2, a3) {
		a(this, x, test + "Context");
		a.deep([a1, a2, a3], ['foo', x, 15], test + "Arguments");
		++count2;
	});

	x.emit('foobar');
	a(count, 0, test + "Not invoked on other event");
	x.emit('foo', 'foo', x, 15);
	a(count, 1, test + "Emitted");
	x.emit('foo', 'foo', x, 15);
	a(count, 2, test + "Emitted twice");
	a(count2, 1, test + "Emitted once");
	x.off('foo', listener1);
	x.emit('foo');
	a(count, 2, test + "Not emitter after off");

	count = 0;
	x.once('foo', listener1 = function () { ++count; });

	x.off('foo', listener1);
	x.emit('foo');
	a(count, 0, "Once Off: Not emitted");

	count = 0;
	x.on('foo', listener2 = function () {});
	x.once('foo', listener1 = function () { ++count; });

	x.off('foo', listener1);
	x.emit('foo');
	a(count, 0, "Once Off (multi): Not emitted");
	x.off('foo', listener2);

	test = "Prototype Share: ";

	y = Object.create(x);

	count = 0;
	count2 = 0;
	count3 = 0;
	count4 = 0;
	x.on('foo', function () {
		++count;
	});
	y.on('foo', function () {
		++count2;
	});
	x.once('foo', function () {
		++count3;
	});
	y.once('foo', function () {
		++count4;
	});
	x.emit('foo');
	a(count, 1, test + "x on count");
	a(count2, 0, test + "y on count");
	a(count3, 1, test + "x once count");
	a(count4, 0, test + "y once count");

	y.emit('foo');
	a(count, 1, test + "x on count");
	a(count2, 1, test + "y on count");
	a(count3, 1, test + "x once count");
	a(count4, 1, test + "y once count");

	x.emit('foo');
	a(count, 2, test + "x on count");
	a(count2, 1, test + "y on count");
	a(count3, 1, test + "x once count");
	a(count4, 1, test + "y once count");

	y.emit('foo');
	a(count, 2, test + "x on count");
	a(count2, 2, test + "y on count");
	a(count3, 1, test + "x once count");
	a(count4, 1, test + "y once count");
};
