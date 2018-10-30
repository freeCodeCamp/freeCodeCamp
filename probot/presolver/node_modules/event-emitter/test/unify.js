'use strict';

var ee = require('../');

module.exports = function (t) {

	return {
		"": function (a) {
			var x = {}, y = {}, z = {}, count, count2, count3;

			ee(x);
			ee(y);
			ee(z);

			count = 0;
			count2 = 0;
			count3 = 0;
			x.on('foo', function () { ++count; });
			y.on('foo', function () { ++count2; });
			z.on('foo', function () { ++count3; });

			x.emit('foo');
			a(count, 1, "Pre unify, x");
			a(count2, 0, "Pre unify, y");
			a(count3, 0, "Pre unify, z");

			t(x, y);
			a(x.__ee__, y.__ee__, "Post unify y");
			x.emit('foo');
			a(count, 2, "Post unify, x");
			a(count2, 1, "Post unify, y");
			a(count3, 0, "Post unify, z");

			y.emit('foo');
			a(count, 3, "Post unify, on y, x");
			a(count2, 2, "Post unify, on y, y");
			a(count3, 0, "Post unify, on y, z");

			t(x, z);
			a(x.__ee__, x.__ee__, "Post unify z");
			x.emit('foo');
			a(count, 4, "Post unify z, x");
			a(count2, 3, "Post unify z, y");
			a(count3, 1, "Post unify z, z");
		},
		"On empty": function (a) {
			var x = {}, y = {}, z = {}, count, count2, count3;

			ee(x);
			ee(y);
			ee(z);

			count = 0;
			count2 = 0;
			count3 = 0;
			y.on('foo', function () { ++count2; });
			x.emit('foo');
			a(count, 0, "Pre unify, x");
			a(count2, 0, "Pre unify, y");
			a(count3, 0, "Pre unify, z");

			t(x, y);
			a(x.__ee__, y.__ee__, "Post unify y");
			x.on('foo', function () { ++count; });
			x.emit('foo');
			a(count, 1, "Post unify, x");
			a(count2, 1, "Post unify, y");
			a(count3, 0, "Post unify, z");

			y.emit('foo');
			a(count, 2, "Post unify, on y, x");
			a(count2, 2, "Post unify, on y, y");
			a(count3, 0, "Post unify, on y, z");

			t(x, z);
			a(x.__ee__, z.__ee__, "Post unify z");
			z.on('foo', function () { ++count3; });
			x.emit('foo');
			a(count, 3, "Post unify z, x");
			a(count2, 3, "Post unify z, y");
			a(count3, 1, "Post unify z, z");
		},
		Many: function (a) {
			var x = {}, y = {}, z = {}, count, count2, count3;

			ee(x);
			ee(y);
			ee(z);

			count = 0;
			count2 = 0;
			count3 = 0;
			x.on('foo', function () { ++count; });
			y.on('foo', function () { ++count2; });
			y.on('foo', function () { ++count2; });
			z.on('foo', function () { ++count3; });

			x.emit('foo');
			a(count, 1, "Pre unify, x");
			a(count2, 0, "Pre unify, y");
			a(count3, 0, "Pre unify, z");

			t(x, y);
			a(x.__ee__, y.__ee__, "Post unify y");
			x.emit('foo');
			a(count, 2, "Post unify, x");
			a(count2, 2, "Post unify, y");
			a(count3, 0, "Post unify, z");

			y.emit('foo');
			a(count, 3, "Post unify, on y, x");
			a(count2, 4, "Post unify, on y, y");
			a(count3, 0, "Post unify, on y, z");

			t(x, z);
			a(x.__ee__, x.__ee__, "Post unify z");
			x.emit('foo');
			a(count, 4, "Post unify z, x");
			a(count2, 6, "Post unify z, y");
			a(count3, 1, "Post unify z, z");
		}
	};
};
