/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const Hook = require("./Hook");
const HookCodeFactory = require("./HookCodeFactory");

class SyncHookCodeFactory extends HookCodeFactory {
	content({ onError, onDone, rethrowIfPossible }) {
		return this.callTapsSeries({
			onError: (i, err) => onError(err),
			onDone,
			rethrowIfPossible
		});
	}
}

const factory = new SyncHookCodeFactory();

class SyncHook extends Hook {
	tapAsync() {
		throw new Error("tapAsync is not supported on a SyncHook");
	}

	tapPromise() {
		throw new Error("tapPromise is not supported on a SyncHook");
	}

	compile(options) {
		factory.setup(this, options);
		return factory.create(options);
	}
}

module.exports = SyncHook;
