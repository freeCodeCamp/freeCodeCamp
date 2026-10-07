/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const Hook = require("./Hook");
const HookCodeFactory = require("./HookCodeFactory");

class SyncBailHookCodeFactory extends HookCodeFactory {
	content({ onError, onResult, resultReturns, onDone, rethrowIfPossible }) {
		return this.callTapsSeries({
			onError: (i, err) => onError(err),
			onResult: (i, result, next) =>
				`if(${result} !== undefined) {\n${onResult(
					result
				)};\n} else {\n${next()}}\n`,
			resultReturns,
			onDone,
			rethrowIfPossible
		});
	}
}

const factory = new SyncBailHookCodeFactory();

const TAP_ASYNC = () => {
	throw new Error("tapAsync is not supported on a SyncBailHook");
};

const TAP_PROMISE = () => {
	throw new Error("tapPromise is not supported on a SyncBailHook");
};

function COMPILE(options) {
	factory.setup(this, options);
	return factory.create(options);
}

function SyncBailHook(args = [], name = undefined) {
	const hook = new Hook(args, name);
	hook.constructor = SyncBailHook;
	hook.tapAsync = TAP_ASYNC;
	hook.tapPromise = TAP_PROMISE;
	hook.compile = COMPILE;
	return hook;
}

SyncBailHook.prototype = null;

module.exports = SyncBailHook;
