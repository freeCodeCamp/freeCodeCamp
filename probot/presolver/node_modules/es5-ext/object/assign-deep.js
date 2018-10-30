"use strict";

var includes      = require("../array/#/contains")
  , uniq          = require("../array/#/uniq")
  , copyDeep      = require("./copy-deep")
  , objForEach    = require("./for-each")
  , isPlainObject = require("./is-plain-object")
  , ensureValue   = require("./valid-value");

var isArray = Array.isArray, slice = Array.prototype.slice;

var deepAssign = function (target, source) {
	if (target === source) return target;
	if (isPlainObject(target) && isPlainObject(source)) {
		objForEach(source, function (value, key) { target[key] = deepAssign(target[key], value); });
		return target;
	}
	if (isArray(target) && isArray(source)) {
		source.forEach(function (item) {
			if (includes.call(target, item)) return;
			if (isArray(item) || isPlainObject(item)) item = copyDeep(item);
			target.push(item);
		});
		return target;
	}
	if (isPlainObject(source) || isArray(source)) return copyDeep(source);
	return source;
};

module.exports = function (target/*, ...objects*/) {
	return uniq
		.call([ensureValue(target)].concat(slice.call(arguments, 1).map(ensureValue)))
		.reduce(deepAssign);
};
