"use strict";

module.exports = function (t, a) {
	var promise;
	a(t(), false);
	a(t(null), false);
	a(t("promise"), false);
	a(t({}), false);
	a(t(function () {}), false);
	a(t({ then: {} }), false);
	a(t({ then: function () {} }), true);
	promise = function () {};
	promise.then = {};
	a(t(promise), false);
	promise.then = function () {};
	a(t(promise), true);
};
