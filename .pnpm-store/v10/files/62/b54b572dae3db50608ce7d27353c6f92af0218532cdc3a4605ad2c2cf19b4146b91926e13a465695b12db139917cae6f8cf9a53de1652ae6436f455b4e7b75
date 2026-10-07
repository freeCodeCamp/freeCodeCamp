/* eslint max-statements: 0 */

// Support for functions returning promise

"use strict";

var objectMap     = require("es5-ext/object/map")
  , primitiveSet  = require("es5-ext/object/primitive-set")
  , ensureString  = require("es5-ext/object/validate-stringifiable-value")
  , toShortString = require("es5-ext/to-short-string-representation")
  , isPromise     = require("is-promise")
  , nextTick      = require("next-tick");

var create = Object.create
  , supportedModes = primitiveSet("then", "then:finally", "done", "done:finally");

require("../lib/registered-extensions").promise = function (mode, conf) {
	var waiting = create(null), cache = create(null), promises = create(null);

	if (mode === true) {
		mode = null;
	} else {
		mode = ensureString(mode);
		if (!supportedModes[mode]) {
			throw new TypeError("'" + toShortString(mode) + "' is not valid promise mode");
		}
	}

	// After not from cache call
	conf.on("set", function (id, ignore, promise) {
		var isFailed = false;

		if (!isPromise(promise)) {
			// Non promise result
			cache[id] = promise;
			conf.emit("setasync", id, 1);
			return;
		}
		waiting[id] = 1;
		promises[id] = promise;
		var onSuccess = function (result) {
			var count = waiting[id];
			if (isFailed) {
				throw new Error(
					"Memoizee error: Detected unordered then|done & finally resolution, which " +
						"in turn makes proper detection of success/failure impossible (when in " +
						"'done:finally' mode)\n" +
						"Consider to rely on 'then' or 'done' mode instead."
				);
			}
			if (!count) return; // Deleted from cache before resolved
			delete waiting[id];
			cache[id] = result;
			conf.emit("setasync", id, count);
		};
		var onFailure = function () {
			isFailed = true;
			if (!waiting[id]) return; // Deleted from cache (or succeed in case of finally)
			delete waiting[id];
			delete promises[id];
			conf.delete(id);
		};

		var resolvedMode = mode;
		if (!resolvedMode) resolvedMode = "then";

		if (resolvedMode === "then") {
			var nextTickFailure = function () { nextTick(onFailure); };
			// Eventual finally needs to be attached to non rejected promise
			// (so we not force propagation of unhandled rejection)
			promise = promise.then(function (result) {
				nextTick(onSuccess.bind(this, result));
			}, nextTickFailure);
			// If `finally` is a function we attach to it to remove cancelled promises.
			if (typeof promise.finally === "function") {
				promise.finally(nextTickFailure);
			}
		} else if (resolvedMode === "done") {
			// Not recommended, as it may mute any eventual "Unhandled error" events
			if (typeof promise.done !== "function") {
				throw new Error(
					"Memoizee error: Retrieved promise does not implement 'done' " +
						"in 'done' mode"
				);
			}
			promise.done(onSuccess, onFailure);
		} else if (resolvedMode === "done:finally") {
			// The only mode with no side effects assuming library does not throw unconditionally
			// for rejected promises.
			if (typeof promise.done !== "function") {
				throw new Error(
					"Memoizee error: Retrieved promise does not implement 'done' " +
						"in 'done:finally' mode"
				);
			}
			if (typeof promise.finally !== "function") {
				throw new Error(
					"Memoizee error: Retrieved promise does not implement 'finally' " +
						"in 'done:finally' mode"
				);
			}
			promise.done(onSuccess);
			promise.finally(onFailure);
		}
	});

	// From cache (sync)
	conf.on("get", function (id, args, context) {
		var promise;
		if (waiting[id]) {
			++waiting[id]; // Still waiting
			return;
		}
		promise = promises[id];
		var emit = function () { conf.emit("getasync", id, args, context); };
		if (isPromise(promise)) {
			if (typeof promise.done === "function") promise.done(emit);
			else {
				promise.then(function () { nextTick(emit); });
			}
		} else {
			emit();
		}
	});

	// On delete
	conf.on("delete", function (id) {
		delete promises[id];
		if (waiting[id]) {
			delete waiting[id];
			return; // Not yet resolved
		}
		if (!hasOwnProperty.call(cache, id)) return;
		var result = cache[id];
		delete cache[id];
		conf.emit("deleteasync", id, [result]);
	});

	// On clear
	conf.on("clear", function () {
		var oldCache = cache;
		cache = create(null);
		waiting = create(null);
		promises = create(null);
		conf.emit("clearasync", objectMap(oldCache, function (data) { return [data]; }));
	});
};
