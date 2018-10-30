"use strict";

var isFunction = require("../function/is-function");

module.exports = function (executor) {
	var Constructor;
	if (isFunction(this)) {
		Constructor = this;
	} else if (typeof Promise === "function") {
		Constructor = Promise;
	} else {
		throw new TypeError("Could not resolve Promise constuctor");
	}

	var lazyThen;
	var promise = new Constructor(function (resolve, reject) {
		lazyThen = function (onSuccess, onFailure) {
			if (!hasOwnProperty.call(this, "then")) {
				// Sanity check
				throw new Error("Unexpected (inherited) lazy then invocation");
			}

			try {
				executor(resolve, reject);
			} catch (reason) {
				reject(reason);
			}
			delete this.then;
			return this.then(onSuccess, onFailure);
		};
	});

	return Object.defineProperty(promise, "then", {
		configurable: true,
		writable: true,
		value: lazyThen
	});
};
