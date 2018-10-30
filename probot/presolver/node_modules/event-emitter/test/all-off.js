'use strict';

var ee = require('../');

module.exports = function (t, a) {
	var x, count, count2;

	x = ee();
	count = 0;
	count2 = 0;
	x.on('foo', function () {
		++count;
	});
	x.on('foo', function () {
		++count;
	});
	x.on('bar', function () {
		++count2;
	});
	x.on('bar', function () {
		++count2;
	});
	t(x, 'foo');
	x.emit('foo');
	x.emit('bar');
	a(count, 0, "All off: type");
	a(count2, 2, "All off: ohter type");

	count = 0;
	count2 = 0;
	x.on('foo', function () {
		++count;
	});
	x.on('foo', function () {
		++count;
	});
	x.on('bar', function () {
		++count2;
	});
	x.on('bar', function () {
		++count2;
	});
	t(x);
	x.emit('foo');
	x.emit('bar');
	a(count, 0, "All off: type");
	a(count2, 0, "All off: other type");
};
