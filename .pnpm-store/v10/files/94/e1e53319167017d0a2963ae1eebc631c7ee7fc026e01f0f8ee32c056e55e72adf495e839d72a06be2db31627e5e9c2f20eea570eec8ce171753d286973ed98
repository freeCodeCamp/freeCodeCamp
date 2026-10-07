"use strict";

var ensureNaturalNumber  = require("type/natural-number/ensure")
  , ensurePlainFunction  = require("type/plain-function/ensure")
  , ensure               = require("type/ensure")
  , defineFunctionLength = require("../lib/private/define-function-length");

module.exports = function (limit, callback) {
	limit = ensure(
		["limit", limit, ensureNaturalNumber, { min: 1 }],
		["callback", callback, ensurePlainFunction]
	)[0];

	var Promise = this, ongoingCount = 0, pending = [];
	var onSuccess, onFailure;

	var release = function () {
		--ongoingCount;
		if (ongoingCount >= limit) return;
		var next = pending.shift();
		if (!next) return;
		++ongoingCount;
		try {
			next.resolve(
				Promise.resolve(callback.apply(next.context, next.arguments)).then(
					onSuccess, onFailure
				)
			);
		} catch (exception) {
			release();
			next.reject(exception);
		}
	};

	onSuccess = function (value) {
		release();
		return value;
	};

	onFailure = function (exception) {
		release();
		throw exception;
	};

	return defineFunctionLength(callback.length, function () {
		if (ongoingCount >= limit) {
			var context = this, args = arguments;
			return new Promise(function (resolve, reject) {
				pending.push({
					context: context,
					arguments: args,
					resolve: resolve,
					reject: reject
				});
			});
		}
		++ongoingCount;
		try {
			return Promise.resolve(callback.apply(this, arguments)).then(onSuccess, onFailure);
		} catch (exception) { return onFailure(exception); }
	});
};
