'use strict';

var ee = require('../');

module.exports = function (t, a) {
	var x = {}, y = {}, z = {}, count, count2, count3, pipe;

	ee(x);
	x = Object.create(x);
	ee(y);
	ee(z);

	count = 0;
	count2 = 0;
	count3 = 0;
	x.on('foo', function () {
		++count;
	});
	y.on('foo', function () {
		++count2;
	});
	z.on('foo', function () {
		++count3;
	});

	x.emit('foo');
	a(count, 1, "Pre pipe, x");
	a(count2, 0, "Pre pipe, y");
	a(count3, 0, "Pre pipe, z");

	pipe = t(x, y);
	x.emit('foo');
	a(count, 2, "Post pipe, x");
	a(count2, 1, "Post pipe, y");
	a(count3, 0, "Post pipe, z");

	y.emit('foo');
	a(count, 2, "Post pipe, on y, x");
	a(count2, 2, "Post pipe, on y, y");
	a(count3, 0, "Post pipe, on y, z");

	t(x, z);
	x.emit('foo');
	a(count, 3, "Post pipe z, x");
	a(count2, 3, "Post pipe z, y");
	a(count3, 1, "Post pipe z, z");

	pipe.close();
	x.emit('foo');
	a(count, 4, "Close pipe y, x");
	a(count2, 3, "Close pipe y, y");
	a(count3, 2, "Close pipe y, z");
};
