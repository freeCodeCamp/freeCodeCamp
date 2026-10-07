// Reference counter, useful for garbage collector like functionality

"use strict";

var d          = require("d")
  , extensions = require("../lib/registered-extensions")

  , create = Object.create, defineProperties = Object.defineProperties;

extensions.refCounter = function (ignore, conf, options) {
	var cache, postfix;

	cache = create(null);
	postfix = (options.async && extensions.async) || (options.promise && extensions.promise)
		? "async" : "";

	conf.on("set" + postfix, function (id, length) {
 cache[id] = length || 1;
});
	conf.on("get" + postfix, function (id) {
 ++cache[id];
});
	conf.on("delete" + postfix, function (id) {
 delete cache[id];
});
	conf.on("clear" + postfix, function () {
 cache = {};
});

	defineProperties(conf.memoized, {
		deleteRef: d(function () {
			var id = conf.get(arguments);
			if (id === null) return null;
			if (!cache[id]) return null;
			if (!--cache[id]) {
				conf.delete(id);
				return true;
			}
			return false;
		}),
		getRefCount: d(function () {
			var id = conf.get(arguments);
			if (id === null) return 0;
			if (!cache[id]) return 0;
			return cache[id];
		})
	});
};
