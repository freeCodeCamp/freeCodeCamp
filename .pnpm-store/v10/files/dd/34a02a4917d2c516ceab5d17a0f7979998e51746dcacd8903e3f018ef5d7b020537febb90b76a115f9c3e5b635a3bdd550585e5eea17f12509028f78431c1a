/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const Hook = require("./Hook");
const HookCodeFactory = require("./HookCodeFactory");

class AsyncSeriesLoopHookCodeFactory extends HookCodeFactory {
	content({ onError, onDone }) {
		return this.callTapsLooping({
			onError: (i, err, next, doneBreak) => onError(err) + doneBreak(true),
			onDone
		});
	}
}

const factory = new AsyncSeriesLoopHookCodeFactory();

class AsyncSeriesLoopHook extends Hook {
	compile(options) {
		factory.setup(this, options);
		return factory.create(options);
	}
}

Object.defineProperties(AsyncSeriesLoopHook.prototype, {
	_call: { value: undefined, configurable: true, writable: true }
});

module.exports = AsyncSeriesLoopHook;
