'use strict';

var ee = require('../');

module.exports = function (t) {
	var x, y;
	return {
		Any: function (a) {
			a(t(true), false, "Primitive");
			a(t({ events: [] }), false, "Other object");
			a(t(x = ee()), false, "Emitter: empty");

			x.on('test', y = function () {});
			a(t(x), true, "Emitter: full");
			x.off('test', y);
			a(t(x), false, "Emitter: empty but touched");
			x.once('test', y = function () {});
			a(t(x), true, "Emitter: full: Once");
			x.off('test', y);
			a(t(x), false, "Emitter: empty but touched by once");
		},
		Specific: function (a) {
			a(t(true, 'test'), false, "Primitive");
			a(t({ events: [] }, 'test'), false, "Other object");
			a(t(x = ee(), 'test'), false, "Emitter: empty");

			x.on('test', y = function () {});
			a(t(x, 'test'), true, "Emitter: full");
			a(t(x, 'foo'), false, "Emitter: full, other event");
			x.off('test', y);
			a(t(x, 'test'), false, "Emitter: empty but touched");
			a(t(x, 'foo'), false, "Emitter: empty but touched, other event");

			x.once('test', y = function () {});
			a(t(x, 'test'), true, "Emitter: full: Once");
			a(t(x, 'foo'), false, "Emitter: full: Once,  other event");
			x.off('test', y);
			a(t(x, 'test'), false, "Emitter: empty but touched by once");
			a(t(x, 'foo'), false, "Emitter: empty but touched by once, other event");
		}
	};
};
