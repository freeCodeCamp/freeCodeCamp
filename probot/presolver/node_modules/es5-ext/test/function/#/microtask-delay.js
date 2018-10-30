"use strict";

var nextTick = require("next-tick");

module.exports = function (t, a, d) {
	var wasInvoked = false, args = [{}, {}], context = {};
	var target = t.call(function () {
		a(this, context);
		a.deep(arguments, args);
		wasInvoked = true;
	});

	nextTick(function () {
		a(wasInvoked, false);
		target.apply(context, args);
		a(wasInvoked, false);
		nextTick(function () {
			a(wasInvoked, true);
			d();
		});
	});
};
