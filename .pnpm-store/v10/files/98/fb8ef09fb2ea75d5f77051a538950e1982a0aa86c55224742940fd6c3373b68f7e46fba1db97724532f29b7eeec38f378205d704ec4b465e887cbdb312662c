/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const Hook = require("./Hook");

class MultiHook {
	constructor(hooks) {
		this.hooks = hooks;
	}

	tap(options, fn) {
		for (const hook of this.hooks) {
			hook.tap(options, fn);
		}
	}

	tapAsync(options, fn) {
		for (const hook of this.hooks) {
			hook.tapAsync(options, fn);
		}
	}

	tapPromise(options, fn) {
		for (const hook of this.hooks) {
			hook.tapPromise(options, fn);
		}
	}

	isUsed() {
		for (const hook of this.hooks) {
			if (hook.isUsed()) return true;
		}
		return false;
	}

	intercept(interceptor) {
		for (const hook of this.hooks) {
			hook.intercept(interceptor);
		}
	}

	withOptions(options) {
		return new MultiHook(this.hooks.map(h => h.withOptions(options)));
	}
}

module.exports = MultiHook;
