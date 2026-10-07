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

function COMPILE(options) {
	factory.setup(this, options);
	return factory.create(options);
}

function AsyncSeriesLoopHook(args = [], name = undefined) {
	const hook = new Hook(args, name);
	hook.constructor = AsyncSeriesLoopHook;
	hook.compile = COMPILE;
	hook._call = undefined;
	hook.call = undefined;
	return hook;
}

AsyncSeriesLoopHook.prototype = null;

module.exports = AsyncSeriesLoopHook;
