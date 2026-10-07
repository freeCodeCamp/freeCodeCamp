/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const util = require("util");

const deprecateContext = util.deprecate(
	() => {},
	"Hook.context is deprecated and will be removed"
);

function CALL_DELEGATE(...args) {
	this.call = this._createCall("sync");
	return this.call(...args);
}

function CALL_ASYNC_DELEGATE(...args) {
	this.callAsync = this._createCall("async");
	return this.callAsync(...args);
}

function PROMISE_DELEGATE(...args) {
	this.promise = this._createCall("promise");
	return this.promise(...args);
}

class Hook {
	constructor(args = [], name = undefined) {
		this._args = args;
		this.name = name;
		this.taps = [];
		this.interceptors = [];
		this._call = CALL_DELEGATE;
		this.call = CALL_DELEGATE;
		this._callAsync = CALL_ASYNC_DELEGATE;
		this.callAsync = CALL_ASYNC_DELEGATE;
		this._promise = PROMISE_DELEGATE;
		this.promise = PROMISE_DELEGATE;
		this._x = undefined;

		// eslint-disable-next-line no-self-assign
		this.compile = this.compile;
		// eslint-disable-next-line no-self-assign
		this.tap = this.tap;
		// eslint-disable-next-line no-self-assign
		this.tapAsync = this.tapAsync;
		// eslint-disable-next-line no-self-assign
		this.tapPromise = this.tapPromise;
	}

	compile(_options) {
		throw new Error("Abstract: should be overridden");
	}

	_createCall(type) {
		return this.compile({
			taps: this.taps,
			interceptors: this.interceptors,
			args: this._args,
			type
		});
	}

	_tap(type, options, fn) {
		if (typeof options === "string") {
			options = {
				name: options
			};
		} else if (typeof options !== "object" || options === null) {
			throw new Error("Invalid tap options");
		}
		if (typeof options.name === "string") {
			options.name = options.name.trim();
		}
		if (typeof options.name !== "string" || options.name === "") {
			throw new Error("Missing name for tap");
		}
		if (typeof options.context !== "undefined") {
			deprecateContext();
		}
		options = Object.assign({ type, fn }, options);
		options = this._runRegisterInterceptors(options);
		this._insert(options);
	}

	tap(options, fn) {
		this._tap("sync", options, fn);
	}

	tapAsync(options, fn) {
		this._tap("async", options, fn);
	}

	tapPromise(options, fn) {
		this._tap("promise", options, fn);
	}

	_runRegisterInterceptors(options) {
		for (const interceptor of this.interceptors) {
			if (interceptor.register) {
				const newOptions = interceptor.register(options);
				if (newOptions !== undefined) {
					options = newOptions;
				}
			}
		}
		return options;
	}

	withOptions(options) {
		const mergeOptions = (opt) =>
			Object.assign({}, options, typeof opt === "string" ? { name: opt } : opt);

		return {
			name: this.name,
			tap: (opt, fn) => this.tap(mergeOptions(opt), fn),
			tapAsync: (opt, fn) => this.tapAsync(mergeOptions(opt), fn),
			tapPromise: (opt, fn) => this.tapPromise(mergeOptions(opt), fn),
			intercept: (interceptor) => this.intercept(interceptor),
			isUsed: () => this.isUsed(),
			withOptions: (opt) => this.withOptions(mergeOptions(opt))
		};
	}

	isUsed() {
		return this.taps.length > 0 || this.interceptors.length > 0;
	}

	intercept(interceptor) {
		this._resetCompilation();
		this.interceptors.push(Object.assign({}, interceptor));
		if (interceptor.register) {
			for (let i = 0; i < this.taps.length; i++) {
				this.taps[i] = interceptor.register(this.taps[i]);
			}
		}
	}

	_resetCompilation() {
		this.call = this._call;
		this.callAsync = this._callAsync;
		this.promise = this._promise;
	}

	_insert(item) {
		this._resetCompilation();
		let before;
		if (typeof item.before === "string") {
			before = new Set([item.before]);
		} else if (Array.isArray(item.before)) {
			before = new Set(item.before);
		}
		let stage = 0;
		if (typeof item.stage === "number") {
			stage = item.stage;
		}
		let i = this.taps.length;
		while (i > 0) {
			i--;
			const tap = this.taps[i];
			this.taps[i + 1] = tap;
			const xStage = tap.stage || 0;
			if (before) {
				if (before.has(tap.name)) {
					before.delete(tap.name);
					continue;
				}
				if (before.size > 0) {
					continue;
				}
			}
			if (xStage > stage) {
				continue;
			}
			i++;
			break;
		}
		this.taps[i] = item;
	}
}

Object.setPrototypeOf(Hook.prototype, null);

module.exports = Hook;
