/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const Hook = require("./Hook");
const HookCodeFactory = require("./HookCodeFactory");

class AsyncParallelHookCodeFactory extends HookCodeFactory {
	content({ onError, onDone }) {
		return this.callTapsParallel({
			onError: (i, err, done, doneBreak) => onError(err) + doneBreak(true),
			onDone
		});
	}
}

const factory = new AsyncParallelHookCodeFactory();

class AsyncParallelHook extends Hook {
	compile(options) {
		factory.setup(this, options);
		return factory.create(options);
	}
}

Object.defineProperties(AsyncParallelHook.prototype, {
	_call: { value: undefined, configurable: true, writable: true }
});

module.exports = AsyncParallelHook;
