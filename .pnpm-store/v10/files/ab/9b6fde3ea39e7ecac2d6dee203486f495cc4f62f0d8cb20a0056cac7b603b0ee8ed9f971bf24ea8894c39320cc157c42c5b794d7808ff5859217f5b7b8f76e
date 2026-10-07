/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const Hook = require("./Hook");
const HookCodeFactory = require("./HookCodeFactory");

class AsyncSeriesWaterfallHookCodeFactory extends HookCodeFactory {
	content({ onError, onResult, onDone }) {
		return this.callTapsSeries({
			onError: (i, err, next, doneBreak) => onError(err) + doneBreak(true),
			onResult: (i, result, next) => {
				let code = "";
				code += `if(${result} !== undefined) {\n`;
				code += `${this._args[0]} = ${result};\n`;
				code += `}\n`;
				code += next();
				return code;
			},
			onDone: () => onResult(this._args[0])
		});
	}
}

const factory = new AsyncSeriesWaterfallHookCodeFactory();

class AsyncSeriesWaterfallHook extends Hook {
	constructor(args) {
		super(args);
		if (args.length < 1)
			throw new Error("Waterfall hooks must have at least one argument");
	}

	compile(options) {
		factory.setup(this, options);
		return factory.create(options);
	}
}

Object.defineProperties(AsyncSeriesWaterfallHook.prototype, {
	_call: { value: undefined, configurable: true, writable: true }
});

module.exports = AsyncSeriesWaterfallHook;
